<template>
    <div container v-if="status == '1'">
        <div class="row">
            <div class="col-md-12">
                <table width="100%" style="margin-top: 1px; padding: 0;background-color: #E32126 ">
                    <tr style="padding:0; margin: 0">
                        <td width="20%;" height="60px;"></td>
                        <td width="300px;"  align="center" class="fontKanti fontS18" style="cursor: pointer;padding:0px;margin:0px; color: white;" >
                            <router-link to="/cake">
                                <button class="btn btn-outline-light" style="width:100%;height:60px;margin:0px;border-radius:0px;">CAKE</button>
                            </router-link>
                        </td>
                        <td width="300px;" align="center" class="fontKanti fontS18" style="cursor: pointer;padding:0px;margin:0px; color: white;" >
                            
                            <router-link to="/drink">
                                <button class="btn btn-outline-light" style="width:100%;height:60px;margin:0px;border-radius:0px;">DRINK</button>
                            </router-link>                        </td>
                        <td width="300px;" align="center" class="fontKanti fontS18" style="cursor:pointer;padding:0px;margin:0px; color: white;" >
                            <router-link to="/cookie">
                                <button class="btn btn-outline-light" style="width:100%;height:60px;margin:0px;border-radius:0px;">COOKIES</button>
                            </router-link>    
                        </td>
                        <td width="20%;" height="60px;"></td>
                    </tr>
        </table>
            </div>
        </div>
        
    </div> 
    <div class="container" v-if="status == '1'" >
            <div class="row">
                <div v-for="product in products" :key="product._id">
                    <div class="col-md-4" align="center" v-if="product.category=='T1'"  style="margin-top:30px;">
                        <div class="card h-100" v-if="product.category=='T1'"  style="width:18rem; margin-left:46px;">
                            <a >
                                <img class="card-img-top" width="width:50px;" :src="product.p_id" alt="">
                            </a>
                    <div class="card-body">
                                <h5 class="card-title fontKanti"  style="font-size: 25px;cursor: pointer;text-align:bottom;">
                                    <b>
                                    </b>
                                </h5>
                            </div>
                            <div class="card-footer" >
                                <label class="label20 fontKanti" for="">ราคา</label>
                                <label class="label20 fontKanti" style="color: orange;margin-left:10px;" for="">{{product.p_price}}</label>
                                <label class="label20 fontKanti" for="" style="margin-left:10px;">บาท</label>
                                <button @click="send_id(product)" class="btn btn-danger fontKanti" style="margin-left:10px;">ซื้อสินค้า</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <table style = "width: 100%; margin: 0;" v-if="status=='2'">
        <tr>
            <td>
                <div class="container" >
                    <div class="row" style="margin: 20px 100px 20px 100px; background-color: white">
                        <div class="col" style="border: 1px solid black; border-radius: 10px; box-shadow: 5px 5px 5px 5px rgba(50,50,50,.3); padding-bottom: 20px;">
                            <center>
                                <label for="" class="fontKanti" style="font-size: 25px;margin-top: 20px; color: darkgreen">
                                    <b>
                                        {{p_name}}
                                    </b>
                                </label>
                                <hr>
                            </center>
                            <table width="100%">
                                <tr>
                                    <td width="50%" style="padding: 30px 30px 30px 30px; margin-top: 0px;" >
                                        <center>
                                            <img :src="p_id" alt="" style="height: 300px;">
                                        </center>
                                    </td>
                                    <td width="50%">
                                        <table width="100%">
                                            <tr>
                                                <td>
                                                    <b>
                                                        <label for="" class="fontKanti" style="font-size: 20px;">
                                                            รายละเอียดสินค้า
                                                        </label><br>
                                                    </b>

                                                    <label for="" class="fontKanti" style="font-size: 15px;">
                                                        {{p_detail}}
                                                    </label>
                                                    <hr>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>
                                                        <label class="label20 fontKanti" for="" style="margin-left:10px;">ราคา :  </label>
                                                        <label class="label20 fontKanti" style="color: orange;margin-left:10px;" for="">{{p_price}}</label>
                                                        <label class="label20 fontKanti" for="" style="margin-left:10px;"> บาท</label><br>
                                                    </b>
                                                    <button class="btn btn-danger" style="cursor: default; width: 150px; border-radius: 0px;"> มีสินค้า </button>
                                                    <hr>
                                                </td>
                                            </tr>
                                                <tr>
                                                    <td>
                                                        <label class="label20 fontKanti" for="" style="font-size: 20px;"><b>จำนวน</b></label><br>
                                                        <input type="button"  @click="deUnit()"  class="btn-warning" value=" - " style="border-radius: 30px; height: 33px;">
                                                        <b>
                                                            <label id="unit" name="unit" class="label20 fontKanti" for="unit"  style="font-size: 20px; margin: 0px 10px 0px 10px;" >{{num}}</label>

                                                        </b>
                                                        <input type="button" @click="addUnit()" class="btn-warning" value=" + " style="border-radius: 30px; height: 33px; width: 33px;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding-left: 5px;">
                                                        <button type="submit" @click="updated()" class="btn btn-warning" style="margin-top: 20px;box-shadow: 5px 5px 5px 5px rgba(20,20,20,.1);"> ใส่ตะกร้า </button>
                                                    </td>
                                                </tr>
                                        </table>
                                    
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </table>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            products: [],
            status:'1',
            p_id: "",
            p_name: "",
            p_price: 0,
            stock: 0,
            category: "",
            p_detail: "",
            num:1,

            prod:{
                p_id: "C005",
                p_name: "sab",
                p_price: 300,
                stock: 3,
                category: "nueng",
                p_detail: "nueng",
            },
            iid:''
        }
    },
    created(){
        let apiURL = 'http://localhost:4000/api/';
        axios.get(apiURL).then(res => {
            this.products = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods:{
        send_id(pro){
            this.status = '2';
            this.p_id=pro.p_id;
            this.p_name= pro.p_name;
            this.p_price= pro.p_price;
            this.stock= pro.stock;
            this.category=pro.category;
            this.p_detail=pro.p_detail;
            this.iid=pro._id;
        },
        deUnit(){
            if(this.num > 1){
                this.num -= 1;
            }
        },
        addUnit(){
            if(this.num < this.stock){
                this.num += 1;
            }
        },
        updated(){
            console.log(this.iid)
            this.prod.p_id= "C005";
            this.prod.p_name= "sab";
            this.prod.p_price= 300;
            this.prod.stock= this.num;
            this.prod.category= "nueng";
            this.prod.p_detail= "nueng";
            const AddAPI = `http://localhost:4000/api/update-product/`;
            axios.post(AddAPI,this.prod).then(()=>{
                console.log("อัพเดืสำเร็จ");
            })
        }
    }
}
</script>