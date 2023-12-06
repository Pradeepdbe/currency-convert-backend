var express = require('express');
var router = express.Router();
var userController= require('../controllers/userController');

router.get('/getUserList',userController.fetchData);
module.exports = router;