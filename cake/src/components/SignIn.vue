<template>
           <div class="container">

        <div class="row" style="margin-top: 50px;">
            <div class="col"></div>
            <form>
                <div class="col">
                    <div class="card border-danger mb-3" style="border-radius: 10px;width: 27rem; height: 30rem;box-shadow: 5px 5px 5px 5px rgba(50,50,50,.4);">
                        <div class="card-header" style="text-align: center; padding: 20px 10px 20px 10px;">
                            <img src="./logo.png" alt="" style="padding-bottom: 20px;">
                            <h3>Sign to WebP cafe</h3>
                        </div>
                        <div class="card-body">
                            <div>
                                <label for="username">
                                    Username
                                </label>
                                <input type="text"  class="form-control" id="useername" v-model="user"  required="required">
                            </div>

                            <div>
                                <label for="password">
                                    Password
                                </label>
                                <input type="password" class="form-control" id="password" v-model="pass" required="required">
                            </div>

                        </div>
                        <div class="card-footer" style="padding: 10px 10px 20px 20px;">
                            <button type="submit" class="btn btn-danger"  style="border-radius: 20px;width: 100%; margin-bottom: 10px;margin-top:10px;" @click="checklogin(user,pass)">Login</button>
                            <div>
                                <label for="">
                                    Don't have an account yet?
                                </label>
                                <label for="" style="cursor: pointer; color: orangered" >
                                    Sign up
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            userpass: [],
        }
    },
    created(){
        let apiURL = 'http://localhost:4000/api/show-user';
        axios.get(apiURL).then(res => {
            this.userpass = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        checklogin(user,pass){
            let confirm = false;
            for(let i = 0;i <= this.userpass.length;i++){
                if(pass == this.userpass[i].user_pass && user == this.userpass[i].user_user){  
                    alert("login success")
                    this.$router.push('/');
                }
            }
            if(confirm == false){
                alert("username or password is wrongs")
            }
        }
    }
}
</script>

