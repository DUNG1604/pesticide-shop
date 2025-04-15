import { createRouter, createWebHistory } from 'vue-router'

import AdminLayout from "@/layouts/AdminLayout.vue";
import ClientLayout from "@/layouts/ClientLayout.vue";

import adminRouter from "./adminRouter";
import clientRouter from "./clientRouter";

const routes = [
  {
    path: '/',
    name: "ClientLayout",
    component: ClientLayout, 
    children: [...clientRouter]
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('@/pages/auth/Login.vue')
  },
  {
    path: '/auth/register',
    name: 'register',
    component: () => import('@/pages/auth/Register.vue')
  },
  {
    path: '/admin',
    name: "AdminLayout",
    component: AdminLayout, 
    children: [...adminRouter]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
})

export default router