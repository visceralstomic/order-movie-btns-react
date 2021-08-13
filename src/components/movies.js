import React from "react";
import {connect} from "react-redux";
import Movie from "./movie";

const Movies = ({movies}) => {

	return (
		<div>
			{movies.length > 0 
				? movies.map(movie => {
					return <Movie key={movie.id} movie={movie} />
					})
				: <div className="empty">No movie matching such criteria</div>
			}
		</div>	
	)
}


const mapStateToProps = state => {
	const {order_type, order} = state.ordering;
	let moviesList = state.movies.movieList.filter(
			movie => movie.genre.includes(state.filter.genre) && movie.country.includes(state.filter.country)
		)

	switch(order_type) {
		case 'year':
			moviesList = moviesList.sort((a, b) => order === 'asc' ? a.year - b.year : b.year - a.year );
			break;
		case 'title':
			moviesList = moviesList.sort(
				(a, b) => order === 'asc' ? (a.title > b.title ? 1 : -1) : (a.title < b.title ? 1 : -1)  
				);
			break;
		case 'rating':
			moviesList = moviesList.sort((a, b) => order === 'asc' ? a.rating - b.rating : b.rating - a.rating );
			break;
		case 'votes':
			moviesList = moviesList.sort((a, b) => order === 'asc' ? a.votes - b.votes : b.votes - a.votes );
			break;
		}

	return {
		movies: moviesList
	}
}

const ConnectedMovies = connect(mapStateToProps)(Movies)

export default ConnectedMovies;