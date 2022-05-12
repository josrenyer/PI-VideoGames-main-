import React from 'react';
import Cards from "../components/cards/Cards";
import Search from "../components/actions/Search";
import Order from "../components/actions/Order";
import FilterGenres from "../components/actions/FilterGenres";
import FilterCreate from "../components/actions/FilterCreate";
import {Link} from "react-router-dom";

export default function Home () {

	return <div>

		<h1>home</h1>
		<Link to="/Create"><h3>Create Videogame</h3></Link>
		<Search/>
		<Order/>
		<FilterGenres/>
		<FilterCreate/>
		<Cards/>
	</div>

}