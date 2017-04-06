const initialState = {
	menu:["Empty initialState Array"]
}

export default function(state=initialState, action) {
	switch (action.type) {
		case 'GET_M':
		//console.log(action.menu.cakes , "action")
			return {...state, menu: [...action.menu.cakes] }
		default:
			return state
	}
}