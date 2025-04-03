const clientRouter = [
    {
        path: '',
        name: "HomeClient",
        component: () => import("@/pages/client/IndexPage.vue"),
    }
]

export default clientRouter