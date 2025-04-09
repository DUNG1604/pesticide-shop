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
]

export default clientRouter