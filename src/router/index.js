import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../components/Dashboard/dashboard.vue';
import Login from '../components/Login/login.vue';

Vue.use(Router)
const router = new Router({
    routes:[
        {
            path:'/dashboard',
            name:'Dashboard',
            component:Dashboard
        },
        {
            path:'/',
            name:'Login',
            component:Login
        }
    ],
    mode:'history'
})

export default router