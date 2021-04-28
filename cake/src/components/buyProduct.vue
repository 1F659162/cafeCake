<template>
    <table style = "width: 100%; margin: 0;">
        <tr>
            <td>
                <div class="container" >
                    <div class="row" style="margin: 20px 100px 20px 100px; background-color: white">
                        <div class="col" style="border: 1px solid black; border-radius: 10px; box-shadow: 5px 5px 5px 5px rgba(50,50,50,.3); padding-bottom: 20px;">
                            <center>
                                <label for="" class="fontKanti" style="font-size: 25px;margin-top: 20px; color: darkgreen">
                                    <b>
                                        
                                    </b>
                                </label>
                                <hr>
                            </center>
                            <table width="100%">
                                <tr>
                                    <td width="50%" style="padding: 30px 30px 30px 30px; margin-top: 0px;" >
                                        <center>
                                            <img src="images/<?php echo $row['product_id'];?>.jpeg" alt="" style="height: 300px;">
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
                                                        {{products._id}}
                                                    </label>
                                                    <hr>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>
                                                        <label class="label20 fontKanti" for="">ราคา : </label>
                                                        <label class="label20 fontKanti" style="color: orange;" for=""></label>
                                                        <label class="label20 fontKanti" for="">บาท</label><br>
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
                                                        <button type="submit" class="btn btn-warning" style="margin-top: 20px;box-shadow: 5px 5px 5px 5px rgba(20,20,20,.1);"> ใส่ตะกร้า </button>
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
        return {
            Orser:{
                order_id: '',
                user_id: '',
                quantity: '',
            },
            selectedField: null
        }
    },
    methods:{
        preOrder(){
            const AddAPI = "http://localhost:4000/api/create-order";
            axios.post(AddAPI,this.Orser).then(()=>{
                console.log("เพิ่มข้อมูลสำเร็จ");
                this.$router.push('/');
                this.Order = {
                    order_id: '',
                    user_id: '',
                    quantity: '',
                }
            })
        }
    }
}
</script>