import React, {useEffect} from "react";
import "./App.scss";
import { initMovies, initGenres, initCountries } from "./reducers/movieReducer";
import { setDefault } from "./reducers/filterReducer";
import {setDefaultOrder} from "./reducers/orderReducer";
import Filters from "./components/filters";
import {useDispatch } from "react-redux";
import Movies from "./components/movies";
import OrderButtons from "./components/orderButtons";
import SelectedMovie from "./components/selectedMovie";
import SideMenu from "./components/sideMenu";
import Header from "./components/header";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initMovies());
		dispatch(initGenres());
		dispatch(initCountries());
	}, [])

	const handleDefault = () => {
		dispatch(setDefault());
		dispatch(setDefaultOrder());

	}
	return (
		<div className="container">
			<div className="header">
				<Header />
			</div>
			<SideMenu />
			<div className="filter-side-bar">
				<div className="filter-content">
					<Filters />
				</div>
			</div>
			<div className="main-content">
				<div className='btn-ord-wrap'>
					<OrderButtons />
					<button id="ord-btn" onClick={() => handleDefault()}>Default</button>
				</div>	
				<Movies />
			</div>
			<div className="right-bar">
				<SelectedMovie />
			</div>	
						
		</div>
	)
}

export default App;