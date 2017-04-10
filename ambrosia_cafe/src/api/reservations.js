import axios from 'axios'
import store from '../store'

export function getReservation() {
	axios.get('http://localhost:3001/db').then(reservation=>{
		store.dispatch({
			type: 'GET_M',
			reservation: reservation.data
		})
	})
}