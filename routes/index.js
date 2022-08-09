var express = require('express');
var router = express.Router();

let { index , detalleMenu } = require('../controllers/indexController');

/* GET home page. */
router.get('/', index)
router.get("/detalleMenu/:id", detalleMenu)

module.exports = router;
