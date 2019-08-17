import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        isLogin: false,
        isKiyaku: false,
    },
    mutations: {
        setUser(state, user) {
            state.user = user; //firebaseが返したユーザー情報
        },
        setLogin(state, isLogin) {
            state.isLogin = isLogin; //ログインしてるかどうか true or false
        },
        setKiyaku(state, isKiyaku) {
            state.isKiyaku = isKiyaku;
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        isLogin(state) {
            return state.isLogin;
        },
        isKiyaku(state) {
            return state.isKiyaku;
        }
    }
});
