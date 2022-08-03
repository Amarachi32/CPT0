const express = require("express")
const  dotenv = require('dotenv')
const mongoose = require ('mongoose')
const app = express()
dotenv.config()
const user = require('./route/user')
const newUser = require('./route/auth')


// connect mongose
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
} ).then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.log('error in connection')
})
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/user', user)
app.use('/newuser', newUser)


//route

/*app.get('/', (req,res)=>{
    res.send('hello express')
    console.log('hello')
})*/

// on server
const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log('app listening on port 8000')
})

