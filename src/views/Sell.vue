<template>
    <div class="wrapper">
        <h1>Sell Your Car</h1>
        <form  @submit.prevent="addCar()" class="pure-form pure-form-aligned">
        <fieldset>
        <div class="pure-control-group">
            <label for="asking-price">Asking Price</label>
            <input v-model="price" id="asking-price" type="text" placeholder="Asking Price">
        </div>
        <div class="pure-control-group">
            <label for="vin">VIN</label>
            <input v-model="vin" id="vin" type="text" placeholder="VIN Number">
        </div>
        <div class="pure-control-group">
            <label for="make">Make</label>
            <input v-model="make" id="make" type="text" placeholder="Make">
        </div>
        <div class="pure-control-group">
            <label for="model">Model</label>
            <input v-model="model" id="model" type="text" placeholder="Model">
        </div>
        <div class="pure-control-group">
            <label for="year">Year</label>
            <input v-model="year" id="year" type="text" placeholder="Year">
        </div>
        <div class="pure-control-group">
            <label for="name">Name</label>
            <input v-model="name" id="name" type="text" placeholder="Name">
        </div>
        <div class="pure-control-group">
            <label for="phone">Phone</label>
            <input v-model="phone" id="phone" type="text" placeholder="Phone">
        </div>
        <div class="pure-control-group">
            <label for="city">City</label>
            <input v-model="city" id="city" type="text" placeholder="City">
        </div>
        <div class="state">
        <label for="state">State</label>
        <select v-model="state" id="state">
            <option>AL</option>
            <option>AK</option>
            <option>AS</option>
            <option>AZ</option>
            <option>AR</option>
            <option>CA</option>
            <option>CO</option>
            <option>CT</option>
            <option>DE</option>
            <option>DC</option>
            <option>FL</option>
            <option>DA</option>
            <option>GA</option>
            <option>GU</option>
            <option>HI</option>
            <option>ID</option>
            <option>IL</option>
            <option>IN</option>
            <option>IA</option>
            <option>KS</option>
            <option>KY</option>
            <option>LA</option>
            <option>ME</option>
            <option>MD</option>
            <option>MH</option>
            <option>MA</option>
            <option>MI</option>
            <option>FM</option>
            <option>MN</option>
            <option>MS</option>
            <option>MO</option>
            <option>MT</option>
            <option>NE</option>
            <option>NV</option>
            <option>NH</option>
            <option>NJ</option>
            <option>NM</option>
            <option>NY</option>
            <option>NC</option>
            <option>ND</option>
            <option>MP</option>
            <option>OH</option>
            <option>OK</option>
            <option>OR</option>
            <option>PW</option>
            <option>PA</option>
            <option>PR</option>
            <option>RI</option>
            <option>SC</option>
            <option>SD</option>
            <option>TN</option>
            <option>TX</option>
            <option>UT</option>
            <option>VT</option>
            <option>VA</option>
            <option>VI</option>
            <option>WA</option>
            <option>WV</option>
            <option>WI</option>
            <option>WY</option>
        </select>
        </div>
        <div class="pure-controls">
        <button type="submit" class="pure-button pure-button-primary">Submit</button>
        </div>
        </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            price: '',
            vin: '',
            make: '',
            model: '',
            year: '',
            name: '',
            phone: '',
            city: '',
            state: ''
        }
    },
    methods: {
        addCar(){
            if(this.$root.$data.compare.filter(item => item.vin === this.vin).length === 0){
                this.$root.$data.vehicles.push({id: this.$root.$data.vehicles.length + 1, vin: this.vin, make: this.make, model: this.model, year: this.year, price: '$'+this.price, seller: this.name, phone_number: this.phone, city: this.city, state: this.state, image: 'default.png'});
            }
            this.price = '';
            this.vin = '';
            this.make = '';
            this.model = '';
            this.year = '';
            this.name = '';
            this.phone = '';
            this.city = '';
            this.state = '';
        }
    }
}
</script>

<style scoped>
h1 {
    color:#324a5eff;
}

.wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.state{
    padding-top: 3px;
    padding-right: 145px;
    padding-bottom: 30px;
    float: right;
}
.state > label{
    margin-right: 15px;
}
</style>