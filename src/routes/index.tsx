import config from "../config";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Signin from "~/pages/Signin";
import Products from "~/layouts/components/Admin/Products";
import AdminLayout from "~/layouts/AdminLayout";
import ProductAdd from "~/layouts/components/Admin/Products/ProductAdd.tsx/ProductAdd";
import ProductEdit from "~/layouts/components/Admin/Products/ProductEdit";

const publicRoutes = [
  { path: config.router.home, component: Home },
  { path: config.router.detail, component: Detail },
  { path: config.router.signin, component: Signin, layout: null },
  {
    path: config.router.productsAdmin,
    component: Products,
    layout: AdminLayout,
  },
  {
    path: config.router.addProduct,
    component: ProductAdd,
    layout: AdminLayout,
  },
  {
    path: config.router.editProduct,
    component: ProductEdit,
    layout: AdminLayout,
  },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
