import React, {useEffect} from "react";
import {getGenres, filterGenres} from "../../store/action";
import {useDispatch, useSelector} from "react-redux";


export default function FilterGenres(){

	const dispatch=useDispatch()
	let allGenres=useSelector((state)=>state.genres)

	useEffect(()=>{
		dispatch(getGenres())
	},[dispatch])


    function handel(e){
		e.preventDefault()
		dispatch(filterGenres(e.target.value))
	}
	return (
		<select onChange={e=>handel(e)} className="filtroactividad">
		<option value="all">Filter Genres</option>
		{
			allGenres.map((e)=>(
				<option key={e.id} value={e.name}>{e.name}</option>))
			}
		</select>
	)
}