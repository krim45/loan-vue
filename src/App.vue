<template>
  <router-view
    :loan="loan"
    :duration="duration"
    @update-loan="updateLoan"
    @update-duration="updateDuration"
  ></router-view>
</template>

<script>
import { setItem, getItem } from "@/utils/localStorage";
export default {
  name: "App",
  data() {
    return {
      loan: getItem("loan") || 50,
      duration: getItem("duration") || 30,
    };
  },
  methods: {
    updateLoan(value) {
      console.log("parents", value);
      this.loan = value;
    },
    updateDuration(value) {
      this.duration = value;
    },
  },
  watch: {
    loan() {
      setItem("loan", this.loan);
    },
    duration() {
      setItem("duration", this.duration);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

body {
  font-family: BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
}

.top3 {
  white-space: pre-line;
  font-weight: bold;
  color: #191f28;
  padding: 0 24px;
  padding-top: 24px;
  font-size: 26px;
  line-height: 35px;
  word-break: keep-all;
}
</style>
