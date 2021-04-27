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
                            <button class="btn btn-outline-light" style="width:100%;height:60px;margin:0px">DRINK & COFFEE</button>
                        </td>
                        <td width="300px;" align="center" class="fontKanti fontS18" style="cursor:pointer;padding:0px;margin:0px; color: white;" >
                            <button class="btn btn-outline-light" style="width:100%;height:60px;margin:0px">COOKIES</button>
                        </td>
                        <td width="20%;" height="60px;"></td>
                    </tr>
        </table>
            </div>
        </div>
        
    </div>    
    
</template>
<script>
import axios from 'axios';
export default {
    data(){
        
        return {
            product:{
                p_id: "C005",
                p_name: "sab",
                p_price: 300,
                stock: 3,
                category: "nueng",
                p_detail: "nueng",
            },
        }
    },
    methods:{
        create(){
            const AddAPI = "http://localhost:4000/api/create-user";
            axios.post(AddAPI,this.product).then(()=>{
                console.log("เพิ่มข้อมูลสำเร็จ");
            })
        },
    }
}
</script>
