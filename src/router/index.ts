import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "./types";
// static modules
import mainRoutes from './routes'

// import { getCookie } from '/@/utils/auth/cookie'
// import store from '/@/store'

const routes: RouteRecordRaw[] = [
  ...mainRoutes
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;