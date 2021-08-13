
const initState = {
	genre: '',
	country: ''
}

const filterReducer = (state=initState, action) => {
	switch (action.type) {
		case 'SET_GENRE_FILTER':
			return {...state, genre: action.filter};
		case 'SET_COUNTRY_FILTER':
			return {...state, country: action.filter};
		case 'SET_DEFAULT_FILTER':
			return {country: '', genre: ''}
		default:
			return state;
	}
}

export const setCountryFilter = filter => {
	return {
		type: 'SET_COUNTRY_FILTER',
		filter
	}
}

export const setGenreFilter = filter => {
	return {
		type: 'SET_GENRE_FILTER',
		filter
	}
}

export const setDefault = () =>{
	return {
		type: 'SET_DEFAULT_FILTER'
	} 
}

export default filterReducer;