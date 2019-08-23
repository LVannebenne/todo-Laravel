<template>
  <div id="home">
    <H1>This is the home page</H1>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Connexion</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="logUser">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" name="email" v-model="user.email" />
        </div>
        <div class="form">
          <label for="password">Mot de passe</label>
          <input type="password" name="password" v-model="user.password" />
        </div>
        <button>Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
      logUser() {
          let uri = `/api/username/${this.user.email}`;
          this.axios.get(uri).then(response => {
            let user = JSON.stringify(response.data[0])
            localStorage.setItem('session', user)
            this.$router.push({ name: 'MyTodos' })
            });
      }
  },
  mounted() {
    console.log("Component home mounted.");
  }
};
</script>
