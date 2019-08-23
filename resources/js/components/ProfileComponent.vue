<template>
  <div id="profil">
    <H1>Bienvenue, {{ userinfo.username }}</H1>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Profil</h3>
      </div>
      <div class="card-body">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {}
    };
  },
  created() {
    this.userinfo = JSON.parse(localStorage.getItem('session'));
  },
  methods: {
  },
  mounted() {
    console.log("Component Profile mounted.");
  }
};
</script>
