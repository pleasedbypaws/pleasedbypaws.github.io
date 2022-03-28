import { createWebHistory, createRouter } from "vue-router";
import PageHeader from "@/components/PageHome";
import AboutPage from "@/components/PageAbout";

const routes = [
    {
        path: "/",
        name: "Home",
        component: PageHeader,
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;