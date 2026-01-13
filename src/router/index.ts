import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "./types";

import mainRoutes from './routes'

// import { getCookie } from '/@/utils/auth/cookie'
// import store from '/@/store'

const routes: RouteRecordRaw[] = [
  ...mainRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;