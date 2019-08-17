<template>
  <div class="home-app">
    <Login v-if="!isLogin"></Login>
    <Postlist v-if="isLogin"></Postlist>
  </div>
</template>

<script>
import Login from "../components/Login";
import Postlist from "../components/Postlist";

export default {
  name: "home",
  components: {
    Login,
    Postlist
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    loginUser() {
      return this.$store.getters.user;
    }
    // auth_changed() {
    //   firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       // User is signed in.
    //       console.log("auth user", user);
    //     } else {
    //       // No user is signed in.
    //     }
    //   });
    // }
  }
};
</script>

<style scoped>
</style>