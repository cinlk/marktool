import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import recruite from "@/components/recruite";
import main from "@/components/main"

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
{
    path: "/",
    name: "main",
    component: main

},

{
    path:"/recruite",
    name: "recruite",
    component: recruite
}

]

let router = new VueRouter({
routes: routes
});
export default router;