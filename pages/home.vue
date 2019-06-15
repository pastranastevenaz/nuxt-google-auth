<template>
  <div class="container">

    <p>Welcome: {{ authenticatedUser }}!</p>

  </div>
</template>
<script>
import firebase from 'firebase'
export default{
  data(){
    return{
      myUser: 'steve',
    }
  },
  computed: {
    authenticatedUser(){
      return firebase.auth().currentUser.name;
    }
  },
  mounted(){

    console.log(firebase.auth().currentUser);
    this.userName = firebase.auth().currentUser.name;

     // console.log('Signed in as ' + isSignedIn);
  }
}
</script>
