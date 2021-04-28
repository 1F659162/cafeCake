
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-danger fontKanti" style="padding:10px">
    <div class="container-fluid">
      <img src="./assets/logo.png" style="width:35px;" alt="">
      <div class="collapse navbar-collapse" id="navbarNav" >
        <ul class="navbar-nav">
          <li class="nav-item ">
            <router-link to="/cake" class="nav-link"  style="color:white; font-size:20px;" > <strong>The Champion Cafe</strong> </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/hello" class="nav-link" style="color:white; font-size:20px;"></router-link>
          </li>
        </ul>
      </div>
      <router-link to="/signUp">
            <button class="btn btn-light"  v-if="login == ''"> <strong>Sign Up</strong></button>
      </router-link>
      <router-link to="/signIn">
            <button class="btn btn-dark" style="margin-left:10px;" v-if="login == ''"> <strong>Sign In</strong></button>
    </router-link>
    <button class="btn btn-dark"  style="margin-left:10px;" @click="logout()" v-if="login != ''"> <strong>Logout</strong></button>

    </div>
  </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  
  data(){
  return{
            userpass: [],
            login:'',
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
            for(let i = 0;i <= this.userpass.length;i++){
                if(pass == this.userpass[i].user_pass && user == this.userpass[i].user_user){  
                  console.log('')
                }
            }
        },
        logined(){
          this.login="login";
        }
        ,logout(){
          this.login='';
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
.fontKanti{
    font-family: 'Kanit', sans-serif;
}
</style>