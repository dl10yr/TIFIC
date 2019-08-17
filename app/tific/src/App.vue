<template>
  <div class="app">
    <Navbar />
    <Postform v-if="isLogin" />
    <Login v-if="!isLogin"></Login>
    <div v-if="isLogin" class="view-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Postform from "./components/Postform.vue";
import Login from "./components/Login";

export default {
  components: {
    Navbar,
    Postform,
    Login
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
  background: #f6f6f6;
  margin-top: 0px;
}

@media (min-height: 1025px) {
  .view-wrapper {
    height: 85%;
  }
}
@media (max-height: 1025px) and (min-height: 813px) {
  .view-wrapper {
    height: 82%;
  }
}
@media (max-height: 813px) and (min-height: 668px) {
  .view-wrapper {
    height: 65%;
  }
}
@media (max-height: 668px) and (min-height: 568px) {
  .view-wrapper {
    height: 60%;
  }
}
@media (max-height: 568px) {
  .view-wrapper {
    height: 55%;
  }
}
</style>