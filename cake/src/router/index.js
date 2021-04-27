import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import hello from "@/components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hello",
    name: "hello",
    component: hello,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;