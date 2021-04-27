<template>
    <div>
        <form @submit.prevent="signUp">
            <div class="container" style="padding-top:40px;">
                <center>
                    <table style="width:40%; border-radius: 20px;padding-top:40px;">
                        <tr style="text-align: center;padding-top:20px;margin-top:20px;">
                            <td class="fontKanti" style="font-size: 30px;" colspan="2" >
                                <img src="./logo.png" alt="">
                            </td>
                        </tr>
                        <tr style="text-align: center;padding-top:20px;margin-top:20px;" >
                            <td class="fontKanti" style="font-size: 30px;" colspan="2">Sign Up</td>
                        </tr>
                        <tr>
                            <td style="padding: 0px 10px 10px 10px;">
                                <label for="" class="fontKanti" >First Name</label>
                                <label for="" class="fontKanti" style="color: red">*</label><br>
                                <input v-model="User.user_fname" name="fname" type="text" class="form-control"  required>
                            </td>
                            <td style="padding: 0px 10px 10px 10px;">
                                <label for="" class="fontKanti" >Last Name</label>
                                <label for="" class="fontKanti" style="color: red">*</label><br>
                                <input v-model="User.user_lname" name="lname" type="text" class="form-control" required="required">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding: 0px 10px 10px 10px;">
                                <label for="" class="fontKanti" >Tel</label>
                                <label for="" class="fontKanti" style="color: red">*</label><br>
                                <input v-model="User.user_tel" name="tel" type="text" class="form-control" required="required">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding: 0px 10px 10px 10px;">
                                <label for="" class="fontKanti" >Email</label>
                                <label for="" class="fontKanti" style="color: red">*</label><br>
                                <input v-model="User.user_email" name="email" type="email" class="form-control" required="required">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding: 0px 10px 10px 10px;">
                                <label for="" class="fontKanti" >Username</label>
                                <label for="" class="fontKanti" style="color: red">*</label><br>
                                <input v-model="User.user_user" name="username" type="text" class="form-control" required="required">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding: 0px 10px 10px 10px;">
                                <label for="" class="fontKanti" >Password</label>
                                <label for="" class="fontKanti" style="color: #ff0000">*</label><br>
                                <input v-model="User.user_pass" name="password" type="password" class="form-control" required="required">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding: 10px 10px 10px 10px;">
                                <input type="submit" class="btn btn-danger" style="width: 100% ; height: 100%">
                            </td>
                        </tr>
                    </table>
                </center>
            
            </div>

        </form>
    </div>    
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            User:{
                user_id: '',
                user_fname: '',
                user_lname: '',
                user_user: '',
                user_pass: '',
                user_email: '',
                user_tell:'',
            },
            selectedField: null
        }
    },
    methods:{
        signUp(){
            const AddAPI = "http://localhost:4000/api/create-user";
            axios.post(AddAPI,this.User).then(()=>{
                console.log("เพิ่มข้อมูลสำเร็จ");
                this.$router.push('/');
                this.User = {
                    user_id: '',
                    user_fname: '',
                    user_lname: '',
                    user_user: '',
                    user_pass: '',
                    user_email: '',
                    user_tell:'',
                }
            })
        }
    }
}
</script>