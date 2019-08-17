import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import firebase from 'firebase'
//import store from './store'

//ページコンポーネント
//import TIFICList from './views/TIFICList.vue'
//import Home from './views/Home.vue'
import Postlist from './components/Postlist.vue'
//import Search from './views/Search.vue'
//import Login from './views/Login.vue'
//import myTIFICList from './views/myTIFICList.vue'


//import store from './store'

//VueRouterプラグインを使用する
Vue.use(VueRouter);
Vue.use(BootstrapVue);

//マッピング
const routes = [
  {
    path: '/',
    component: Postlist,
  },
  // {
  //   path: '/login',
  //   component: Login,
  //   props: true,
  // },
];

//VueRouterインスタンス作成
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   // ルート認証があるかチェック
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     var docchi = store.state.isLogin
//     console.log(docchi)
//     // ユーザログ
//     if (!store.state.isLogin) {
//       next({
//         path: '/login'
//       })
//     } else {
//       next({
//         path: '/'
//       }
//       )
//     }
//   } else {
//     // ルートの認証を設定していない場合はこっち
//     next()
//   }

// });


//VueRouterインスタンスエクスポート
//app.jsでインポート
export default router;
