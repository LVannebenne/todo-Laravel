<template>
  <div>
    <H1>Add some items to our Todo</H1>
    <form @submit.prevent="addItem(lists.id_list)">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Add an item to Todo : {{ lists.name }}</label>
            <div class="d-flex">
              <input type="text" class="form-control" v-model="items.description" />
              <button class="btn btn-success">++</button>
            </div>
            {{ items.description }}
          </div>
          <div class="row flex flex-row">
            <div class="card w-100">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex align-items-center"
                  v-for="it in itemsFrom">
                  <input type="checkbox" v-if="it.status" checked />
                  <input type="checkbox" v-else />
                  <p class="mb-0 pl-2">{{ it.description }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: {},
      items: {},
      itemsFrom: {}
    };
  },
  created() {
    let uri = `/api/todo/createItem/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.lists = response.data;
      console.log(response.data);
    });
    uri = `/api/items/fromlist/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.itemsFrom = response.data;
    });
  },
  methods: {
    addItem($id_list) {
      this.items.id_list = $id_list;
      let uri = "/api/item/create";
      this.axios
        .post(uri, this.items)
        .then(response => {
          this.$router.replace({ name: "CreateItem", params: { $id_list } });
        })
        .catch(error => {
          console.error(error.response);
        });
    },
    getAllItems() {}
  }
};
</script>
