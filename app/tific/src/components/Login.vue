<template>
  <div>
    <h1>
      言葉だけは、
      <br />短い方が刺さる。
    </h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
var firebase = require("firebase");
var firebaseui = require("firebaseui-ja");
require("firebaseui-ja/dist/firebaseui.css");
// import fb from "../firebase";

export default {
  mounted() {
    var ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        //firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID
        //firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    });
  }
};
</script>

<style scoped>
h1 {
  color: #000000; /*文字色*/
  padding: 0.5em 0; /*上下の余白*/
  font-weight: bold;
  font-size: 32px;
  border-top: solid 5px #000000; /*上線*/
  border-bottom: solid 5px #000000; /*下線*/
  margin: 1em;
  text-align: center;
  text-justify: inter-ideograph;
}
</style>