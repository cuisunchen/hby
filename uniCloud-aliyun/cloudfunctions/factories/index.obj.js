module.exports = {
	async getFacList(title){
		const db = uniCloud.database() 
		let arr = null
		try{
			let res = await db.collection('factories').get()
			arr = res.data
		}catch(e){
			//TODO handle the exception
			console.error(e)
		}
		return{
			errCode: 0,
			data: arr
		}
	},
	async getTopSevenFac(){
		const db = uniCloud.database() 
		let arr = null
		try{
			let res = await db.collection('big_areas').aggregate().sort({fac_num: -1}).end()
			arr = res.data.slice(0,7)
		}catch(e){
			console.error(e)
			console.log('获取数据失败')
		}
		return{
			errCode: 0,
			data: arr
		}
	}
}