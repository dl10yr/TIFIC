<template>
  <div class="card w-100">
    <div class="card-body ">
      <div class="card-item">
        <img :src="item.icon" width="48" height="48" hspace="10">
      </div>
      <div class="card-item">
        <div class="item-content">
          <h6>{{ item.content }}</h6>
        </div>
        <a @click.stop :href="`https://mobile.twitter.com/search?q=${item.name}&f=user`">
          <small>{{ item.name }}&nbsp;&nbsp;&nbsp;</small>
        </a>
        <small>
          {{ item.created_at | moment }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).fromNow()
    }
  }
}
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

.card-body {
  padding: 5px;
  min-width: 288px;
}
.card-item {
  display: inline-block;
  vertical-align: top;
  max-width: 70%;
}



.item-content {
  width: 100%;
}

img {
  border-radius: 50%;
}


</style>