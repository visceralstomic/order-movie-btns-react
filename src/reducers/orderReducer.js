
const initState = {
	order_type: "",
	order: "asc"
}


const orderReducer = (state=initState, action) => {
	switch(action.type) {
		case "SET_ORDER":
			const data = action.data;
			const newOrder = data.order_type == state.order_type ? (state.order === 'asc' ? 'desc' : 'asc') : 'asc'
			return {order_type: data.order_type, order: newOrder } ;
		case "SET_DEFAULT_ORDER":
			return {order_type: '', order: 'asc'}
		default: 
			return state
	}
}

export const setOrder = (order_type) => {
	return {
		type: "SET_ORDER",
		data: {
			order_type,
		}
	}
}


export const setDefaultOrder = () => {
	return {
		type: 'SET_DEFAULT_ORDER'
	}
}

export default orderReducer;