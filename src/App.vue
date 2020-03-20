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
  <div class='footer'>
    <div class="footer-container">
      <div class='footer-discription'>Bradley Taylor</div>
      <div class='footer-discription divider'>|</div>
      <div class='footer-discription'>Web Design Project March 2020</div>
      <div class='footer-discription divider'>|</div>
      <div class='footer-discription'>
        <a class='con-link' href="https://github.com/Bradley-A-Taylor/cp3">GitHub Repository</a>
      </div>
    </div>
  </div>
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
.footer{
    position: relative;
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12em;
    font-family: 'Poppins', sans-serif;
    color: #324a5e;
  }
.footer-container{
  width:75%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.footer-discription{
  font-size: .74rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
}
.divider{
  font-size: .9rem;
  padding-left: 20px;
  padding-right: 20px;
}
.con-link:link,
.con-link:visited{
  text-decoration: underline;
  color: #324a5e;
  text-decoration-color: #ffd05bff;
}
.con-link:hover,
.con-link:active{
  color: rgba(0,0,0,1);
  text-decoration: underline;
}

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
  text-decoration-color: #ffd05bff;
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