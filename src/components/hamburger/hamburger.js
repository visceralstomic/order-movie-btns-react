import React from "react";
import "./hamburger.scss";
import {toggleMenu} from "../../reducers/menuReducer";
import {useSelector, useDispatch} from "react-redux";

const Hamburger = () => {
	const dispatch = useDispatch();
	const show_menu = useSelector(({menu}) => menu)

	return (
		<div id="hamburger" onClick={() => dispatch(toggleMenu(!show_menu))} className={`style-hamburger ${show_menu  && "change"}`}>
			<div id="hamburger"/>
			<div id="hamburger"/>
			<div id="hamburger"/>			
		</div>	
	)
}

export default Hamburger;