import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Products from "./views/Products.vue";
import Certificates from "./views/Certificates.vue";
import Nostr from "./views/Nostr.vue";
import NotFound from "./views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/products",
    name: "products",
    component: Products
  },
  {
    path: "/certificates",
    name: "certificates",
    component: Certificates
  },
  {
    path: "/nostr",
    name: "nostr",
    component: Nostr
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404 Not Found",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
