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


export function getSpecial() {
	axios.get('https://json-data.herokuapp.com/restaurant/special/1').then(special=>{
		store.dispatch({
			type: 'GET_SPECIAL',
			special: special.data
		})
	})
}