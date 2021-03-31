<template>
  <div id="calendar">
    <h1>Calendar</h1>
    <section class="month">
      <h2>{{ currentMonthName }}</h2>
      <h2>{{ currentYear }}</h2>
    </section>
    <section class="days">
      <p class="calendar-item" v-for="day in days" :key="day">{{ day }}</p>
    </section>
    <section class="days-num">
      <p class="calendar-item" v-for="num in startDay()" :key="num"></p>
      <p
        class="calendar-item"
        v-for="num in dayInMonth(currentYear, currentMonth)"
        :key="num"
        :class="currentDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="calendar-btns">
      <button class="btn btn-dark" @click="prev">Prev</button>
      <button class="btn btn-dark" @click="next">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    dayInMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();

      return calendarFullDate === currentFullDate ? "date-style" : "";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>

<style>
#calendar {
  width: 70%;
  margin: 10% auto;
  height: 100vh;
}
#calendar h1 {
  text-align: center;
  margin-bottom: 50px;
  font-size: 3rem;
  font-weight: 800;
}
.days {
  display: flex;
  margin-bottom: 5px;
}
.days-num {
  display: flex;
  flex-wrap: wrap;
}
.calendar-item {
  width: 14.28%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
}
.month,
.calendar-btns {
  display: flex;
  justify-content: space-between;
  margin: 5px 20px;
}
.month h2 {
  font-weight: 600;
  font-size: 1.8rem;
}
.date-style {
  color: hsl(12, 85%, 63%);
  font-weight: 800;
}
</style>