import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//ページコンポーネント
import TIFICList from './views/TIFICList.vue'
//import myTIFICList from './views/myTIFICList.vue'


//import store from './store'

//VueRouterプラグインを使用する
Vue.use(VueRouter);
Vue.use(BootstrapVue);

//マッピング
const routes = [
  {
    path: '/',
    component: TIFICList
  },
  // {
  //   path: '/search',
  //   component: Search,
  //   props: true,
  // },
];

//VueRouterインスタンス作成
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

//VueRouterインスタンスエクスポート
//app.jsでインポート
export default router;
  