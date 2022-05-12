import axios from "axios";


export function getGames(){
	return async (dispatch)=>{
		var json= await axios.get('http://localhost:3001/videogames');
		return dispatch({
			type: 'GET_GAMES',
			payload: json.data
		})
	}
}

export function getGameDetail(id){
	return async (dispatch)=>{
		var json = await axios.get('http://localhost:3001/videogames/'+id);
		return dispatch({
			type:'GET_DETAIL',
			payload:json.data
		})
	} 
}

export function searchGame(value){
	return async (dispatch)=>{
		var json = await axios.get('http://localhost:3001/videogames?name='+value);
		return dispatch({
			type: 'SEARCH_GAME',
			payload: json.data
		})
	}
}

export function getGenres(){
	return async (dispatch)=>{
		var json= await axios.get('http://localhost:3001/genres');
		return dispatch({
			type: 'GET_GENRES',
			payload: json.data
		})
	}
}

export function filterOrder(value){
	return{
		type:'FILTER_ORDER',
		payload:value
	}
}

export function filterCreate(value){
	return{
		type:'FILTER_CREATE',
		payload:value
	}
}

export function filterGenres(value){
	return{
		type:'FILTER_GENRES',
		payload:value
	}
}

export function addGame(body){
	return async (dispatch)=>{
	await axios.post('http://localhost:3001/videogames', body);
	}
}