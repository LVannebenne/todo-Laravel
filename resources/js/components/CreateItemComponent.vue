<template>
  <div>
    <H1>Create a new TodoList</H1>
    <form @submit.prevent="addList">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Todo name:</label>
            <input type="text" class="form-control" v-model="lists.name" />
            {{ lists.name }}
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        data() {
            return {
            items: {}
            };
        },
    methods: {
        addList() {
          let uri = "/api/todo/create";
          this.axios.post(uri, this.lists).catch(error =>{
            console.error(error.response);
          }).then(response => {
              this.$router.push({ name: "Create" })
              }).catch(error => {
                console.log("shit happen");;
              alert("New Todo Created!");
          });
        }
    }
    };
</script>
