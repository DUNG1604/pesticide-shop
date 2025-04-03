import { createRouter, createWebHistory } from 'vue-router'

import AdminLayout from "@/layouts/AdminLayout.vue";
import ClientLayout from "@/layouts/ClientLayout.vue";

import adminRouter from "./adminRouter";
import clientRouter from "./clientRouter";

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: "ClientLayout",
    component: ClientLayout, children: [...clientRouter]
  }, {
    path: '/admin',
    name: "AdminLayout",
    component: AdminLayout, children: [...adminRouter]
  },],
  scrollBehavior() {
    return { top: 0 };
  },
})


export default router