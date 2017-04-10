const initialState = {
	feed:[],
	special:[],
	
}

export default function(state=initialState, action) {
	switch(action.type) {
		case 'GET_FEED':
			return {...state, feed: action.feed}
		case 'GET_SPECIAL': 
			return {...state, special: action.special}
		default:
			return state
	}
}


///GOES IN REDUCER!!!!!!