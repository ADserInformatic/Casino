const router = require('express').Router();
const {getGames} = require('../controlers/games')

router.get('/', getGames)

module.exports = router