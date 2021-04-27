<template>
    <div>
        <form @submit.prevent="create">
            <h1>สวัสดีชาวโลก</h1>    
            <button type="submit">ADD</button>
        </form>

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
            }
        }
    },
    methods:{
        create(){
            const AddAPI = "http://localhost:4000/api/create";
            axios.post(AddAPI,this.product).then(()=>{
                console.log("เพิ่มข้อมูลสำเร็จ");
            })
        }
    }
}
</script>