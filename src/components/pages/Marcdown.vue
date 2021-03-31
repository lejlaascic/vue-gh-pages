<template>
  <div id="marcdown">
    <h1>Marcdown app</h1>
    <section class="marc">
      <article class="article left">
        <textarea class="text-field" :value="text" @input="update"></textarea>
      </article>
      <article class="article right" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      text: "",
      timeout: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
    debounce(func, wait = 1000) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(func, wait);
    },
  },
};
</script>

<style>
#marcdown h1 {
  text-align: center;
}
.marc {
  display: flex;
  flex: 1;
}
article {
  width: 50%;
  height: 90vh;
  padding: 20px;
  font-size: 1.1rem;
  overflow: hidden;
}
.left {
  background-color: #f9f9f9;
  border: 1px solid #999;
}
.right {
  background-color: #ccc;
  border: 1px solid #999;
}
.text-field {
  width: 100%;
  height: 90vh;
  border: none;
  outline: none;
}
</style>