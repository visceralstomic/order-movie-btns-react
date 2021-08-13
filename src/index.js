import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore, combineReducers} from "redux";
import { Provider } from "react-redux";
import movieReducer from "./reducers/movieReducer";
import filterReducer from "./reducers/filterReducer";
import orderReducer from './reducers/orderReducer';
import menuReducer from './reducers/menuReducer';


const reducer = combineReducers({
	movies: movieReducer,
	filter: filterReducer,
	ordering: orderReducer,
	menu: menuReducer
});

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);






