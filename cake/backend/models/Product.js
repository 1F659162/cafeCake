const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    p_id:{
        type:String
    },
    p_name:{
        type:String
    },
    p_price:{
        type:Number
    },
    stock:{
        type:Number
    },
    category:{
        type:String
    },
    p_detail:{
        type:String
    }
},{
    collection:'product'
})
module.exports = mongoose.model('Product',ProductSchema)