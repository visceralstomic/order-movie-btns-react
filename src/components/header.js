import React from "react";
import Hamburger from "./hamburger/hamburger";
import "./header.scss";

const Header = () => {
	return (
		<div className="header-wrap">
			<div className='title'>Movies </div> <Hamburger />
		</div>
	)
}

export default Header; 