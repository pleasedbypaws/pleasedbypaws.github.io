import { createWebHistory, createRouter } from "vue-router";
import PageContact from "@/components/PageContact";
import PageFaq from "@/components/PageFaq";
import PagePrices from "@/components/PagePrices";
import PageAbout from "@/components/PageAbout";
import PageTraining from "@/components/PageTraining";
import PageHome from "@/components/PageHome";

const routes = [
    {
        path: "/",
        name: "Home",
        component: PageHome,
    },
    {
        path: "/about",
        name: "About",
        component: PageAbout,
    },
    {
        path: "/contact",
        name: "Contact",
        component: PageContact,
    },
    {
        path: "/faq",
        name: "FAQ",
        component: PageFaq,
    },
    {
        path: "/prices",
        name: "Prices",
        component: PagePrices,
    },
    {
        path: "/training",
        name: "Training",
        component: PageTraining,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;