/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

/*import routes from './routes';*/

/*const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});*/

import HomeComponent from './components/HomeComponent';
import DashboardComponent from './components/DashboardComponent';
import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';

const routes = [
        {
            name: 'Home',
            path: '/',
            component: HomeComponent
        },
        {
            name: 'Dashboard',
            path: '/dashboard',
            component: DashboardComponent
        },
        {
            name: 'Create',
            path: '/create',
            component: CreateComponent
        },
        {
            name: 'Edit',
            path: '/edit/:id',
            component: EditComponent
        }
    ];

const router = new VueRouter({ mode: 'history', routes: routes});
  
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');

