import React from "react";
import {connect} from "react-redux";



const SelectedMovie = props => {
	const {selectedMovie} = props;

	if (!selectedMovie) {
		return <div className="selected-movie"><h4>Click on movie to select</h4></div>
	}

	const {title, year, director, country, rating, genre, votes} = selectedMovie;

	return (
		<div className="selected-movie">
			<h3>{title} ({year})</h3>
			Director: {director} <br />
			Country: {country} <br />
			Genre: {genre} <br />
			Rating: {rating}/10 <br />
			Votes: {votes}
		</div>
	)
}


const mapStateToProps = state => {
	return {
		selectedMovie: state.movies.selectedMovie
	}
}

const connSelectedMovie = connect(mapStateToProps)(SelectedMovie) 


export default connSelectedMovie;