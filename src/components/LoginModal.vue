<template>
  <section @click="close" id="login"></section>
  <div class="login-content">
    <div class="login-content-item">
      <div class="login">
        <h1>Login</h1>

        <form class="login-form" @submit.prevent="submit">
          <label for="email">Email or Username</label>
          <input v-model="email" type="text" name="email" />

          <label for="psw">Password</label>
          <input v-model="password" type="password" name="psw" />

          <button type="submit" class="login-form-btn">
            <span v-if="!isLoading">Login</span>
            <span
              v-else
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          </button>
        </form>
        <GoogleLogin @close-login-from-google="close" />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import GoogleLogin from "./login/GoogleLogin";
export default {
  components: {
    GoogleLogin,
  },

  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.isLoading = false;
          this.close();
        })
        .catch(() => {
          this.error = "";
          this.isLoading = false;
        });
    },
    close() {
      this.$emit("close-login");
    },
  },
};
</script>

<style>
#login {
  height: 100vh;
  background-color: #ccc;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  opacity: 0.5;
}
.login-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.login-content-item {
  display: flex;
  height: 100vh;
}
.login {
  margin: auto;
  padding: 12px 24px;
  border: none;
  outline: none;
  background-color: #e7b128;
  border-radius: 20px;
  cursor: pointer;
  width: 40%;
  z-index: 30;
  box-shadow: 0px 0px 17px 1px rgba(0, 0, 0, 0.75);
}
.login h1 {
  text-align: center;
}
.login-form {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
}
.login-form label {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
}
.login-form input {
  width: 100%;
  padding: 8px 24px;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-bottom: 10px;
}
.login-form-btn,
.google-login-btn {
  border: none;
  outline: none;
  background-color: #ccc;
  border-radius: 12px;
  font-size: 1.1rem;
  margin-top: 20px;
  padding: 8px 12px;
}
.google-login-btn {
  width: 85%;
  margin: auto;
  margin-bottom: 20px;
}
.login-form-btn:hover,
.google-login-btn:hover {
  background-color: #666;
  color: #fff;
}
.login-btn {
  padding: 12px 24px;
  border: none;
  outline: none;
  background-color: #f3c040;
  margin: 0 10px;
  border-radius: 12px;
}
.login-btn:hover {
  opacity: 0.5;
}
.google-login div {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.google-login-content p {
  text-align: center;
}
</style>