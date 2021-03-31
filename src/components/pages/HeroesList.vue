<template>
  <div id="wrapper">
    <h1>
      What do I need to do...Reminder
      <span class="num-to-do">{{ herosCount }}</span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="hero in heroes" v-bind:key="hero.name">
        <div>
          {{ hero.name }}
        </div>
        <button class="btn btn-secondary" @click="remove(index)">x</button>
      </li>
    </ul>
    <form @submit.prevent="addHero" class="hero-form">
      <input type="text" v-model="newHero" placeholder="Type new Hero" />
      <button class="btn btn-warning add" type="submit">Add New</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newHero: "",
      heroes: [
        { name: "Make an appointment" },
        { name: "Go shopping" },
        { name: "Read a book" },
        { name: "Watch a movie" },
        { name: "Go to training" },
      ],
    };
  },
  methods: {
    addHero() {
      if (this.newHero === "") return;
      this.heroes.unshift({ name: this.newHero });
      this.newHero = "";
    },
    remove(index) {
      console.log(this.heroes.splice(index, 1));
    },
  },
  computed: {
    herosCount() {
      return this.heroes.length;
    },
  },
};
</script>

<style>
#wrapper {
  width: 70%;
  margin: 10% auto;
  height: 100vh;
}
#wrapper h1 {
  text-align: center;
  margin-bottom: 50px;
  font-size: 3rem;
  font-weight: 800;
}
.list-group-item,
.hero-form {
  display: flex;
  justify-content: space-between;
}
.hero-form {
  margin-top: 50px;
  font-size: 1rem;
}
.add {
  margin-left: 5px;
}
.hero-form input {
  width: 85%;
  border-radius: 12px;
  border: none;
  outline: none;
  background-color: #ccc;
  padding: 8px 20px;
}
.num-to-do {
  color: #e4a404;
}
</style>