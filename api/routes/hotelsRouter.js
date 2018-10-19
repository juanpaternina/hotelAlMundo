var express = require('express');
var router = express.Router();

var hotelController = require('../controllers/hotelController');

/* GET hotels listing. */
router.get('/', hotelController.getAll);
// router.get('/search', hotelController.getLike);

module.exports = router;
