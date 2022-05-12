import {React, useState} from "react";
import {searchGame} from "../../store/action"
import {useDispatch} from "react-redux";

export default function Search () {

	const [search, setSearch]=useState("");
	const dispatch = useDispatch()

	function handelSearch(){
		dispatch(searchGame(search))
	}

	function handelReset(){
		dispatch(searchGame(""))

	}
	
	function handelInput(e){
		e.preventDefault();
		setSearch(e.target.value)
	}

	return <div className="buscador">
			<input type="text" onChange={e=>handelInput(e)} placeholder="Enter Games"/>
			<button onClick={()=>handelSearch()}>Search</button>
			<button onClick={()=>handelReset()}>Reset</button>
	</div>
}  