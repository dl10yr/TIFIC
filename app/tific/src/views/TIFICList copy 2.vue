<template>
    <div class="columns">
      <div class="column is-8">
        <TIFICForm v-if="isLogin" />
        <pull-to @infinite-scroll="loadmore">
          <TIFIC
            v-for="TIFIC in TIFICs"
            :item="TIFIC"
            :key="TIFIC.uid"
          />
          <div class="loading-bar">
          <svg class="icon icon-loading"
            aria-hidden="true">
          <use xlink:href="#icon-loading"></use>
          </svg>
          Loading...
          </div>
        </pull-to>
      </div>
    </div>

</template>

<script>
  import firebase from 'firebase'
  import TIFIC from "../components/TIFIC.vue"
  import TIFICForm from "../components/TIFICForm.vue"
  import moment from 'moment'
  import PullTo from 'vue-pull-to'

  export default {
    components: {
      TIFIC,
      TIFICForm,
      PullTo
    },
    data () {
      return {
        TIFICs: [],
        loading: true
      }
    },
    created () {
      firebase.firestore().collection('tifics').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          let data = {
            'content': doc.data().content,
            'icon': doc.data().icon,
            'name': doc.data().name,
            'created_at': moment(doc.data().created_at.toDate())
          }
          this.TIFICs.push(data)
        })
      })
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
      loadmore(){
        firebase.firestore().collection('tifics').get().then((querySnapshot) => {
          this.loading = false
          querySnapshot.forEach((doc) => {
            let data = {
              'content': doc.data().content,
              'icon': doc.data().icon,
              'name': doc.data().name,
              'created_at': moment(doc.data().created_at.toDate())
            }
            this.TIFICs.push(data)
          })
        })
      }

    },

  }

</script>

<style scoped rel="stylesheet/less" lang="less">
  .loading-bar {
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
  .icon-loading {
    transform: rotate(0deg);
    animation-name: loading;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes loading
  {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
</style>