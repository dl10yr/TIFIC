<template>
<RouterLink class="card mb-3 w-75"
:to="`/users/${item.name}`"
>
  <div class="row no-gutters">
    <div class="icon-img">
      <img src="images/notepc-wp.jpeg" class="card-img" alt="...">
    </div>
    <div class="col-lg-6">
      <div class="card-body">
        <h4 class="card-title">{{item.name}}</h4>
        <p class="card-text">item.profile</p>
        <p class="card-text">
          Follow:
          <a @click.stop :href="`/users/${item.name}/following`">
            item.following_number
          </a>
          Followed:
          <a @click.stop :href="`/users/${item.name}/followed`">
            item.follower_number
          </a>
        </p>

        <form @click.stop @submit.prevent="follow">
          <button type="submit" class="btn btn-warning">
            フォローする
          </button>
        </form>
        <form @click.stop @submit.prevent="unfollow">
          <button type="submit" class="btn btn-warning" value="delete">
            フォロー解除する
          </button>
        </form>

      </div>
    </div>
  </div>
</RouterLink>
</template>

<script>
</script>

<style scoped>
.card {
  cursor: pointer,
}

a.card  {text-decoration: none}
a:link.card  { color : #000000 }
a:visited.card  { color : #000000 }

.card :hover {
  background-color: #f5f5f5
}

.user-body {
  height: 200px;
}
.icon-img {
  width: 75px;
}



</style>