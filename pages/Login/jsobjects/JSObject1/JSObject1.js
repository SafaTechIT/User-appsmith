export default {
	findUser (usr, pss) {
		let dataSet = GetUsername.data;
		for(const iterator of dataSet){
			if (iterator.userid===usr){
				if(iterator.password===pss){
					if(iterator.roll===4||3) {
					storeValue("userId",usr)
					navigateTo('Submit', {}, 'SAME_WINDOW').then(() => {})
					} else if(iterator.roll===2){
						navigateTo('KomakMorabbi', {}, 'SAME_WINDOW').then(() => {})
					} else if (iterator.roll===1){
						navigateTo('Morabbi', {}, 'SAME_WINDOW').then(() => {})
					}
        }
					break;
			}
     }
	}
}