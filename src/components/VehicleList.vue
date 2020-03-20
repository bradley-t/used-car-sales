<template>
<div class="wrapper">
    <h2 class="message" v-show="vehicles.length === 0">Nothing for sale that matches that, check back later</h2>
    <div class="vehicle" v-for="vehicle in vehicles" :key="vehicle.id">
      <hr class="divider">
      <div class="content">
      <div class="image">
        <img :src="require('./../assets/images/vehicles/'+vehicle.image)">
      </div>
      <div class="info">
        <h1>{{name(vehicle)}}</h1>
        <p>{{vehicle.city}}, {{vehicle.state}}</p>
        <div class="buttons">
            <router-link :to="'/info/'+vehicle.id">
                <button class="compare">More Info</button>
            </router-link>
            <button @click="addToCompare(vehicle)" class="compare">Compare</button>
        </div>
      </div>
      <div>
      <h2 class="price">{{vehicle.price}}</h2>
      </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'VehicleList',
  props: {
    vehicles: Array
  },
 
  methods: {
      name(vehicle){
        return vehicle.year + " " + vehicle.make + " " + vehicle.model;
        },
    addToCompare(vehicle) {
        if(this.$root.$data.compare.filter(item => item.id === vehicle.id).length === 0){
            this.$root.$data.compare.push({id: vehicle.id, vin: vehicle.vin, make: vehicle.make, model: vehicle.model, year: vehicle.year, price: vehicle.price, seller: vehicle.seller, phone_number: vehicle.phone_number, city: vehicle.city, state: vehicle.state, image: vehicle.image});
        }
    }
},
}


</script>

<style scoped>
.wrapper {
  float: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  margin-top: 30px;
}
.divider{
  border: none;
  border-bottom: solid 1px #324a5eff;
  width: 100%;
	margin-bottom: 35px;
    margin-top: 20px;
	height: 1px;
}
.vehicle{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.content{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}
.image > img{
  max-height: 300px;
  max-width: 500px;
  padding-right: 25px;
}
.info{
  display:flex;
  flex-direction: column;
  margin-block-start: none;
}
.price{
  color: #efc04bff;
  padding-left: 20px;
  margin-left:auto;
  margin-block-start: 5px;
  margin-block-end: 0;
}
button {
  height: 50px;
  width: 100px;
  margin-right:10px;
  margin-top: 10px;
  background: #324a5eff;
  color: white;
  border: none;
  margin-top: auto;
}
p{
  color: #324a5eff;

}
h1{
  color: #324a5eff;
  margin-block-start: 0;
  margin-block-end: 0;
}

</style>