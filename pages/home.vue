<template>
  <div class="container">

    <p>Welcome {{ this.userName }}</p>

  </div>
</template>
<script>
import firebase from 'firebase'
export default{
  data(){
    return{
      userName: 'steve',
    }
  },
  mounted(){

    console.log(firebase.auth().currentUser);
    this.userName = firebase.auth().currentUser.name;
     // console.log('Signed in as ' + isSignedIn);
  }
}
</script>
