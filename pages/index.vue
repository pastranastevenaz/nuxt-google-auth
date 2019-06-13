<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        webhost
      </h1>
      <h2 class="subtitle">

      </h2>
      <button outline fab @click="googleSignIn" color="#4285F4">Sign in</button>

      <div class="links">
        <a
          @click="googleSignIn"
          target="_blank"
          class="button--green"
        >Sign in</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapFields } from 'vuex-map-fields';
// import {mapGetters} from 'vuex'

import Logo from '~/components/Logo.vue'
import firebase from 'firebase'
import {mapActions,mapGetters} from 'vuex';

export default {
  components: {
    Logo
  },
  computed: {
    uName(){
      return this.$store.getters.user
    }
  },
  mounted() {
    //do something after mounting vue instance
    console.log("User is: " + this.uName);
  },
  methods:{
    updateUser: function (){
      this.$store.dispatch('changeUser', 'Sedi');
    },
    googleSignIn () {
        this.provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          // store the user ore wathever
          var token = result.credential.accessToken;
          var user = result.user;

          this.uName = result.user;
          this.$store.dispatch('changeUser', result.user);
          this.$router.push('/home')
        }).catch(e => {
          // this.$snotify.error(e.message)
          console.log(e)
        })
      }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
