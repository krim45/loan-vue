import { createStore } from 'vuex';
import { getItem } from '@/utils/localStorage';

const store = createStore({
  state: {
    loan: getItem('loan') || 50,
    duration: getItem('duration') || 30,
  },
  getters: {
    formatPrice(state) {
      let result = '';
      let price = state.loan * 1000000;

      if (price >= 100000000) {
        result += Math.floor(price / 100000000) + '억';
        price %= 100000000;
      }
      if (price >= 10000) {
        result += Math.floor(price / 10000) + '만원';
        price %= 10000;
      }
      return result;
    },
  },
});

export default store;
