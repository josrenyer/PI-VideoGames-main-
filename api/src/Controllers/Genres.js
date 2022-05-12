const { Router } = require('express');
const axios = require('axios');
const {Genres} = require("../db");


const getGenres = async (req, res, next) => {
    try{
         let allGenres = await Genres.findAll()
            res.send(allGenres)
    }
    catch(err){
        next(err)
    }
};

module.exports = {
	getGenres
};

