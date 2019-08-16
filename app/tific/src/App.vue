<template>
  <div class="app">
    <Navbar />
    <Postform v-if="isLogin" />
    <div class="view-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Postform from "./components/Postform.vue";

export default {
  components: {
    Navbar,
    Postform
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

<style scoped>
.app {
  background: #f6f6f6;
  height: 100%;
}
</style>

<style rel="stylesheet/less" lang="less">
html,
body {
  height: 100%;
  overflow: hidden;
}
ul {
  list-style: none;
  padding-left: 0px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.list {
  li:nth-child(even) {
    background: #eee;
  }
  li {
    background: #fff;
    a {
      display: inline-block;
      height: 100%;
    }
    .icon-arrow {
      display: inline-block;
      margin-right: 15px;
      height: 100%;
      width: 20px;
      color: #444;
    }
  }
}
.view-wrapper {
  box-sizing: border-box;
  padding-top: 20px;
  height: 65%;
  background: #f6f6f6;
  margin-top: 0px;
}
</style>