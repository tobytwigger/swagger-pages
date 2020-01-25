import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestVersion from "../views/LatestVersion";
import Version from "../views/Version";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'LatestVersion',
        component: LatestVersion
    },
    {
        path: '/version/:version',
        name: 'Version',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Version,
    }
];

const router = new VueRouter({
    routes
});

export default router
