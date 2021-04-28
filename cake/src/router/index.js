import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import SignUp from "@/components/SignUp.vue";
import hello from "@/components/HelloWorld.vue";
import cake from "@/components/cake.vue";
import drink from "@/components/drink.vue";
import cookie from "@/components/cookie.vue";
import signIn from "@/components/SignIn.vue";
import buyProduct from "@/components/buyProduct.vue";


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
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/cake",
    name: "cake",
    component: cake,
  },
  {
    path: "/drink",
    name: "drink",
    component: drink,
  },
  {
    path: "/cookie",
    name: "cookie",
    component: cookie,
  },
  {
    path: "/signIn",
    name: "signIn",
    component: signIn,
  },
  {
    path: "/buyProduct/:id",
    name: "buyProduct",
    component: buyProduct,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;