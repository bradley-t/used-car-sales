<template>
<div id="app">
  <div id="menu">
    <div id="side">
       <router-link to="/sell">
        <div class="menu-item">
          <img src="./assets/images/sell.png">
          <p>Sell Yours</p>
        </div>
      </router-link>
      <router-link to="/compare">
        <div class="menu-item compare">
          <img src="./assets/images/compare.png">
          <p>Compare<br>{{compareSize}} Vehicles</p>
        </div>
      </router-link>
    </div>
    <div id="brand">
      <router-link to="/"> 
        <img src="./assets/images/logo.png">
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<script>
export default {
  computed: {
    compareSize(){
      return this.$root.$data.compare.length;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "side brand none";
  margin-bottom: 50px;
}

#menu a {
  color: #324a5eff;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  max-height: 200px;
  max-width: 500px;
}

#side {
  grid-area: side;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

#side img {
  width: 40px;
  padding-right: 10px;
}

.menu-item {
  display: flex;
  /* flex-direction: column; */
  padding: 10px;
}

.menu-item p {
  margin: 0px;
  /* text-decoration: none; */
}

.compare {
  margin-right: 90px;
}
</style>