<template>
    <div class = "wrapper">
        <router-link to="/">
            <h2>Back</h2>
        </router-link>
        <div class="item">
            <img :src="require('./../assets/images/vehicles/'+ vehicle.image)">
            <div class="info">
                <h1>{{vehicle.year}} {{vehicle.make}} {{vehicle.model}}</h1>
                <p>Price: {{vehicle.price}}</p>
                <p>Seller: {{vehicle.seller}}</p>
                <p>Phone: {{vehicle.phone_number}}</p>
                <p>Location: {{vehicle.city}}, {{vehicle.state}}</p>
                <p>VIN: {{vehicle.vin}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vehicleID: parseInt(this.$route.params.id),
            // vehicle: this.$root.$data.vehicles.find(vehicle => vehicle.id === this.vehicleID)
        };
    },
    computed: {
        vehicle() {
            return this.$root.$data.vehicles.find(vehicle => vehicle.id === this.vehicleID);
        }
    }
}
</script>

<style scoped>
.info{
    padding-left: 25px;
    font-family: 'Poppins', sans-serif;
    padding-bottom: 30px;
}
a {
    color: #324a5e;
    text-decoration-color: #ffd05bff;
}
img {
    width: 400px;
}
.item {
    color: white;
    display: flex;
    background-color: #324a5eff;
    padding: 20px;
}

</style>