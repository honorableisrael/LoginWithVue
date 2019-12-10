import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../components/Dashboard/dashboard.vue';
import Login from '../components/Login/login.vue';
import SignUp from '../components/SignUp/signup.vue'


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
        },
        {
            path:'/signup',
            name:'SignUp',
            component:SignUp
        }
    ],
    mode:'history'
})

export default router