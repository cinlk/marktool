import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import recruite from "../components/recruite.vue";
import main from "../components/main.vue"
import aboutus from "../components/aboutus"

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
{
    path: "/",
    name: "main",
    component: main

},
{
    path: "/aboutus",
    name: "aboutus",
    component: aboutus
},
{
    path:"/recruite",
    name: "recruite",
    component: recruite
}

]

const router = new VueRouter({
    routes
});
export default router;