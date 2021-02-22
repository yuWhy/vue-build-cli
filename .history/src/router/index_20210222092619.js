import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'hash',
  routes: [
    {
      path: "/hello",
      name: 'hello',
      component: () => import('../components/hello.vue')
    }, {
      path: "/login",
      name: 'login',
      component: () => import('../components/login.vue')
    }, {
      path: "/vueBuild",
      name: 'vueBuild',
      component: () => import('../components/vue-build.vue')
    }, {
      path: "/hightOrderComponents",
      name: 'hightOrderComponents',
      component: () => import('../pages/HightOrderComponents/index.vue')
    }
  ]
})

// 可以两个同级路由tg
// app.vue
// {/* 
//   <router-view name="navbar"></router-view>
//   router-view name="main"></router-view> 
// */}

// 对应路由配置
// import { hello, login } from '../components'
// const router = new VueRouter({
//   router: [
//     {
//       path: '/',
//       components: {
//         navbar: hello,
//         main: login
//       }
//     }
//   ]
// })

export default router