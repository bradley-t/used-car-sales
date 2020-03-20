import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sell from '../views/Sell.vue';
import Compare from '../views/Compare.vue';
import Info from '../views/Info.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/sell',
    name: 'Sell',
    component: Sell
  },
  {
    path: '/compare',
    name: 'Compare',
    component: Compare
  },
  {
    path: '/info/:id',
    name: 'Info',
    component: Info,
    //props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;