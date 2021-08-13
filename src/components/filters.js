import React from "react";
import FilterComp from "./filterComp";
import {useSelector} from "react-redux";
import { setCountryFilter, setGenreFilter } from "../reducers/filterReducer";

const Filters = () => {
	const {countries, genres, filter} = useSelector(
		({movies, filter}) => ({countries: movies.countries, genres: movies.genres, filter})
	)
	return (
		<>
			<FilterComp setFilter={setCountryFilter} filter={filter.country}
				data={countries} title='Countries' />
			<FilterComp setFilter={setGenreFilter} filter={filter.genre} 
				data={genres} title='Genres' />
		</>
	)
}

export default Filters;