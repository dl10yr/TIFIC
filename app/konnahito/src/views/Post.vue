<template>
  <div class="view-area">
    <!-- <div class="img-area">
      <img :src="post.imageurl">
      <div class="post-content">
        <p>投稿者: {{post.user_name}} </p>
        <p>投稿日時: {{post.created_at | moment}} </p>
        <p>{{post.where}}で、</p>
        <p>{{post.who}}を見た。</p>
      </div>
    </div> -->
    <div class="card border border-white" style="width:100%">
      <img class="card-img-top" :src="post.imageurl" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title" style="font-weight:bold" >{{post.where}}で、</h5>
        <h5 class="card-title" style="font-weight:bold" >{{post.who}}を見た。</h5>
        <small class="card-text">投稿者: {{post.user_name}}</small><br>
        <small class="card-text">投稿日時: {{post.created_at | moment}} </small>        
      </div>
    </div>
    <div class="buttons">
      <a href="/" class="btn btn-dark">twitterで共有する</a>
      <a href="/posts" class="btn btn-dark">他の投稿を見る</a>
      <a href="/" class="btn btn-dark">投稿する</a>
    </div>
  </div>
</template>

<script type="text/babel">
import firebase from "firebase";
import moment from "moment";

const db = firebase.firestore()
export default {
  data() {
    return {
      post: "",
      loading: true,
      counter: 0
    };
  },
  created() {
    firebase
      .firestore()
      .collection("cards")
      .where("post_id", "==", this.$route.params['post_id'])
      .get()
      .then(querySnapshot => {
        this.loading = false;
        this.counter = 0;
        querySnapshot.forEach(doc => {
          let data = {
            who: doc.data().who,
            where: doc.data().where,
            user_name: doc.data().user_name,
            created_at: moment(doc.data().created_at.toDate()),
            imageurl: doc.data().imageurl
          };
          this.post = data;
        });
      });
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    loginUser() {
      return this.$store.getters.user;
    }
  },
  methods: {
  },
  filters: {
    moment: function(date) {
      return moment(date).fromNow();
    }
  }
};
</script>

<style scoped rel="stylesheet/less" lang="less">
img {
  width: 100%;
}
.img-area{
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
}
.view-area{
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
}
.buttons{
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.btn-dark{
  margin-top: 20px;
}
</style>
