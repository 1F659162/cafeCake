const express = require('express');
const ProductRoute = express.Router();

let ProductModel = require('../models/Product');

// ดึงสินค้าทั้งหมดออกมา
ProductRoute.route('/').get((req,res,next)=>{
    ProductModel.find((error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data);
        }
    })
})

// เพิ่มข้อมูลสินค้า
ProductRoute.route('/create').post((req,res,next)=>{
    ProductModel.create(req.body,(error,data)=>{
        if(error) return next(error)
        else res.json(data)
    })
})

// แก้ไขข้อมูลสินค้า
ProductRoute.route('/edit-product/:id').get((req,res,next)=>{
    ProductModel.findById(req.params.id,(error,data)=>{
        if(err){
            return next(erroe)
        }else {
            res.json(data);
        }
    })
})
// update product data
ProductRoute.route('/update-product/:id').put((req,res,next)=>{
    ProductModel.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },(error,data)=>{
        if(error){
            return next(error);
        }else {
            res.json(data);
            console.log('Product successfully updated');
        }
    })
})

// Delete product data
ProductRoute.route('/delete-product/:id').delete((req,res,next)=>{
    ProductModel.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error){
            return next(error);
        }else {
            res.status(200).json({
                msg:data
            })
        }
    })
})
module.exports = ProductRoute