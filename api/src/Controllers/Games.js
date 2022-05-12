const { Router } = require('express');
const axios = require('axios');
const {Videogame, Genres} = require("../db")
const {Op} = require("sequelize");
const {API_KEY,BASE_URL}=process.env;


const getApi= async ()=>{
	let url= await axios.get(`${BASE_URL}?key=${API_KEY}`);
	let apInfo=url.data.results;
	for(let i=0; i<4; i++){
		let next=url.data.next;
		url=await axios.get(next);
		apInfo=[...apInfo,...url.data.results]
	}
		try{
			let result=apInfo.map(e=>{
				return{
					id:e.id,
					name:e.name,
					image:e.background_image,
					genres:e.genres,
					rating:e.rating

				}
			})

			return result;
		}
		catch(err){
			next(err)
		}
}

const getDB= async ()=>{
	const dbinfo= await Videogame.findAll({include:Genres});
	return dbinfo;
}


const allGames = async (req, res, next) => {
	try{
		let {name}=req.query;
		let api=await getApi();
		let db= await getDB();
		let getTotal=[...api,...db];

		if(name){
			let nameGames= await getTotal.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()))

			nameGames.length ?
			res.status(200).send(nameGames) : 
			res.status(404).send({Data:"El nombre del Juego no existe"});
		}else{

			res.status(200).send(getTotal)
		}
	}
	catch(err){
        next(err)
    }
}

const GamesById = async (req, res, next) => {
	try{
		let {id}=req.params;

		if(id.length>=32){
			let db= await getDB();
			let obj;
			let idSearch= await db.filter(e=>e.id===id);

			idSearch.length ?
			res.status(200).send(obj=idSearch[0]) : 
			res.status(404).send({Data:"El id del Juego no existe"})
		}else{
			const url=await axios.get(`${BASE_URL}/${id}?key=${API_KEY}`);
			const apiInfoId=await url.data;
			let result={
					id:apiInfoId.id,
					name:apiInfoId.name,
					image:apiInfoId.background_image,
					description:apiInfoId.description,
					released:apiInfoId.released,
					rating:apiInfoId.rating,
					platforms:apiInfoId.platforms.map(r=>r.platform.name),
					genres:apiInfoId.genres.map(r=>{
						return{
							id:r.id,
							name:r.name
						}
					})
				}

			res.status(200).send(result)
		}
	}
	catch(err){
		next(err)
	}
}

const postGames=async(req,res,next)=>{
	try{
		let {name,image,description,released,rating,platforms,Idgenres,createdInDb}=req.body;

		if(name && description && platforms && Idgenres){

			let searchId=await Genres.findAll({
				where:{
					id:Idgenres
				}
			})
			if(!searchId[0]){
				return res.status(409).send({Data:"Por favor ingrese un ID de Generos valido"});
			}else{
				let newGamer=await Videogame.create({
					name,
					description,
					released,
					image,
					rating,
					platforms,
					createdInDb
					});
				newGamer.addGenres(searchId)
				res.send(newGamer)

			}
		}else{
			res.status(410).send({Data:"Por Favor rellene todos los campos para crear el Juego"})
		}
	}catch(err){
		next(err)
	}
}


module.exports = {
    allGames,
    GamesById,
    postGames
};