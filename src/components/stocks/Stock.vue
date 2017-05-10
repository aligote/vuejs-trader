<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{stock.name}} <small>(Price: {{stock.price | currency}})</small></h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input class="form-control" type="number" placeholder="Количество" v-model="quantity">
        </div>
        <div class="pull-right">
          <button class="btn btn-success"
                  @click="buyStock"
                  :disabled="isDisabledBtn">
            Купить
          </button>
        </div>
        <span class="label label-danger pull-right" v-if="insufficientFunds">Недостаточно средств</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return (this.quantity * this.stock.price) > this.funds;
      },
      isDisabledBtn() {
        return this.insufficientFunds || +this.quantity <= 0 || !Number.isInteger(+this.quantity);
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };

        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
  .panel-body {
    padding: 30px 15px;
    position: relative;
  }

  .label {
    position: absolute;
    bottom:   0;
    right:    0;
  }
</style>