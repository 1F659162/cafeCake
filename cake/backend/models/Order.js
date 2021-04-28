const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
    order_id:{
        type:String
    },
    user_id:{
        type:String
    },
    quantity:{
        type:String
    },
    
},{
    collection:'Order'
})
module.exports = mongoose.model('Order',OrderSchema)