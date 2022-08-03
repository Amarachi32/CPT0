const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    passwordConfirm:{
        type:String,
        // required:false,
    }
    
})
userSchema.pre('save', async function(next){
    try {
        const user = this
        await bcrypt.hash(user.password, 10, (error,hash)=>{
            user.password = hash
            next()
        })
        console.log('called before saving a user')
    } catch (error) {
        next(error)
    }
})
const user =  mongoose.model('user', userSchema);
module.exports = user