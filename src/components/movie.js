import React from "react";
import {setSelectedMovie} from "../reducers/movieReducer";
import { connect } from "react-redux";
import "./movie.scss";

const Movie = props => {
	const {movie, setSelectedMovie} = props; 
	return (
		<div className="movie-style" onClick={() => setSelectedMovie(movie)}>
			<h4>{movie.title} ({movie.year})</h4>
			<p>{movie.genre} | {movie.country} | {movie.rating}/10 ({movie.votes}) </p>		
		</div>
	)

}

const mapDispatchToProps = dispatch => {
	return {
		setSelectedMovie: movie => dispatch(setSelectedMovie(movie))
	}
}

const connMovie = connect(null, mapDispatchToProps)(Movie)

export default connMovie;