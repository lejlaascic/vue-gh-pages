import { createRouter, createWebHistory } from 'vue-router'
import Home from "./src/components/pages/Home.vue"
import HeroesList from "./src/components/pages/HeroesList.vue"
import Callendar from "./src/components/pages/Callendar.vue"
import MarcDown from "./src/components/pages/Marcdown.vue"
import Slider from "./src/components/pages/Slider.vue"


const routes = [
    { path: '/', component: Home },
    { path: '/heroes-list', component: HeroesList },
    { path: '/calendar', component: Callendar },
    { path: '/marcdown', component: MarcDown },
    { path: '/slider', component: Slider },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;