import React from "react";
import {filterCreate} from "../../store/action";
import {useDispatch} from "react-redux";


export default function FilterCreate(){
	const dispatch=useDispatch()


	function handel(e){
		e.preventDefault()
		dispatch(filterCreate(e.target.value))
	}
	return <select onChange={e=>handel(e)} className="ordenamiento">
		<option>Filter Creates</option>
		<option value="db">Creates</option>
		<option value="api">API</option>
	</select>
}