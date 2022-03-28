import { createWebHistory, createRouter } from "vue-router";
import PageHeader from "@/components/PageHome";
import AboutPage from "@/components/PageAbout";
import PageContact from '@/components/PageContact'

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
    },
    {
        path: "/contact",
        name: "Contact",
        component: PageContact,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;