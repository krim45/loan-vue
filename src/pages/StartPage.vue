<template>
  <h3 class="top2">대출을 신청할게요</h3>
  <img class="money-wings" src="https://static.toss.im/3d/money-wings-confetti-apng.png"/>
  <NextButton path="/limit-check" text="다음"></NextButton>
</template>

<script>
import NextButton from '@/components/NextButton.vue'

export default {
  components: { NextButton },
}
</script>

<style>
.top2 {
  white-space: pre-line;
  font-weight: bold;
  color: #191f28;
  padding: 0 24px;
  padding-top: 24px;
  font-size: 26px;
  line-height: 35px;
  word-break: keep-all;
}

.money-wings {
  display: block;
  width: 300px;
  height: 300px;
  margin: 60px auto;
}
</style>