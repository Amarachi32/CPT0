const express = require('express')
const router = express.Router()
const user = require('../models/user.model');
const bcrypt = require('bcrypt');

//register route
const authroute = async(req,res)=>{
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt)
    // .then(hash=>{
        // console.log(hash)
    // })   
    const newuser = await user.create({
        username: req.body.username,
        password: hashpassword,
        email:req.body.email,
        passwordConfirm: hashpassword,
    })
    // res.send(newuser)
    res.status(200).json({
        status: 'success',
        data:{
            user: newuser,
        }
    })
    console.log('hello')
}
 

// login route

const authlogin = async (req, res)=>{
    const {email, password} = req.body
if (!email || !password){
    res.status(404).json('input password and email')
}
 const User = await user.findOne({email}).select('+password');
    if(User){
        const correct = await bcrypt.compare(password, user.password, (error, same)=>{
                           // const correct = User.correctPassword(password, user.password);

            if (same){
                res.redirect('/')
            }else{
                // res.redirect('/newuser/login')
                res.status(404).json('wrong credentials')
            }
        });
    }else{
        res.send('user not found')
    }
}

    



// const authlogin = async(req,res)=>{
//     //find user
//      user.findOne({username: req.body.username}, (error, user)=>{
//         if (error)  { 
//             req.status(404).json('wrong credentials')
        
//         }else{
//             bcrypt.compare(req.body.password, user.password, (error, same)=>{
//                 if (same){
//                     res.redirect('/')
//                     res.status(200).json('succesfully login')
//                 }else{
//                     res.redirect('/login')
//                     res.status(404).json('wrong password or email')
//                 }
        
//             })
//         }

//      })
   
//       // compare     q
// }



module.exports = authroute;
module.exports = authlogin;
