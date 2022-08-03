const express = require('express');
const router = express.Router();
const authroute = require('../controller/auth.control');
const authlogin = require('../controller/auth.control');



// crud
// register
router.post('/register', authroute);

// login
router.post('/login', authlogin)
module.exports = router;
