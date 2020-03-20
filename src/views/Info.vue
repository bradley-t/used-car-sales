<template>
    <div class = "wrapper">
        <router-link to="/">
            <h1>Back</h1>
        </router-link>
        <div class="item">
            <img :src="require('./../assets/images/vehicles/'+this.vehicle.image)">
            <div class="info">
                <h1>{{this.vehicle.year}} {{this.vehicle.make}} {{this.vehicle.model}}</h1>
                <p>${{this.vehicle.price}}</p>
                <p>Seller: {{this.vehicle.seller}}</p>
                <p>Phone: {{this.vehicle.phone}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vehicleID: this.$route.params.id,
            vehicle: this.$root.$data.vehicles.find(vehicle => vehicle.id === this.vehicleID)
        };
    },
    computed: {
        hello() {
            return this.$root.$data.vehicles.find(vehicle => vehicle.id === this.vehicleID);
        }
    }
}
</script>

<style scoped>

</style>