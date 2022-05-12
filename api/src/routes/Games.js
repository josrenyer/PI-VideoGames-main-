const { Router } = require('express');
const { allGames, GamesById, postGames } = require('../Controllers/Games')
const router= Router();

router.get('/', allGames)  
router.get('/:id', GamesById) 
router.post('/', postGames) 

module.exports = router;
