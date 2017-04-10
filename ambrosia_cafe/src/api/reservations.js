import axios from 'axios'
import store from '../store'

export function getReservations() {
	axios.get('http://localhost:3001/db').then(reservations=>{
		store.dispatch({
			type: 'GET_M',
			reservations: reservations.data
		})
	})
}