const mainRouter = [
    {
      path: '/',
      name: 'ztts',
      component: () => import('../pages/ztts/ztts.vue'),
    },
    {
      path: '/zhyw',
      name: 'zhyw',
      component: () => import('../pages/zhyw/zhyw.vue'),
    },
    {
      path: '/zhsc',
      name: 'zhsc',
      component: () => import('../pages/zhsc/zhsc.vue'),
    },
    {
      path: '/zhjy',
      name: 'zhjy',
      component: () => import('../pages/zhjy/zhjy.vue'),
    },
    {
      path: '/zhgc',
      name: 'zhgc',
      component: () => import('../pages/zhgc/zhgc.vue'),
    },
    {
      path: '/qyhx',
      name: 'qyhx',
      component: () => import('../pages/qyhx/qyhx.vue'),
    },
]

export default mainRouter