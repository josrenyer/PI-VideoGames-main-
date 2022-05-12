const axios = require ("axios");
const { Genres } = require('../db');
const {API_KEY,BASE_URL_Genres}=process.env;


const loader=async()=>{
	const getapi= await axios.get(`${BASE_URL_Genres}?key=${API_KEY}`);
	const allGenres=getapi.data.results;
	try{
		allGenres.map(async(e)=>{
			await Genres.findOrCreate({
				where:{
					id:e.id,
					name:e.name
				}
			})
		});
	}
	catch(err){
		console.log("En la DB hay el siguiente error",err)
	}
}

module.exports = {loader};