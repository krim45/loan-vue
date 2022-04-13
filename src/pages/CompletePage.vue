<template>
  <TheHeader />
  <h3 class="top3">대출이 완료됐어요!</h3>
  <img
    class="complete-img"
    src="https://static.toss.im/3d-emojis/u1F389_apng.png"
  />
  <NextButton path="/start">확인</NextButton>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import NextButton from "@/components/NextButton.vue";
export default {
  components: { TheHeader, NextButton },
};
</script>

<style>
.complete-img {
  display: block;
  margin: 60px auto;
  width: 200px;
  height: 200px;
}
</style>