import AdminLayout from "@/layouts/AdminLayout.vue";
import ClientLayout from "@/layouts/ClientLayout.vue";

import adminRouter from "./adminRouter";
import clientRouter from "./clientRouter";

const routes = [{
    path: '/',
    name: "ClientLayout",
    component: ClientLayout, children: [...clientRouter]
}, {
    path: '/admin',
    name: "AdminLayout",
    component: AdminLayout, children: [...adminRouter]
},]

export default routes