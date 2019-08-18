<template>
  <nav class="navbar navbar-light mb-2" style="background-color: #000000">
    <RouterLink class="navbar-brand mb-0 h1 font-weight-bolder text-danger" to="/">まだ140字もつぶやいてんの？</RouterLink>
    <button
      v-if="!isLogin"
      type="button"
      class="btn btn-info btn-sm mb-2 float-sm-left"
      @click="kiyaku()"
    >
      <small>利用規約・プライバシーポリシー・お問い合わせ</small>
    </button>
    <!-- ログイン時にはフォームとログアウトボタンを表示 -->
    <div v-if="isLogin" key="login" class="float-sm-right">
      <img :src="loginUser.photoURL" width="40" height="40" hspace="10" />
      <button type="button" class="btn btn-warning" @click="logout()">Logout</button>
    </div>
    <!-- 未ログイン時にはログインボタンを表示 -->
    <!-- <div v-else key="logout" class="float-sm-right">
      <button type="button-danger" class="btn btn-warning" @click="doLogin">Twitter Login</button>
    </div>-->
  </nav>
</template>

<script>
var firebase = require("firebase");
import fb from "../firebase";

export default {
  name: "Logout",
  // props: ["isLogin", "loginUser"],
  methods: {
    // ログアウト
    logout() {
      var vm = this;
      if (!firebase.auth().currentUser) {
        alert("ログインしてください。");
        return;
      }
      firebase
        .auth()
        .signOut()
        .then(function(res) {
          console.log("signOut", res);
          vm.$router.go();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    kiyaku() {
      fb.kiyaku();
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    loginUser() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
}
</style>
