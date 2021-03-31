<template>
  <div id="slider">
    <div v-for="(color, index) in sliders" :key="color" class="slider-content">
      <transition name="fade">
        <div
          v-if="currentSlide === index"
          :class="color"
          style="height: 600px"
        ></div>
      </transition>
    </div>

    <div class="dots">
      <div class="dots-content">
        <div
          v-for="(slider, index) in sliders"
          @click="makeActive(index)"
          :key="slider"
          :class="currentSlide === index ? 'bg-dark' : 'bg-light'"
          class="dot"
        ></div>
      </div>
    </div>

    <div class="slider-text">
      <div class="text-box">
        <transition name="fade">
          <h3 v-if="isTitleShowing">Slider color</h3>
        </transition>

        <button @click="isTitleShowing = !isTitleShowing" class="btn btn-dark">
          Toggle Text
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: [
        "bg-primary",
        "bg-secondary",
        "bg-success",
        "bg-danger",
        "bg-warning",
        "bg-info ",
        "bg-light",
        "bg-dark",
      ],
      interval: "",
      isTitleShowing: true,
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      // console.log("I am changing current slide", this.currentSlide);
      this.currentSlide = this.currentSlide === 7 ? 0 : this.currentSlide + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
#slider {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
}
.slider-content {
  width: 100%;
  position: absolute;
  z-index: 20;
}
.slider-text {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px;
  text-align: center;
}
.text-box {
  position: absolute;
  top: 650px;
  z-index: 40;
}
.dots {
  width: 100%;
  height: 570px;
}
.dots-content {
  position: absolute;
  bottom: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  width: 100%;
}
.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 8px;
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>