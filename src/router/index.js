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
        path: '/:version',
        name: 'Version',
        component: Version,
    }
];

const router = new VueRouter({
    routes
});

export default router
