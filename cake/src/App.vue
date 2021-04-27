<style scoped>

</style>
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-danger" >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" style="color:white;">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/hello">
              <label for="" class="nav-link"> Hello</label>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/hello">
              <label for="" class="nav-link"> Hello</label>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/hello">
              <label for="" class="nav-link"> Hello</label>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
}
</script>