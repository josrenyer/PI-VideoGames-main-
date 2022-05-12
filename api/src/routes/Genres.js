const { Router } = require('express');
const {getGenres} = require('../Controllers/Genres')
const router= Router();


router.get('/', getGenres)


module.exports = router;

