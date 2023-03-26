// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function () { // 通用预处理器

	},
	/**
	 * method1方法描述
	 * 返回所有告警数据
	 * 
	 */
	
	async getWarnings() {
		const db = uniCloud.database()
		let waterWarning = {
			name: '水质报警',
			handled: 0,
			unHandle: 0
		},
		deviceWarning = {
			name: '设备报警',
			handled: 0,
			unHandle: 0
		}
		try{
			let datas = await db.collection('warnings').get()
			let res = datas.data
			
			let waterRes = res.filter(item => item.warning_type == 1) 
			let deviceRes = res.filter(item => item.warning_type == 2) 
			waterWarning.handled = waterRes.reduce((val,item) => val += item.handled,0)
			waterWarning.unHandle = waterRes.reduce((val,item) => val += item.no_handle,0)
			
			deviceWarning.handled = deviceRes.reduce((val,item) => val += item.handled,0)
			deviceWarning.unHandle = deviceRes.reduce((val,item) => val += item.no_handle,0)
		}catch(e){
			//TODO handle the exception
			console.error(e)
		}
		return{
			errCode: 0,
			data: {
				waterWarning,
				deviceWarning
			}
		}
	}
	
}
