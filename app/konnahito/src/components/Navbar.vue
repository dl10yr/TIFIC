<template>
  <nav class="navbar navbar-light mb-2" style="background-color: #ffffff">
    <RouterLink class="navbar-brand mb-0 h1 font-weight-bolder text-black" to="/">観察記録2.0</RouterLink>
    <RouterLink to="/posts" class="navbar-icon">
      <img alt="Vue logo" src="../assets/normal.png" width="40" height="40">
    </RouterLink>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
}

.navbar-icon{
}
</style>