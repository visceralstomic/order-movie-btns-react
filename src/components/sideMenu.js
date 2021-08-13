import React, {useRef} from "react";
import Filters from "./filters";
import {useSelector, useDispatch } from "react-redux";
import {toggleMenu} from "../reducers/menuReducer";
import "./sideMenu.scss";
import {useOutsideClick} from "../hooks";

const SideMenu = () => {
	const dispatch = useDispatch();
	const node = useRef(null)
	const show_menu = useSelector(({menu}) => menu)
	const style = {
		transform: show_menu ? "translateX(0)" : "translateX(-100%)",
	}

	useOutsideClick(node, () => dispatch(toggleMenu(false)));
	return (
		<div ref={node} style={style} className="side-menu">
			<Filters/>
		</div>
	)
}

export default SideMenu; 