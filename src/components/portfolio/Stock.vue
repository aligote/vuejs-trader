<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">{{stock.name}}
          <small>(Цена: {{stock.price | currency}} | Количество: {{stock.quantity}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input class="form-control" type="number" placeholder="Количество" v-model="quantity">
        </div>
        <div class="pull-right">
          <button class="btn btn-success"
                  @click="sellStock"
                  :disabled="isDisabledBtn">
            Продать
          </button>
        </div>
        <span class="label label-danger pull-right" v-if="insufficientQuantity">Превышено количество</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      },
      isDisabledBtn() {
        return this.insufficientQuantity || +this.quantity <= 0 || !Number.isInteger(+this.quantity);
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.placeSellOrder(order);
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
  .panel-body {
    padding:  30px 15px;
    position: relative;
  }

  .label {
    position: absolute;
    bottom:   0;
    right:    0;
  }
</style>