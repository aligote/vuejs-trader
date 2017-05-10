<template>
  <div class="jumbotron text-center">
    <div class="container">
      <h1>Vue.js Demo</h1><br>
      <img class="img-responsive center-block" width="300px" src="/src/assets/img/wolf.png" alt="Волк"><br>
      <h5>Вы можете Сохранить/Загрузить ваши данные с сервера</h5>
      <h5>"Окончить день" генерирует новые цены</h5><br>
      <p>Доступные средства: {{funds | currency}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  }
</script>

<style scoped>
  .jumbotron {
    margin-bottom: 0;
  }
</style>
