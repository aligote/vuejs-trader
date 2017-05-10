import Vue from 'vue';

// context destruction
export const loadData = ({commit}) => {
  Vue.http
    .get('data.json')
    .then(response => response.json())
    .then(data => {
      if(data) {
        const {stocks, funds, stockPortfolio} = data;

        const portfolio = {
          stockPortfolio,
          funds
        };

        // mutations
        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    })

};