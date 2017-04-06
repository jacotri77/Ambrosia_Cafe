import axios from 'axios'
import store from '../store'

export function getMenu() {
	axios.get('http://localhost:3001/db').then(res=>{
		store.dispatch({
			type: 'GET_MENU',
			menu: res.data
		})
	})
}
