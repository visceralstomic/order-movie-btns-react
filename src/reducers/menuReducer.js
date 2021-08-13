

const initState = false

const menuReducer = (state=initState, action) => {
	switch(action.type){
		case 'TOGGLE_MENU':
			return action.data;
		default:
			return state
	}
}

export const toggleMenu = open => {
	return {
		type: 'TOGGLE_MENU',
		data: open
	}
}

export default menuReducer; 