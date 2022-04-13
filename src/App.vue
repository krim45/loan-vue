<template>
  <router-view
    v-model:loan="loan"
    v-model:duration="duration"
    :formatPrice="formatPrice"
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
  computed: {
    formatPrice() {
      let result = "";
      let price = this.loan * 1000000;

      if (price >= 100000000) {
        result += Math.floor(price / 100000000) + "억";
        price %= 100000000;
      }
      if (price >= 10000) {
        result += Math.floor(price / 10000) + "만원";
        price %= 10000;
      }
      return result;
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
