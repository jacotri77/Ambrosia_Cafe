const initialState = {
	reservation:{}
}

export default function(state=initialState, action) {
	switch (action.type) {
		case 'GET_RES': 
			return {...state, reservation: {...action.reservation} }
		default:
			return state
	}
}