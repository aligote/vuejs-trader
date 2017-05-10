const state = {
  funds: 10000,
  stocks: []
};

// Изменяем состояние
const mutations = {
  // order destruction
  'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
    //const record = state.stocks.find(element => element.id === stockId);
    const record = _findRecord(state.stocks, stockId);

    if(record)
      record.quantity += quantity;
    else
      state.stocks.push({
        id: stockId,
        quantity
      });

    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
    //const record = state.stocks.find(element => element.id === stockId);
    const record = _findRecord(state.stocks, stockId);

    if(record.quantity > quantity)
      record.quantity -= quantity;
    else
      state.stocks.splice(state.stocks.indexOf(record), 1);

    state.funds += stockPrice * quantity;
  },
  'SET_PORTFOLIO'(state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio || [];
  }
};

const actions = {
  // context destruction
  sellStock: ({commit}, order) => {
    commit('SELL_STOCK', order);
  }
};

const getters = {
  stockPortfolio: (state, getters) => {
    return state.stocks.map(stock => {
      //const record = getters.stocks.find(element => element.id === stock.id);
      const record = _findRecord(getters.stocks, stock.id);

      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds: state => state.funds
};

const _findRecord = (stocks, stockId) => stocks.find(element => element.id === stockId);

export default {
  state,
  mutations,
  actions,
  getters
};
