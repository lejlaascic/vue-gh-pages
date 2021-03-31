<template>
  <nav class="navbar navbar-dark bg-dark">
    <router-link
      v-for="item in list"
      :key="item.to"
      class="navbar-brand title"
      v-bind:to="item.to"
      >{{ item.title }}</router-link
    >
    <button v-if="isLoggedIn" @click="logout" class="login-btn">Logout</button>
    <button v-else @click="$emit('open-login-modal')" class="login-btn">
      Login
    </button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  props: { isLoggedIn: Boolean },
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "My To-do", to: "/heroes-list" },
        { title: "Calendar", to: "/calendar" },
        { title: "Marcdown", to: "/marcdown" },
        { title: "Slider", to: "/slider" },
      ],
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((res) => {
          // Sign-out successful.
          console.log(res);
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>

<style>
nav .title {
  font-size: 1.5rem;
  margin-left: 5px;
}
</style>