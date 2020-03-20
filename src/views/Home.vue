<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <VehicleList :vehicles="vehicles" />
</div>
</template>

<script>
import VehicleList from "../components/VehicleList.vue"
export default {
  name: 'Home',
  components: {
    VehicleList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    vehicles() {
    return this.$root.$data.vehicles.filter(vehicle => ( vehicle.year + " " + vehicle.make + " " + vehicle.model + " ").toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
