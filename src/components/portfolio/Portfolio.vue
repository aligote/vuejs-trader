<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    <h2 v-if="stocks.length === 0">Нет данных. Вы можете загрузить данные с сервера или купить акции.</h2>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Stock from './Stock.vue';

  export default {
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style scoped>
  .row {
    display:         flex;
    justify-content: center;
    flex-flow:       row wrap;
  }
</style>