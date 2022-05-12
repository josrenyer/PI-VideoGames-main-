const { Router } = require('express');
const videogamesRoute= require('./Games')
const genresRoute= require('./Genres')

const router = Router();


router.use('/videogames', videogamesRoute);
router.use('/genres', genresRoute);


module.exports = router;