import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

import * as actions from './actions';

Vue.use(Vuex);

// Создаем и настраиваем хранилище
export default new Vuex.Store({
  actions,
  modules: {
    stocks,
    portfolio
  }
});