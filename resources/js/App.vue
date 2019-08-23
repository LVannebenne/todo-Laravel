<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">HelloPost</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/mytodos" class="nav-link">My Todos</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/create" class="nav-link">Create New Todo</router-link>
          </li>
          <li v-if="isConn()" class="nav-item">
            <button class="btn btn-dark" @click.prevent="logOut()">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created() {
      
    
  },
  methods: {
      isConn() {
          return JSON.parse(localStorage.getItem("session"));
      },
      logOut() {
          console.log("clearing")
          localStorage.clear();
          this.$router.push({ name: "Home" });
      }
  }
};
</script>