const express = require('express');
const ProductRoute = express.Router();

let ProductModel = require('../models/Product');
let UsersModel = require('../models/Users');
let OrderModel = require('../models/Order');

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

// ----------------- products ----------------
// เพิ่มข้อมูลสินค้า
ProductRoute.route('/create-product').post((req,res,next)=>{
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

// ----------------- Users ----------------
// ดึงสินค้าทั้งหมดออกมา
ProductRoute.route('/show-user').get((req,res,next)=>{
    UsersModel.find((error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data);
        }
    })
})
// เพิ่มข้อมูลสินค้า
ProductRoute.route('/create-user').post((req,res,next)=>{
    UsersModel.create(req.body,(error,data)=>{
        if(error) return next(error)
        else res.json(data)
    })
})


// แก้ไขข้อมูลสินค้า
ProductRoute.route('/edit-user/:id').get((req,res,next)=>{
    UsersModel.findById(req.params.id,(error,data)=>{
        if(err){
            return next(erroe)
        }else {
            res.json(data);
        }
    })
})
// update product data
ProductRoute.route('/update-user/:id').put((req,res,next)=>{
    UsersModel.findByIdAndUpdate(req.params.id,{
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
ProductRoute.route('/delete-user/:id').delete((req,res,next)=>{
    UsersModel.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error){
            return next(error);
        }else {
            res.status(200).json({
                msg:data
            })
        }
    })
})

// ----- Order -------
ProductRoute.route('/show-order').get((req,res,next)=>{
    OrderModel.find((error,data)=>{
        if(error){
            return next(error)
        }
        else {
            res.json(data);
        }
    })
})

// ----------------- products ----------------
// เพิ่มข้อมูลสินค้า
ProductRoute.route('/create-order').post((req,res,next)=>{
    OrderModel.create(req.body,(error,data)=>{
        if(error) return next(error)
        else res.json(data)
    })
})

// แก้ไขข้อมูลสินค้า
ProductRoute.route('/edit-order/:id').get((req,res,next)=>{
    OrderModel.findById(req.params.id,(error,data)=>{
        if(err){
            return next(erroe)
        }else {
            res.json(data);
        }
    })
})
// update product data
ProductRoute.route('/update-order/:id').put((req,res,next)=>{
    OrderModel.findByIdAndUpdate(req.params.id,{
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