<template>
  <TheHeader />
  <h3 class="top3">대출 내용을 설정할게요</h3>
  <div class="setup-container">
    <span class="setup-text">얼마나 빌릴까요? {{ formatPrice }}</span>

    <div class="slider">
      <div class="slider-container">
        <div class="slider-track">
          <div class="slider-progress-container" :style="progressObject">
            <span class="slider-progress-bar"></span>
          </div>
        </div>
        <input
          class="slider-input"
          type="range"
          min="10"
          max="300"
          :value="loan"
          @change="handleLoan"
        />
      </div>

      <div class="slider-label-container">
        <label class="slider-label">1000만원</label>
        <label class="slider-label">3억원</label>
      </div>
    </div>

    <span class="interest-text">{{ noticeInterest }}</span>
    <span class="repayment-duration">몇개월에 걸쳐 상환할까요?</span>
    <div class="repayment-duration-container">
      <select
        class="repayment-duration-selector"
        :value="duration"
        @change="handleDuration"
      >
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <img
        class="arrow-downwards"
        src="https://static.toss.im/icons/svg/icn-arrow-downwards.svg"
        alt="아래 화살표"
      />
    </div>
  </div>

  <NextButton path="/confirmation">확인</NextButton>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import NextButton from "@/components/NextButton.vue";

export default {
  components: { TheHeader, NextButton },
  props: ["loan", "duration"],
  emits: ["update-loan", "update-duration"],
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
    progressObject() {
      return {
        transform: "translateX(" + ((this.loan - 10) / 290) * 100 + "%)",
      };
    },
    noticeInterest() {
      if (this.loan * 1000000 >= 200000000) {
        return "2억원 부터는 이자가 3.5%에요";
      }
      if (this.loan * 1000000 >= 115000000) {
        return "1억1500만원 부터는 이자가 2%에요";
      }
      return "1000만원 부터는 이자가 1.8%에요";
    },
  },
  methods: {
    handleLoan(e) {
      // console.log("child", e.target.value);
      this.$emit("update-loan", e.target.value);
    },
    handleDuration(e) {
      // console.log("child", e.target.value);
      this.$emit("update-duration", e.target.value);
    },
  },
};
</script>

<style>
.setup-container {
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}

.setup-text {
  color: rgb(25, 31, 40);
  font-size: 20px;
  display: inline-block;
  margin-top: 20px;
  max-width: 100%;
  line-height: 1.45;
}

.slider {
  margin-top: 5px;
}

.slider-container {
  position: relative;
  display: block;
  height: 40px;
}

.slider-track {
  position: absolute;
  top: 18px;
  left: 0;
  right: 0;
  height: 5px;
  background: #e5e8eb;
  border-radius: 3px;
  overflow: hidden;
  transform: translateZ(0);
}

.slider-progress-container {
  position: absolute;
  height: 100%;
  left: 18px;
  right: 18px;
  will-change: transform;
}

.slider-progress-bar {
  position: absolute;
  background: #4593fc;
  height: 100%;
  left: calc(-100% - 18px);
  width: calc(100% + 18px);
}

.slider-input {
  position: absolute;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 27, 55, 0.1), 0 8px 8px 0 rgba(0, 29, 58, 0.18),
    0 2px 3px 0 rgba(0, 29, 58, 0.18);
  border: none;
}

.slider-label-container {
  display: flex;
  justify-content: space-between;
  height: 20px;
}

.slider-label {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  color: #6b7684;
}

.interest-text {
  display: line-block;
  color: rgb(78, 89, 104);
  font-size: 15px;
  line-height: 1.5;
  margin-top: 5px;
}

.repayment-duration {
  color: rgb(25, 31, 40);
  margin-top: 20px;
  max-width: 100%;
  display: inline-block;
  font-size: 20px;
  line-height: 1.5;
}

.repayment-duration-container {
  position: relative;
  margin-top: 5px;
}

.repayment-duration-selector {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  height: 52px;
  transition: 0.2s ease;
  background: #f9fafb;
  border-radius: 14px;
  align-items: center;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
  width: 100%;
  margin: 0;
  border: 0 solid transparent;
  outline: none;
  appearance: none;
  padding: 0 24px 0 16px;
  color: #333d4b;
  box-sizing: border-box;
}

.arrow-downwards {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 14px;
  right: 16px;
}

option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0 2px 1px;
}
</style>