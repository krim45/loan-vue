<template>
  <header class="nav-bar">
    <button class="back-button" @click="goBack">
      <img
        class="back-img"
        src="https://static.toss.im/icons/png/4x/icon-arrow-left-small.png"
        alt="뒤로가기"
      />
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    goBack() {
      history.back();
    },
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  padding: 11px 14px;
}

.back-button {
  border: none;
  background-color: transparent;
}

.back-button:focus {
  outline: none;
}

.back-img {
  width: 30px;
  height: 30px;
}
</style>