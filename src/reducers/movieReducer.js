import movies, {countries, genres} from "./data";

const initState = {
	movieList: [],
	countries: [],
	genres: [],
	selectedMovie: null
}

const movieReducer = (state=initState, action ) => {
	switch(action.type) {
		case "INIT_MOVIES":
			return {...state, movieList: action.data};
		case "INIT_GENRES":
			return {...state, genres: action.data};
		case "INIT_COUNTRIES":
			return {...state, countries: action.data};
		case "SET_SELECTED_MOVIE":
			return {...state, selectedMovie: action.data};
		default: 
			return state
	}
}

export const initMovies = () => {
	return {
		type: "INIT_MOVIES",
		data: movies
	}
}

export const initGenres = () => {
	return {
		type: "INIT_GENRES",
		data: genres
	}
}


export const initCountries = () => {
	return {
		type: "INIT_COUNTRIES",
		data: countries
	}
}

export const setSelectedMovie = movie => {
	return {
		type: "SET_SELECTED_MOVIE",
		data: movie
	}
}

export default movieReducer;