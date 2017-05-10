<template>
  <nav class="navbar navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Тамбовский Волк</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li" exact><a>Портфель</a></router-link>
          <router-link to="/stocks" activeClass="active" tag="li"><a>Акции</a></router-link>
        </ul>

        <strong class="navbar-text navbar-right">Средства: {{funds | currency}}</strong>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="javascript:void(0);" @click="endDay">Окончить день</a></li>
          <li class="dropdown"
              :class="{open: isDropdownOpen}"
              @click="isDropdownOpen = !isDropdownOpen"
          >
            <a href="javascript:void(0);" class="dropdown-toggle">Сохранить/Загрузить <span class="caret"></span></a>

            <ul class="dropdown-menu">
              <li><a href="javascript:void(0);" @click="saveData">Сохранить (отключено)</a></li>
              <li><a href="javascript:void(0);" @click="loadData">Загрузить данные</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        };

        // data.json - firebase создаст новую коллекцию с названием data
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  }
</script>

<style>
  .navbar {
    border-radius: 0;
    flex:          1 100%;
    align-self:    flex-start;
    margin:        0;
    z-index: 10;
  }
</style>