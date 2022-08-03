const express = require('express')
const router = express.Router();
const userroute = require('../controller/user.control')

// crud

router.get('/', userroute)

router.post('/', (req,res)=>{
    res.send('post user details')
})
router.put('/', (req,res)=>{
    res.send('update user details')
})
router.delete('/', (req,res)=>{
    res.send('delete user details')
})

module.exports = router;