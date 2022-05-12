import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addGame, getGenres} from "../store/action";
import {Link} from "react-router-dom";

export default function Create () {

	const genres = useSelector((state)=>state.genres)
	const order = genres.sort(function (a, b) {
                      if (a.name > b.name) {
                        return 1;
                      }
                      if (a.name < b.name) {
                        return -1;
                      }
                      return 0;
                });
	const dispatch = useDispatch()

	const [inputBody , setInputBody] = useState({
		name:"",
		description:"",
		image:"",
		released:"",
		rating:"",
		platforms:"play 4",
		Idgenres:[]
	})

	function handelInput(e){
		e.preventDefault()
		setInputBody({
			...inputBody,
			[e.target.name]:e.target.value
		})

	}

	function handelSelect(e){
		e.preventDefault()
		setInputBody({
			...inputBody,
			[e.target.name]:e.target.value
		})
	}

	function handelSelec(e){
		e.preventDefault()
		setInputBody({
			...inputBody,
			Idgenres:[...inputBody.Idgenres, e.target.value]
		})
	}

	function handelSubmit(e){
		e.preventDefault()
		dispatch(addGame(inputBody))
		alert("actividad creada")
		setInputBody({
			name:"",
			description:"",
			image:"",
			released:"",
			rating:"",
			Idgenres:[]
		})
	}

	function handelDelete(e){
		setInputBody({
			...inputBody,
			Idgenres: inputBody.Idgenres.filter(r=> r!==e)
		})	
	}

	useEffect(()=>{
		dispatch(getGenres())
	},[dispatch])


	return <div>
		<h1>Create</h1>
		<Link to="/"><h3>Home</h3></Link>
		<form onSubmit={e=>handelSubmit(e)} className="formulario">
			<div>
			<label>name</label>
			<input type="text" 
			name="name" 
			value={inputBody.name} 
			onChange={e=>handelInput(e)}
			required/>
			</div>


			<div>
			<label>description</label>
			<input type="text" 
			name="description" 
			value={inputBody.description} 
			onChange={e=>handelInput(e)}
			required/>
			</div>

			<div>
			<label>released</label>
			<input type="date" 
			name="released" 
			value={inputBody.released} 
			onChange={e=>handelInput(e)}
			required/>
			</div>

			<div>
			<label>rating</label>
			<select name="rating" onChange={e=>handelSelect(e)}>
			<option>-</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			</select>
			</div>

			<div>
			<label>Genres</label>
			<select onChange={e=>handelSelec(e)}>
			<option>-</option>
			{order.map((e)=>(
				<option key={e.id} value={e.id}>{e.name}</option>))
			}
			</select>
			</div>
			<button type="submit">Add</button>
		</form>
	</div>

}