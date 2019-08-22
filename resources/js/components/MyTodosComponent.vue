<template>
  <div>
    <H1>All my todos</H1>
    <div class="row flex flex-row">
      <div class="card" style="width: 18rem;" v-for="list in lists" :key="list.id_list">
        <div class="card-body">
            <div>
                <h2 class="card-title">{{ list.name }}</h2>
            </div>
          <h6 class="card-subtitle mb-2 text-muted">Id: {{ list.id_list }} created by {{ list.id_user }}</h6>
          <p class="card-text">
              <router-link :to="{name: 'CreateItem', params: { id: list.id_list }}" class="btn btn-warning">Show</router-link>
          </p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
                <button class="btn btn-danger" @click.prevent="deletePost(list.id_list)">Delete</button>
                <input type="text" class="form-control" v-model="items.description" />
               {{ items.description }}
               <button class="btn btn-success" @click.prevent="addItem(list.id_list)">++</button>
                */
export default {
  data() {
    return {
      lists: [],
      items: []
    };
  },
  created() {
    let uri = "/api/todos";
    this.axios.get(uri).then(response => {
      this.lists = response.data.data;
    });
  },
  methods: {
    deletePost(id) {
      let uri = `/api/todo/delete/${id}`;
      this.axios.delete(uri).then(response => {
        this.lists.splice(this.lists.indexOf(id), 1);
      });
    },
    addItem($id_list) {
        let uri = `/api/item/create`;
        console.log($id_list)
        this.axios.post(uri, this.items).then(response => {
            console.error(error.response)
            this.$router.push({ name: "Create" }).catch(error => {
                console.log("shit happen");
              });
              alert("New Item Created!");
        })
    }
  }
};
</script>
