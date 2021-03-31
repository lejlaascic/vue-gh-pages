<template>
  <section class="google-login">
    <div class="google-login-content">
      <p>or</p>
      <button @click="loginWithGoogle" class="google-login-btn">
        Login with Google
      </button>
    </div>
  </section>
</template>

<script>
import firebase from "../../utilities/firebase";
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$emit("close-login-from-google");
        });
    },
  },
};
</script>

<style>
</style>