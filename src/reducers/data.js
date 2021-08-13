const movies = [
	{
		id: 1,
		title: 'Citizen Kane',
		director: 'Orson Welles',
		year: 1941,
		country: 'USA',
		genre: 'Drama',
		rating: 8.3,
		votes: 416,
	},
	{
		id: 2,
		title: 'Casablanca',
		director: 'Michael Curtiz',
		year: 1942,
		country: 'USA',
		genre: 'Drama',
		rating: 8.5,
		votes: 534,
	},
	{
		id: 3,
		title: 'Incredibles',
		director: 'Brad Bird',
		year: 2004,
		country: 'USA',
		genre: 'Animation',
		rating: 8.0,
		votes: 673,
	},
	{
		id: 4,
		title: 'Tenshi no tamago',
		director: 'Mamoru Oshii',
		year: 1985,
		country: 'Japan',
		genre: 'Animation',
		rating: 7.7,
		votes: 79,
	},
	{
		id: 5,
		title: 'Tampopo',
		director: 'Orson Welles',
		year: 1985,
		country: 'Japan',
		genre: 'Comedy',
		rating: 8.0,
		votes: 16,
	},
	{
		id: 6,
		title: 'Tropic Thunder',
		director: 'Bem Stiller',
		year: 2008,
		country: 'USA',
		genre: 'Comedy',
		rating: 7.0,
		votes: 390,
	},
	{
		id: 7,
		title: 'Oldeuboi',
		director: 'Park Chan-Wook',
		year: 2003,
		country: 'South Korea',
		genre: 'Mystery',
		rating: 8.4,
		votes: 532,
	}

]


export const genres = movies.map(movie => movie.genre).filter((value, idx, self) => self.indexOf(value) === idx);
export const countries = [...new Set(movies.map(movie => movie.country))];

export default movies;