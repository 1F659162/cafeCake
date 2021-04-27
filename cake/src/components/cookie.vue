<template>
    <div container>
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
                            </router-link>                              </td>
                        <td width="300px;" align="center" class="fontKanti fontS18" style="cursor:pointer;padding:0px;margin:0px; color: white;" >
                            <router-link to="/cookie">
                                <button class="btn btn-outline-light" style="width:100%;height:60px;margin:0px;border-radius:0px;">COOKIES</button>
                            </router-link>                              </td>
                        <td width="20%;" height="60px;"></td>
                    </tr>
        </table>
            </div>
        </div>
        
    </div> 
    <div class="container">
            <div class="row">
                    <div class="col" align="center" v-for="product in products" :key="product._id" style="margin-top:30px;">
                        <div class="card h-100" style="width:18rem;">
                            <a >
                                <img class="card-img-top" width="width:50px;" :src="product.p_id" alt="">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title fontKanti"  style="font-size: 25px;cursor: pointer;text-align:bottom;">
                                    <b>
                                        {{product.p_name}}
                                    </b>
                                </h5>
                            </div>
                            <div class="card-footer" >
                                <label class="label20 fontKanti" for="">ราคา</label>
                                <label class="label20 fontKanti" style="color: orange;" for="">{{product.p_price}}</label>
                                <label class="label20 fontKanti" for="">บาท</label>
                                <a  class="btn btn-danger fontKanti">ใส่ในตะกร้า</a>
                            </div>
                        </div>
                    </div>
            </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            products: [],
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
    methods: {
      
    }
}
</script>