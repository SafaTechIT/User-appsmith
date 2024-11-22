export default {
	findUser (usr, pss) {
		let dataSet = GetUsername.data;
		for(const iterator of dataSet){
			if (iterator.userid===usr){
				if(iterator.password===pss){
					var key = iterator.roll
					storeValue("userId",usr)
					switch(key){
           	case 4:
						case 3:
							navigateTo('Menu Student', {}, 'SAME_WINDOW').then(() => {})
           		break;
						case 1:
							navigateTo('Morabbi', {}, 'SAME_WINDOW').then(() => {})
							break;
						case 2:
							navigateTo('KomakMorabbi', {}, 'SAME_WINDOW').then(() => {})
							break;
           	default:
           		break;
           }
        }
					break;
			}
     }
	}
}