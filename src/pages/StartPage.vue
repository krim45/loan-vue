<template>
  <h3 class="top3">대출을 신청할게요</h3>
  <img
    class="money-wings"
    src="https://static.toss.im/3d/money-wings-confetti-apng.png"
  />
  <NextButton path="/limit-check">다음</NextButton>
</template>

<script>
import NextButton from "@/components/NextButton.vue";

export default {
  components: { NextButton },
};
</script>

<style scoped>
.money-wings {
  display: block;
  width: 300px;
  height: 300px;
  margin: 60px auto;
}
</style>