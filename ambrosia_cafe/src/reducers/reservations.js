const initialState = {
	reservations:{}
}

export default function(state=initialState, action) {
	switch (action.type) {
		case 'GET_RES': 
			return {...state, reservations: {...action.reservations} }
		default:
			return state
	}
}