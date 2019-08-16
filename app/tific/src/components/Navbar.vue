<template>
  <nav class="navbar navbar-light mb-2" style="background-color: #000000">
    <RouterLink class="navbar-brand mb-0 h1 font-weight-bolder text-danger" to="/">
      まだ140字もつぶやいてんの？
    </RouterLink>
    <button type="button" class="btn btn-info btn-sm mb-2 float-sm-left"><small>利用規約・プライバシーポリシー・お問い合わせ</small></button>
      <!-- ログイン時にはフォームとログアウトボタンを表示 -->
    <div v-if="isLogin" key="login" class="float-sm-right">
      <img :src="loginUser.photoURL" width="40" height="40" hspace="10">
      <button type="button" class="btn btn-warning " @click="doLogout">Logout</button>
    </div>
    <!-- 未ログイン時にはログインボタンを表示 -->
    <div v-else key="logout" class="float-sm-right">
      <button type="button-danger" class="btn btn-warning " @click="doLogin">Twitter Login</button>
    </div>
  </nav>
</template>

<script>
import fb from '../firebase'


export default {
  components: {
  },
  data () {
    return {
      user: {},
      showForm: false
    }
  },
  computed: {
    isLogin () {
      return this.$store.getters.isLogin
    },
    loginUser () {
      return this.$store.getters.user
    }
  },
  methods: {
    // ログイン処理
    doLogin() {
      fb.login()
    },
    // ログアウト処理
    doLogout() {
      fb.logout()
    },
  }
}
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
}
</style>
