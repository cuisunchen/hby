import { onMounted, ref, onUnmounted } from "vue";
import { Scene,PerspectiveCamera,DirectionalLight,AmbientLight,WebGLRenderer,SkeletonHelper,Vector2,Raycaster,MeshBasicMaterial,DoubleSide,
    AnimationMixer,Clock,Texture,SpriteMaterial,Sprite,CatmullRomCurve3,Vector3,Matrix4,Euler,Quaternion } from 'three'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass  } from 'three/examples/jsm/postprocessing/OutlinePass.js'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MTLLoader } from "three-obj-mtl-loader";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import TWEEN from '@tweenjs/tween.js'

export const creatThree = (threeModel) => {
    let scene = new Scene(), camera = null, renderer = null, controls = null,clock;
    let composer, outlinePass, mixer, walkAction;
    let initCameraX = 0,initCameraY = 700,initCameraZ = 800;

    let loading = ref(true);
    const mouse = new Vector2();
    const raycaster = new Raycaster();
    let selectedObjects = [];

    //  初始化相机
    const initCamera = () => {    
        camera = new PerspectiveCamera(75, threeModel.value.clientWidth / threeModel.value.clientHeight, 0.1, 10000)
        camera.position.set(initCameraX, initCameraY, initCameraZ)
        camera.lookAt(scene.position)
    }

    //  初始化灯光
    const initLights = () => {
        var directionalLight = new DirectionalLight( 0xffffff , 0.3 );//模拟远处类似太阳的光源
        directionalLight.position.set(200,300,400)
        scene.add( directionalLight );

        var ambient = new AmbientLight( 0xffffff, 1 ); //AmbientLight,影响整个场景的光源
        ambient.position.set(0,0,0);
        scene.add( ambient );
    }
    //  初始化渲染器
    const initRenderer = () => {
        renderer = new WebGLRenderer({
            antialias:true, // 抗锯齿
            alpha:true,
            precision:"highp",        
            logarithmicDepthBuffer: true,           //  解决加载模型后，模型某些地方闪白的问题
        })
        renderer.setSize(threeModel.value.clientWidth,threeModel.value.clientHeight)
        // renderer.setClearColor(0xb9d3f4, 1)
        threeModel.value.appendChild( renderer.domElement )
        renderer.render(scene, camera)
    }
    //  初始化控制器
    const initControles = () => {
        controls =  new OrbitControls(camera, renderer.domElement)
        controls.enablePan = true
        controls.autoRotate = true
        controls.maxPolarAngle = 1.5
        controls.minPolarAngle = 0
        controls.dampingFactor = 0
    }

    const loadModel = () => {
        let loader =  new MTLLoader()
        let objloader =  new OBJLoader()
        //  mtl为材质模型，obj为3d模型，是纯白色的，需要先加载材质，然后将材质赋值给模型的材质，模型才会有颜色
        loader.load('/public/threeModels/three.mtl',(mtl) => { 
            mtl.preload();
            // 加载贴图
            objloader.setMaterials(mtl);
            objloader.load(`/public/threeModels/three.obj`, (obj) => {
                //  定义树的材质
                let newMaterial = new MeshBasicMaterial({
                    color: 0x339900, //可修改报警时的闪烁颜色
                    transparent: true,
                    opacity: 0.8, //可修改报警闪烁是的透明度
                    wireframe: false,
                    // depthWrite: false,
                    side: DoubleSide,
                })
                //  给所有的树更换绿色材质
                for (const item of obj.children) {
                    if(item.name.includes('圆锥')){                        
                        item.material = newMaterial
                    }
                }
                obj.scale.set(1.4,1,1)
                scene.add(obj);
                loading.value = false
                loadSoldier()
            })
        })	
    }
    
    let soldier,skeleton;
    const loadSoldier = () => {
        let loader = new GLTFLoader()
        loader.load('/public/threeModels/Soldier.glb', (gltf) => {
            soldier = gltf.scene
            soldier.scale.set(30,30,30)
            soldier.position.set(70,0,0)
            scene.add( soldier );
            soldier.traverse( object => {
                if ( object.isMesh ) object.castShadow = true
            });
    
            skeleton = new SkeletonHelper( soldier );
            skeleton.visible = false;
            scene.add( skeleton );
    
            const animations = gltf.animations;   
            //  动画混合器是用于场景中特定对象的动画的播放器。当场景中的多个对象独立动画时，每个对象都可以使用同一个动画混合器。
            mixer = new AnimationMixer( soldier );
    
            walkAction = mixer.clipAction( animations[ 3 ] );
            walkAction.play()
        })
    }

    //  创建soldier运动轨迹
    let curve = null
    const makeCurve = () => {
        //  创建运动轨迹左边， 里面的数组可以用数据对象代替
        curve = new CatmullRomCurve3([
            new Vector3(70, 0, 0),
            new Vector3(70, 0, -550),
            new Vector3(40, 0, -550),
            new Vector3(40, 0, 400),
            new Vector3(70, 0, 400),
        ]);
        curve.curveType = "catmullrom";
        curve.closed = true;//设置是否闭环
        curve.tension = 0; //设置线的张力，0为无弧度折线
    }
    let progress = 0; // 物体运动时在运动路径的初始位置，范围0~1
    const velocity = 0.0004; // 影响运动速率的一个值，范围0~1，需要和渲染频率结合计算才能得到真正的速率
    // 物体沿线移动方法
    const moveOnCurve = () => {
        if (curve == null || soldier == null) {
            console.log("Loading")
        } else {
            if (progress <= 1 - velocity) {
                const point = curve.getPointAt(progress); //获取样条曲线指定点坐标
                const pointBox = curve.getPointAt(progress + velocity); //获取样条曲线指定点坐标

                if (point && pointBox) {
                    soldier.position.set(point.x, point.y, point.z);

                    var targetPos = pointBox   //目标位置点
                    var offsetAngle = 0 //目标移动时的朝向偏移

                    // //以下代码在多段路径时可重复执行
                    var mtx = new Matrix4()  //创建一个4维矩阵
                    mtx.lookAt(soldier.position, targetPos, soldier.up) //设置朝向
                    mtx.multiply(new Matrix4().makeRotationFromEuler(new Euler(0, offsetAngle, 0)))
                    var toRot = new Quaternion().setFromRotationMatrix(mtx)  //计算出需要进行旋转的四元数值
                    soldier.quaternion.slerp(toRot, 0.2)
                }
                progress += velocity;
            } else {
                progress = 0;
            }
        }

    };
    //  制作水厂模型动画效果
    let rightEnd = false,times = 0,idCameraEnd = false,tween = null,initAngle = null;
    const moveCamera = () => { 
        // 此处逻辑是  (700-300)/0.8 == (800-0.6)/1
        if(initCameraY <= 300){
            initCameraY = 300
        }else{
            initCameraY -= 0.8
        }    
        if(initCameraZ <= 500){
            initCameraZ = 500
        }else{
            initCameraZ -= 0.6
        }
            
        if(initCameraY == 300 && initCameraZ == 500){
            if(!rightEnd){
                initCameraX += 1
                if(times == 1 && initCameraX >= 0){
                    initCameraX = 0
                    idCameraEnd = true                
                    tween = new TWEEN.Tween({x: initCameraX,y: initCameraY,z: initCameraZ})
                    tween.to({
                        x: 0 ,
                        y: 700,
                        z: 1000
                    }, 3000)
                    tween.onUpdate(function(){
                        camera.position.set(this._object.x, this._object.y, this._object.z)
                    }).start()
                    // initControles()
                    initAngle = controls.getAzimuthalAngle()
                }
            }else{
                initCameraX -= 1
            }
            if(initCameraX <= -650){
                rightEnd = false
                times= 1
            }
            if(initCameraX >= 650){
                rightEnd = true
            }
        }
        camera.position.set(initCameraX, initCameraY, initCameraZ)
    }
    //  制作模型旋转动画效果
    let modelRollTimes = 0,modelMoveEnd = false;
    const moveModel = () => {
        controls.autoRotate = true
        if(controls.getAzimuthalAngle() > 0){
            modelRollTimes = 1
        }
        if(modelRollTimes == 1 && controls.getAzimuthalAngle() <= initAngle){
            controls.autoRotate = false
            tween = new TWEEN.Tween({x: camera.position.x,y: camera.position.y,z: camera.position.z})
            tween.to({
                x: 0 ,
                y: 700,
                z: 1000
            }, 3000)
            tween.onUpdate(function(){
                camera.position.set(this._object.x, this._object.y, this._object.z)
            }).start()
            modelMoveEnd = true
        }
    }

    //  添加选中物体高亮
    const addHighLight = () => {
        composer = new EffectComposer( renderer );
        const renderPass = new RenderPass( scene, camera );
        composer.addPass( renderPass );
        outlinePass = new OutlinePass( new Vector2( threeModel.value.clientWidth, threeModel.value.clientHeight ), scene, camera );
        composer.addPass( outlinePass );
        outlinePass.pulsePeriod = 2; //数值越大，律动越慢
        outlinePass.visibleEdgeColor.set( 0xff0000 ); // 高光颜色
        outlinePass.hiddenEdgeColor.set( 0x000000 );// 阴影颜色
        outlinePass.usePatternTexture = false; // 使用纹理覆盖？
        outlinePass.edgeStrength = 5; // 高光边缘强度
        outlinePass.edgeGlow = 1; // 边缘微光强度
        outlinePass.edgeThickness = 1; // 高光厚度
    }

    const addSelectedObject = ( object ) => {
        selectedObjects = [];
        selectedObjects.push( object );
    }
    //  物体的点击行为，给选中的物体添加高亮效果
    const listenPointerdown = (e) => {
        if ( e.isPrimary === false ) return;
        mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

        raycaster.setFromCamera( mouse, camera ); 
        addHighLight()      
        const intersects = raycaster.intersectObject( scene, true );
        if ( intersects.length > 0 ) {
            //  获取到选中的物体， 默认为离鼠标点击除最近的元素
            const selectedObject = intersects[ 0 ].object;
            //  增加点击高亮效果
            addSelectedObject( selectedObject);            
            outlinePass.selectedObjects = selectedObjects; 
        } 
    }
    let animationFrame = null
    //  渲染模型
    const animate = () => {
        TWEEN.update();
        animationFrame = requestAnimationFrame( animate );
        var mixerUpdateDelta = clock.getDelta();
        moveOnCurve()
        
        if (mixer){
            // 推进混合器时间并更新动画
            mixer.update(mixerUpdateDelta);
        } 
        setTimeout(() => {
            if(!idCameraEnd){
                moveCamera()
            }else{
                if(!modelMoveEnd){
                    moveModel()
                }        
                controls.update()
            }
        },5000)
        renderer.render( scene, camera );
        if(composer != null){
            composer.render();
        }
    }
	
	onMounted(() => {
        try {
            scene &&scene.clear()
            let gl;
            if(renderer){
                renderer &&renderer.dispose()
                renderer &&renderer.forceContextLoss()
                renderer.content = null
                gl = renderer.domElement.getContext('webgl')
            }		
            if(gl){
                gl.getExtension('WEBGL_lose_context').loseContext()
            }
            cancelAnimationFrame(animationFrame) // 去除animationFrame
        } catch (e) {
            console.log(e)
        }
        clock = new Clock(); 
        initCamera()
        initLights()
        
        initRenderer()
        initControles()
        animate()
        loadModel()
        makeCurve();
        //  监听模型点击事件
        renderer.domElement.addEventListener('pointerdown',listenPointerdown)
    })
    onUnmounted(()=>{
        //  必须要写一下代码  three 3d模型很耗内存，每次离开页面不会自动销毁模型里面的几何元素和材质等   所以必须手动释放
        renderer.domElement.removeEventListener('pointerdown',listenPointerdown)
        clearTimeout()
        try {
        	scene.clear()
        	renderer.dispose()
        	renderer.forceContextLoss()
        	renderer.content = null
        	cancelAnimationFrame(animationFrame) // 去除animationFrame
        	const gl = renderer.domElement.getContext('webgl')
        	gl && gl.getExtension('WEBGL_lose_context').loseContext()
        } catch (e) {
        	console.log(e)
        }
    })
	
	return {
		loading
	}
}