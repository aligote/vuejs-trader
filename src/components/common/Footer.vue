<template>
  <footer class="footer text-center">
    <div class="container">
      <router-link class="footer-brand" to="/">© {{getYear()}} Тамбовский Волк</router-link>
    </div>
  </footer>
</template>

<script>
  export default {
    methods: {
      getYear() {
        const date = new Date();
        return date.getFullYear();
      }
    }
  }
</script>

<style scoped>
  .footer {
    align-self:       flex-end;
    flex:             1 100%;
    background-color: #222;
    border-color:     #080808;
  }
  .footer-brand {
    display: inline-block;
    color: #9d9d9d;
    height:      50px;
    padding:     15px 0;
    font-size:   18px;
    line-height: 20px;
  }
  .footer-brand:hover {
    color: #fff;
    text-decoration: none;
  }
</style>