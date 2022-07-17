import config from "../config";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Signin from "~/pages/Signin";

const publicRoutes = [
  { path: config.router.home, component: Home },
  { path: config.router.detail, component: Detail },
  { path: config.router.signin, component: Signin, layout: null },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
