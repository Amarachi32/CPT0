const express = require('express')
const router = express.Router()
const userroute = (req,res)=>{
    res.send('get user details to me')
}
module.exports = userroute;
