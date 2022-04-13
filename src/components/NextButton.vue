<template>
  <div class="container">
    <div class="button-container">
      <!-- <button class="next-button" @click="goToNext">{{ text }}</button> -->
      <button class="next-button" @click="goToNext">
        <slot />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["path"],
  data() {
    return {};
  },
  methods: {
    goToNext() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.button-container {
  padding: 0 20px 18px;
}

.next-button {
  color: #fff;
  background: #3182f6;
  width: 100%;
  height: 56px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 16px;
  border: none;
  -webkit-font-smoothing: antialiased;
  transition: 0.3s ease-in-out;
}

.next-button:focus {
  outline: none;
}

.next-button:disabled {
  opacity: 0.25;
  cursor: not-allowed;
}

.next-button:active {
  background: #1b64da;
}
</style>