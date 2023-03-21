import { onMounted, ref, onUnmounted } from "vue";
import { Scene,PerspectiveCamera,DirectionalLight,AmbientLight,WebGLRenderer,Color,PointLight,Vector2,Raycaster } from 'three'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass  } from 'three/examples/jsm/postprocessing/OutlinePass.js'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {  MTLLoader } from "three-obj-mtl-loader";
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import TWEEN from '@tweenjs/tween.js'

export const threeModel = (dom) => {
	let threeModel = dom
	let scene = new Scene(), camera = null, renderer = null, controls = null;
	let composer, effectFXAA, outlinePass;
	let initCameraX = 0,initCameraY = 700,initCameraZ = 1000,rightEnd = false,times = 0,idCameraEnd = false,tween = null,initAngle = null;
	let modelRollTimes = 0,modelMoveEnd = false;
	let selectedObjects = [];
	let animationFrame = null
	
	const mouse = new Vector2();
	const raycaster = new Raycaster();	
	
	//  初始化相机
	const initCamera = () => {    
	    camera = new PerspectiveCamera(75, threeModel.value.clientWidth / threeModel.value.clientHeight, 0.1, 10000)
	    camera.position.set(0, 700, 1000)
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
	        precision:"highp"
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
	    loader.load('/static/threeModels/three.mtl',(mtl) => { 
	        mtl.preload();
	        // 加载贴图
	        objloader.setMaterials(mtl);
	        objloader.load(`/static/threeModels/three.obj`, (obj) => {
				obj.scale.set(1.4,1,1)
	            scene.add(obj);
				uni.hideLoading()
	        })
	    })	
	}
	
	const moveCamera = () => { 
		// 此处逻辑是  (700-300)/0.8 == (1000-500)/1
	    if(initCameraY <= 300){
	        initCameraY = 300
	    }else{
	        initCameraY -= 0.8
	    }    
	    if(initCameraZ <= 500){
	        initCameraZ = 500
	    }else{
	        initCameraZ -= 1
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
	                initControles()
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
	const listenPointerdown = (e) => {
	    if ( e.isPrimary === false ) return;
	    // showInfo.value = false
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
	//  渲染模型
	const animate = () => {
		TWEEN.update();
	    animationFrame = requestAnimationFrame( animate );
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
	};
	
	const init = () => {
		initCamera()
		initLights()
		
		initRenderer()
		initControles()
		animate()
		loadModel()
	}
	onMounted(() => {
		uni.showLoading({
			title: '3d模型加载中'
		});
		try {
			scene &&scene.clear()
			renderer &&renderer.dispose()
			renderer &&renderer.forceContextLoss()
			renderer.content = null
			cancelAnimationFrame(animationFrame) // 去除animationFrame
			const gl = renderer.domElement.getContext('webgl')
			gl && gl.getExtension('WEBGL_lose_context').loseContext()
		} catch (e) {
			console.log(e)
		}
	    // initCamera()
	    // initLights()
	    
	    // initRenderer()
	    // initControles()
	    // animate()
	    // loadModel()
		
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
		init: init
	}
}