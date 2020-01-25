import Vue from 'vue'
import VueRouter from 'vue-router'
import Version from "../views/Version";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:version',
        name: 'Version',
        component: Version,
    }
];

const router = new VueRouter({
    routes
});

export default router
