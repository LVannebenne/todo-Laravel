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
import CreateTodoComponent from './components/CreateTodoComponent';
import CreateItemComponent from './components/CreateItemComponent';
import MyTodosComponent from './components/MyTodosComponent';
import ProfileComponent from './components/ProfileComponent';

const routes = [
        {
            name: 'Home',
            path: '/',
            component: HomeComponent
        },
        {
            name: 'MyTodos',
            path: '/mytodos',
            component: MyTodosComponent
        },
        {
            name: 'Create',
            path: '/create',
            component: CreateTodoComponent
        },
        {
            name: 'CreateItem',
            path: '/createitem/:id',
            component: CreateItemComponent
        },
        {
            name: 'Profile',
            path: '/profile',
            component: ProfileComponent
        }
    ];

const router = new VueRouter({ mode: 'history', routes: routes});
  
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
