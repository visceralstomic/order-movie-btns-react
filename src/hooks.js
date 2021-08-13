import React, {useEffect} from "react";

export const useOutsideClick = (ref, closeMenu) => {
	useEffect(() => {
		const listener = event => {
			if (ref.current && event.target && ref.current.contains(event.target ) 
				|| event.target.id === "hamburger" || event.target.id === "ord-btn")  {
				return ;
			} 
			closeMenu();
		}
		document.addEventListener("mousedown", listener)
		return () => {
				document.removeEventListener("mousedown", listener);
		};
	}, [ref, closeMenu])
}