import React from "react";
import {Link} from "react-router-dom";

export default function Card ({image, name, genres, id, rating}){
	return  <div className="card">
			<Link to={`/Detail/${id}`}>
				<img src={image} alt="img not found" width="250px" height="150px" />
				<h3>Game: {name}</h3>
				<h3>Genres: {genres.map((e) => <span key={e.id}> {e.name}. </span>)}</h3>
				<h3>rating: {rating}</h3>
			</Link>
	</div>
}