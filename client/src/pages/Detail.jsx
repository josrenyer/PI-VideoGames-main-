import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getGameDetail } from "../store/action";
import { useParams, Link} from "react-router-dom";

export default function Detail () {

	const game=useSelector((state)=>state.gameDetail)
	const dispatch=useDispatch()
	let {id}=useParams();

	useEffect(()=>{
		dispatch(getGameDetail(id))
	},[dispatch,id])

	return <div>
		<div className="CardContenido">
			<div className="CardText">
				<h2>{game.name}</h2>
				<h3>description:</h3>{game.description.replace(/<[^>]*>?/g, "")}
				<h3>released: {game.released}</h3>
				<h3>rating: {game.rating}</h3>
			</div>
			<div className="CardContenidoImg">
				<img src={game.image} alt="img not found" width="250px" height="150px"/>
			</div>
		</div>
		<Link to="/"><h3>Home</h3></Link>
	</div>

}