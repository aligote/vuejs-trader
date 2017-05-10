import stocks from '../../../data/stocks';

const state = {
  stocks: []
};

// Изменяем состояние
const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks;
  },
  'RANDOM_STOCKS'(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5)); // part of rocket science :)
    });
  }
};

const actions = {
  // context destruction
  buyStock: ({commit}, order) => {
    commit('BUY_STOCK', order); // portfolio.js
  },
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({commit}) => {
    commit('RANDOM_STOCKS');
  }
};

const getters = {
  stocks: state => state.stocks
};

export default {
  state,
  mutations,
  actions,
  getters
};