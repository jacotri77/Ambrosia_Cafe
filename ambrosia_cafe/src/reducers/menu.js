const initialState = {
	menu:{}
}

export default function(state=initialState, action) {
	switch (action.type) {
		case 'GET_M': 
			return {...state, menu: {...action.menu} }
		default:
			return state
	}
}