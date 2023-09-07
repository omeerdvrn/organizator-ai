const routes = [
   {
      path: '/',
      name: 'main',
      component: () => import('../views/Home.vue'),
      props: false,
  },
  {
   path: '/chat',
   name: 'chat',
   component: () => import('../views/Chat.vue'),
   props: false
  }
]

export default routes