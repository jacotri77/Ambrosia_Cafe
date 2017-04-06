const initialState = {
	menu:[]
}

export default function(state=initialState, action) {
	switch (action.type) {
		case 'GET_MENU':
		console.log("This Log is from the switch case GET_MENU")
		console.log(action.menu.cakes)
			return{...state, menu:[...action.menu.cakes]}
		default:
			return state
	}
}