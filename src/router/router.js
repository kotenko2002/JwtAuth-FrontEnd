import {createRouter, createWebHistory} from "vue-router";
import Registration from "@/pages/auth/Registration";
import Login from "@/pages/auth/Login";
import Home from "@/pages/Home";
import Main from "@/pages/Main";

const  routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/auth/registration',
        component: Registration
    },
    {
        path: '/auth/login',
        component: Login
    },
    {
        path: '/main',
        component: Main
    },
]

const router = createRouter({
   routes,
   history: createWebHistory(process.env.BASE_URL)
});

export default router;