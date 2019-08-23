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
//ROUTES;
import routes from './routes';
//Auth Adds :
import 'es6-promise/auto';
import './bootstrap';
import Vue from 'vue';
import VueAuth from '@websanova/vue-auth';
import Index from './Index';
import auth from './auth';

// Set Vue globally
window.Vue = Vue

// Set Vue router



const router = new VueRouter({
  history: true,
  mode: 'history',
  routes: routes,
})

Vue.use(VueRouter)
Vue.router = router

// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `/api`
Vue.use(VueAuth, auth)

// Load Index
Vue.component('index', Index)


// Routes

const app = new Vue(Vue.util.extend({
  router
}, App)).$mount('#app');

