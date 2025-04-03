const clientRouter = [
    {
        path: '',
        name: "HomeClient",
        component: () => import("@/pages/client/HomePage.vue"),
    },
]

export default clientRouter