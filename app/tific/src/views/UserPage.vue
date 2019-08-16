<template>
  <div class="container">
    <User
      :key="user.name"
      :item="user"
    />
    <Cry
    v-for="cry in cries"
    :key="cry.id"
    :item="cry"
    />
  </div>

</template>


<script>
</script>

<style scoped>
.user-body {
  height: 200px;
}
.icon-img {
  width: 75px;
}
</style>