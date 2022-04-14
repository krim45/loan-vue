<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
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
