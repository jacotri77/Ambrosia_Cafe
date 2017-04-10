import axios from 'axios'
import store from '../store'

export function getFeed() {
	axios.get('http://localhost:3001/db').then(res=>{
		console.log(res,'res')
		store.dispatch({
			type:'GET_FEED',
			feed: res.data
		})
	})
}


export function getSpecials() {
	axios.get('http://localhost:3001/db').then(res=>{
		store.dispatch({
			type: 'GET_SPECIALS',
			specialData: res.data
		})
	})
}
