<template>
  <pull-to :top-load-method="refresh" @top-state-change="stateChange" @infinite-scroll="loadmore">
    <template slot="top-block" slot-scope="props">
      <div class="top-load-wrapper">
        <svg
          class="icon"
          :class="{
                'icon-arrow': props.state === 'trigger',
                'icon-loading': props.state === 'loading'
             }"
          aria-hidden="true"
        >
          <use :xlink:href="iconLink" />
        </svg>
        {{ props.stateText }}
      </div>
    </template>
    <ul class="list">
      <li v-for="post in posts" :key="post.uid">
        <div class="li-body">
          <div class="li-item">
            <img :src="post.icon" width="48" height="48" hspace="10" />
          </div>
          <div class="li-item">
            <div class="item-content">
              <h6>{{ post.content }}</h6>
            </div>
            <a @click.stop :href="`https://mobile.twitter.com/search?q=${post.name}&f=user`">
              <small>{{ post.name }}&nbsp;&nbsp;&nbsp;</small>
            </a>
            <small>{{ post.created_at | moment }}</small>
          </div>
        </div>
      </li>
    </ul>
    <div class="loading-bar"></div>
    <button class="btn btn-info btn-refresh" @click="refresh">Refresh!</button>
  </pull-to>
</template>

<script type="text/babel">
import firebase from "firebase";
import moment from "moment";
import PullTo from "vue-pull-to";

export default {
  components: {
    PullTo
  },
  data() {
    return {
      posts: [],
      loading: true,
      iconLink: "",
      start_date: null,
      end_date: null,
      counter: 0
    };
  },
  created() {
    firebase
      .firestore()
      .collection("tifics")
      .orderBy("created_at", "desc")
      .limit(10)
      .get()
      .then(querySnapshot => {
        this.loading = false;
        this.counter = 0;
        querySnapshot.forEach(doc => {
          let data = {
            content: doc.data().content,
            icon: doc.data().icon,
            name: doc.data().name,
            created_at: moment(doc.data().created_at.toDate())
          };
          this.posts.push(data);
          if (this.counter == 0) {
            this.start_date = doc.data().created_at;
          }
          this.counter = this.counter + 1;
          this.end_date = doc.data().created_at;
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
    loadmore() {
      firebase
        .firestore()
        .collection("tifics")
        .where("created_at", "<", this.end_date)
        .orderBy("created_at", "desc")
        .limit(7)
        .get()
        .then(querySnapshot => {
          this.loading = false;
          querySnapshot.forEach(doc => {
            let data = {
              content: doc.data().content,
              icon: doc.data().icon,
              name: doc.data().name,
              created_at: moment(doc.data().created_at.toDate())
            };
            this.posts.push(data);
            this.end_date = doc.data().created_at;
          });
        });
    },

    refresh(loaded) {
      firebase
        .firestore()
        .collection("tifics")
        .where("created_at", ">", this.start_date)
        .orderBy("created_at", "asc")
        .get()
        .then(querySnapshot => {
          this.loading = false;
          querySnapshot.forEach(doc => {
            let data = {
              content: doc.data().content,
              icon: doc.data().icon,
              name: doc.data().name,
              created_at: moment(doc.data().created_at.toDate())
            };
            this.posts.unshift(data);
            this.start_date = doc.data().created_at;
          });
        });
      loaded("done");
    },
    stateChange(state) {
      if (state === "pull" || state === "trigger") {
        this.iconLink = "#icon-arrow-bottom";
      } else if (state === "loading") {
        this.iconLink = "#icon-loading";
      } else if (state === "loaded-done") {
        this.iconLink = "#icon-finish";
      }
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).fromNow();
    }
  }
};
</script>

<style scoped rel="stylesheet/less" lang="less">
.loading-bar {
  height: 40px;
  text-align: center;
  line-height: 40px;
}

.top-load-wrapper {
  line-height: 20px;
  text-align: center;
}
.icon-arrow {
  transition: 0.2s;
  transform: rotate(180deg);
}
.icon-loading {
  transform: rotate(0deg);
  animation-name: loading;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

li {
  cursor: pointer;
}

a.li {
  text-decoration: none;
}
a:link.li {
  color: #000000;
}
a:visited.li {
  color: #000000;
}

li :hover {
  background-color: #f5f5f5;
}

.li-body {
  padding: 5px;
  min-width: 288px;
}
.li-item {
  display: inline-block;
  vertical-align: top;
  max-width: 75%;
}
.item-content {
  width: 100%;
}

img {
  border-radius: 50%;
}

.btn-info {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  transform: translate3d(0, 0, 0);
}
</style>