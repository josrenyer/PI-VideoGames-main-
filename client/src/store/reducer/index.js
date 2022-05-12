const initialState={
	games:[],
	allGames:[],
	gameDetail:[],
	genres:[],
}

export default function reducer(state=initialState, action){
	switch(action.type){
		case 'GET_GAMES':
			return{
				...state,
				games:action.payload,
				allGames:action.payload
			}
		case 'GET_DETAIL':
			return{
				...state,
				gameDetail:action.payload,
			}
		case 'SEARCH_GAME':
			return{
				...state,
				games:action.payload
			}
		case 'GET_GENRES':
			return{
				...state,
				genres:action.payload
			}
		case 'FILTER_GENRES':
			const games=[...state.allGames];/// me traigo todo los juegos
			function filter (array, valor){
				var nuevo=[];
				for(var i=0; i<array.length; i++){
					for(var j=0; j<array[i].genres.length; j++){
						if(array[i].genres[j].name === valor){
						nuevo.push(array[i])
						}
					}
				}
				return nuevo;
			}
			const gameGenres=filter(games, action.payload);
			return{
				...state,
				games:gameGenres
			}
		case 'FILTER_CREATE':
			const nuevo=[...state.allGames];
			console.log("juegos del filtro",nuevo)
			if(action.payload==="db"){
				let filter=nuevo.filter(e=>e.id.length>=32)
				console.log("db", filter)
			}else{
				let filter=nuevo.filter(e=>e.id.length<32)
				console.log("api", filter)
			}
			return{
				...state,
				games:filter
			}
		case 'FILTER_ORDER':
			let OrderGames= [...state.games];

			if(action.payload === "asc"){
				OrderGames=OrderGames.sort(function (a, b) {
  					if (a.name > b.name) {
    					return 1;
  					}
  					if (a.name < b.name) {
    					return -1;
  					}
  					return 0;
				});
			}
			if(action.payload === "desc"){
				OrderGames=OrderGames.sort(function (a, b) {
  					if (a.name > b.name) {
    					return -1;
  					}
  					if (a.name < b.name) {
    					return 1;
  					}
  					return 0;
				});
			}
			if(action.payload === "min"){
				OrderGames=OrderGames.sort(function (a, b) {
  					if (a.rating > b.rating) {
    					return 1;
  					}
  					if (a.rating < b.rating) {
    					return -1;
  					}
  					return 0;
				});
			}
			if(action.payload === "max"){
				OrderGames=OrderGames.sort(function (a, b) {
  					if (a.rating > b.rating) {
    					return -1;
  					}
  					if (a.rating < b.rating) {
    					return 1;
  					}
  					return 0;
				});
			}
			return{
				...state,
				games:OrderGames
			}
		default:
			return state;
	}
}

/*var array=[
{genres: [
{id: 4, name: 'Action', slug: 'action', games_count: 146770, image_background: 'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg'},
{id: 3, name: 'Adventure', slug: 'adventure', games_count: 110454, image_background: 'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg'}
],
id: 3498,
image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
name: "Grand Theft Auto V",
rating: 4.48,
},
{genres:[
{id: 4, name: 'Action', slug: 'action', games_count: 146770, image_background: 'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg'},
{id: 3, name: 'Adventure', slug: 'adventure', games_count: 110454, image_background: 'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg'},
{id: 5, name: 'RPG', slug: 'role-playing-games-rpg', games_count: 44996, image_background: 'https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg'}
],
id: 3328,
image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
name: "The Witcher 3: Wild Hunt",
rating: 4.67,
}
]*/

