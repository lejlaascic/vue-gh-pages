<template>
  <div id="home">
    <img :src="background" />
    <h1>Welcome</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      background:
        "https://images.unsplash.com/photo-1612831197315-3e16a8fccd3c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1405&q=80",
    };
  },
};
</script>

<style>
#home img {
  position: absolute;
  top: 64px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
}
#home h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ccc;
  font-size: 4rem;
  letter-spacing: 4px;
  font-weight: bold;
  z-index: 20;
}
</style>