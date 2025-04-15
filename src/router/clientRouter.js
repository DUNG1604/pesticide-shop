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
    {
        path: 'products',
        name: 'products',
        component: () => import('@/pages/products/index.vue')
      },
      {
        path: 'products/:id',
        name: 'product-detail',
        component: () => import('@/pages/products/[id].vue')
      }
]

export default clientRouter