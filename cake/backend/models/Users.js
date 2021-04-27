const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsersSchema = new Schema({
    user_id:{
        type:String
    },
    user_fname:{
        type:String
    },
    user_lname:{
        type:String
    },
    user_user:{
        type:String
    },
    user_pass:{
        type:String
    },
    user_email:{
        type:String
    },
    user_tel:{
        type:String
    }
},{
    collection:'Users'
})
module.exports = mongoose.model('Users',UsersSchema)