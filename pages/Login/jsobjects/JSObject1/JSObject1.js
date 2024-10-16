export default {
	findUser (usr, pss) {
		let dataSet = GetUsername.data;
		for(const iterator of dataSet){
			if (iterator.userid===usr){
				if(iterator.password===pss){
					storeValue("userId",usr)
					navigateTo('Submit', {}, 'SAME_WINDOW').then(() => {})
					break;
        }
			}
     }
	}
}