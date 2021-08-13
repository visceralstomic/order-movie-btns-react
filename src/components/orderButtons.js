import React from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { connect } from "react-redux";
import {setOrder } from "../reducers/orderReducer";


const OrderButton = ({name, value, className, handleClick, order_type, order}) => {
	return (
		<button id="ord-btn" className={className} value={value} onClick={handleClick}>
			{name} {order_type === name ? (order === 'asc' ? <FaSortUp /> : <FaSortDown />) : <FaSort />}
		</button>
	)
}

const OrderButtons = props => {

	return (
		<>
			<OrderButton name="year" value="year" className="style-btn" 
				handleClick={() => props.setOrder('year')} 
				order_type={props.ordering.order_type} order={props.ordering.order}/>
			<OrderButton name="title" value="title" className="style-btn" 
				handleClick={() => props.setOrder('title')} 
				order_type={props.ordering.order_type} order={props.ordering.order}/>
			<OrderButton name="rating" value="rating" className="style-btn" 
				handleClick={() => props.setOrder('rating')} 
				order_type={props.ordering.order_type} order={props.ordering.order}/>
			<OrderButton name="votes" value="votes" className="style-btn" 
				handleClick={() => props.setOrder('votes')} 
				order_type={props.ordering.order_type} order={props.ordering.order}/>
		</>
	)
}

const mapStateToProps = ({ordering}) => ({ordering})
const mapDispatchToProps = {
	setOrder
}

const ConnOrderButtons = connect(mapStateToProps, mapDispatchToProps)(OrderButtons)
export default ConnOrderButtons;