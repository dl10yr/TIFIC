<template>
    <div class="columns">
      <div class="column is-8">
        <TIFICForm v-if="isLogin" />
        <pull-to :top-load-method="refresh" class="menu-content">
          <TIFIC
            v-for="TIFIC in TIFICs"
            :item="TIFIC"
            :key="TIFIC.uid"
          />
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
      reflesh(loaded){
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
        loaded('done')
      }

    },

  }

</script>

<style lang="scss" scoped>

    .menu-content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 0;
        margin-top: 45px;
        margin-bottom: 45px;
    }

</style>