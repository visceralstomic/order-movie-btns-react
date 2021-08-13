import React from "react";
import {useDispatch} from "react-redux";
import "./filterComp.scss";


const FilterComp = ({data, title, setFilter, filter}) => {
	const dispatch = useDispatch();

	return (
		<div className="filter-wrap">
			<div className="filter-title">{title}</div>
			<div className='filter-btns'>
				{data.map(
					value => {
						return <button key={value} className={filter === value ? 'active-btn' : ''}
									onClick={() => dispatch(setFilter(value))} value={value}>
									{value}
								</button>
					}
				)}
			</div>
		</div>
	)
}

export default FilterComp;