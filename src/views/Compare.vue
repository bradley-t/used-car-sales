<template>
    <table class="table">
        <tr>
            <th>Picture</th>
            <th>Year</th>
            <th>Make</th>
            <th>Model</th>
            <th>Price</th>
            <th>Location</th>
            <th> </th>
            <th> </th>
        </tr>
        <tr class="vehicle" v-for="vehicle in this.$root.$data.compare" :key="vehicle.id">
            <td><img class="thumbnail" :src="require('./../assets/images/vehicles/'+vehicle.image)"></td>
            <td>{{vehicle.year}}</td>
            <td>{{vehicle.make}}</td>
            <td>{{vehicle.model}}</td>
            <td>{{vehicle.price}}</td>
            <td>{{vehicle.city}}, {{vehicle.state}}</td>
            <td><router-link :to="'/info/'+vehicle.id">
                <button class="compare">More Info</button>
            </router-link></td>
            <td>
            <button @click="remove(vehicle)">Remove</button></td>
        </tr>
    </table>    
</template>

<script>
export default {
    methods: {
        remove(vehicle){
             var index = this.$root.$data.compare.indexOf(vehicle);
            if (index > -1){
                this.$root.$data.compare.splice(index, 1);
            }
        }
    }
}
</script>

<style scoped>
    .table{
        width:95%;
        float:right;
        margin-bottom: 60px;
    }
    .thumbnail{
        width: 90px;
    }
    th{
        height: 60px;
        padding: 15px;
        text-align: left;
    }
    td{
        height: 100px;
        padding: 15px;
    }
    th, td {
        border-bottom: 1px solid #ddd;
    }
    button {
        height: 40px;
        width: 80px;
        margin-right:10px;
        margin-top: 10px;
        background: #324a5eff;
        color: white;
        border: none;
        margin-top: auto;
    }
    tr:hover {background-color: #f5f5f5;}
</style>