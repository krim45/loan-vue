<template>
  <TheHeader />
  <h3 class="top3">대출 내용을 확인할게요</h3>
  <ul class="list-contianr">
    <li class="list">
      <span>대출금액</span>
      <span>{{ formatPrice }}</span>
    </li>
    <li class="list">
      <span>상환기한</span>
      <span>{{ duration }}개월</span>
    </li>
  </ul>
  <NextButton path="/complete">확인</NextButton>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import NextButton from "@/components/NextButton.vue";
import { removeItem } from "@/utils/localStorage";
export default {
  components: { TheHeader, NextButton },
  props: ["duration", "formatPrice"],
  mounted() {
    removeItem("loan", "duration");
  },
};
</script>

<style scoped>
.list-contianr {
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin: 16px 0;
}

.list {
  display: flex;
  justify-content: space-between;
}

span {
  color: rgb(25, 31, 40);
  font-size: 20px;
  line-height: 1.5;
}
</style>