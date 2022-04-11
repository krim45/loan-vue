<template>
  <TheHeader />
  <!-- <the-header/> -->
  <h3 class="top3">{{ name }}님의 한도를 조회할게요</h3>
  <div class="process-container">
    <img class="process-img" :src="process[step].src" />
    <span class="process-text">{{ process[step].notice }}</span>
  </div>
  <!-- <NextButton v-if="step === 'complete'" path="/loan-setup" text="확인" /> -->
  <NextButton v-if="step === 'complete'" path="/loan-setup">확인</NextButton>
  <!-- 컴포넌트를 파스칼케이스로 정의하는 경우에는 <next-button/> 또는 <NextButton/> 두 가지 모두 사용 가능 -->
  <!-- <next-button path="/loan-setup" text="확인"/> -->
</template>

<script>
import NextButton from "@/components/NextButton.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: { NextButton, TheHeader },
  data() {
    return {
      name: "김경봉",
      process: {
        pending: {
          src: "https://static.toss.im/3d-emojis/u1F913-apng.png",
          notice: "대출한도를 조회하고 있어요",
        },
        almost: {
          src: "https://static.toss.im/3d-emojis/u1F913-apng.png",
          notice: "대출한도 조회가 거의 끝나가요!",
        },
        complete: {
          src: "/img/complete.png",
          notice: "대출한도 조회가 완료됐어요!",
        },
      },
      step: "pending",
      timer: null,
    };
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.step = "almost";
      this.timer = setTimeout(() => {
        this.step = "complete";
      }, 5000);
    }, 3000);
  },
  unmounted() {
    clearTimeout(this.timer);
  },
};
</script>

<style>
.process-container {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
}

.process-img {
  width: 200px;
  height: 200px;
}

.process-text {
  font-size: 22px;
  color: #191f28;
  margin-top: 15px;
}
</style>