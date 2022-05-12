import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getGames } from "../../store/action";
import Card from "./Card"

export default function Cards () {

	const games= useSelector((state)=>state.games)  // me traigo todo los juegos
	const dispatch = useDispatch()

	const[currentPage, setCurrentPage]=useState(1);
	const[gamePerPage, setGamePerPage]=useState(15);
	const indexOfLastGame = currentPage * gamePerPage;
	const indexOfFirstGame = indexOfLastGame - gamePerPage;
	const currentGame = games.slice(indexOfFirstGame,indexOfLastGame);

	  const handleprev=()=>{
        var pagina=Math.ceil(games.length / gamePerPage);
		if(currentPage===1){
            setCurrentPage(pagina)
        }else{
            pagina=currentPage-1;
            setCurrentPage(pagina)
        }
	};

    const handlenext=()=>{
        var pagina=Math.ceil(games.length / gamePerPage);
		if(currentPage===pagina){
            pagina=1;
            setCurrentPage(pagina)
        }else{

            pagina=currentPage+1;
            setCurrentPage(pagina)
        }
	};

	useEffect(()=>{
		dispatch(getGames())
	},[dispatch])

	return <div>
		<div>
			<ul>
				<li><button onClick={handleprev}>Prev</button></li>
				<li><button onClick={handlenext}>Next</button></li>
			</ul>
		</div>
		{currentGame.map((e)=>{
				return <Card key={e.id} id={e.id} name={e.name} image={e.image} genres={e.genres} rating={e.rating}/>
			})}
		<div>
			<ul>
			<li><button onClick={handleprev}>Prev</button></li>
				<li><button onClick={handlenext}>Next</button></li>
			</ul>
		</div>
	</div>
}