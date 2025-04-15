const clientRouter = [
    {
        path: '',
        name: "HomeClient",
        component: () => import("@/pages/client/HomePage.vue"),
    },
    {
        path: ':id',
        name: "Detail",
        component: () => import("@/pages/client/detailProduct/Page.vue"),
    },
    {
        path: 'cart',
        name: "Cart",
        component: () => import("@/pages/client/cart/Page.vue"),
    },
    {
        path: 'profile',
        name: "Profile",
        component: () => import("@/pages/profile/Profile.vue"),
    },
    {
        path: 'settings',
        name: "Settings",
        component: () => import("@/pages/profile/Settings.vue"),
    },
]

export default clientRouter