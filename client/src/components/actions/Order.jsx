import React from "react";
import {filterOrder} from "../../store/action";
import {useDispatch} from "react-redux";


export default function Order(){
	const dispatch=useDispatch()


	function handel(e){
		e.preventDefault()
		dispatch(filterOrder(e.target.value))
	}
	return <select onChange={e=>handel(e)} className="ordenamiento">
		<option value="all">Order By</option>
		<option value="asc">Ascendant</option>
		<option value="desc">Descending</option>
		<option value="min">Minimum rating</option>
		<option value="max">Maximum rating</option>
	</select>
}