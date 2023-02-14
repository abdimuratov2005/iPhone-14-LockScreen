import { createRouter, createWebHashHistory } from "vue-router";
import LockScreeen from '@/pages/LockScreeen.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/lockscreen', component: LockScreeen, alias: '/' },
    ]
})

