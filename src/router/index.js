import Vue from 'vue' 
import Router from 'vue-router' 
const DashboardLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue') 
const loginLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/login.vue') 
function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `../components/dashboardContents/${view}.vue`) 
} 
const routes = [ 
    { 
        path: '/', 
        component: DashboardLayout, 
        children: [ 
            { 
                name: 'LandingPageController', 
                path: '/',
                component: loadView('landingPageController') 
            },
            { 
                name: 'login', 
                path: '/login',
                beforeEnter: (to, from, next) => {
                    if(!localStorage.getItem('token')) {
                        // or however you store your logged in state
                        next(); // allow to enter route
                    } else{
                        next('/login'); // go to '/login';
                    }
                },  
                component: loginLayout
            },
            { 
                name: 'UserController', 
                path: '/user',
                beforeEnter: (to, from, next) => {
                    if(localStorage.getItem('token')) {
                        // or however you store your logged in state
                        next(); // allow to enter route
                    } else{
                        next('/login'); // go to '/login';
                    }
                }, 
                component: loadView('userController') 
            },
            { 
                name: 'BranchesController', 
                path: '/branches',
                beforeEnter: (to, from, next) => {
                    if(localStorage.getItem('token')) {
                        // or however you store your logged in state
                        next(); // allow to enter route
                    } else{
                        next('/login'); // go to '/login';
                    }
                }, 
                component: loadView('branchesController') 
            } 
        ] 
    }, 
] 
Vue.use(Router) 
const router = new Router({mode: 'history', routes: routes}) 
export default router