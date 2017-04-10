const initialState = {
	feed:[],
	specialData: []
	
	
}

export default function(state=initialState, action) {
	switch(action.type) {
		case 'GET_FEED':
			return {...state, feed:{...action.feed}}
		case 'GET_SPECIALS': 
			return {...state, specialData:{...action.specialData}}
		default:
			return state
	}
}


///GOES IN REDUCER!!!!!!