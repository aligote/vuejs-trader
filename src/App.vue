<template>
  <div class="container-fluid">
    <app-header></app-header>
    <div class="container">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/common/Header.vue';
  import Footer from './components/common/Footer.vue';

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer
    },
    created() {
      // Запускаем действие initStocks, которое создаст в хранилище свойство
      // stocks и наполнит его нужными данными
      // dispatch initStocks -> action initStocks -> commit INIT_STOCKS -> mutations INIT_STOCKS
      this.$store.dispatch('initStocks');
    }
  }
</script>

<style scoped>
  .container-fluid {
    padding:   0;
    display:   flex;
    flex-flow: row wrap;
    height:    100vh;
  }
  .container {
    align-self: center;
  }

  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }
  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0px);
      opacity:   1;
    }
    to {
      transform: translateY(-30px);
      opacity:   0;
    }
  }
</style>
