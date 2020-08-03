<template>
  <div class="card">
    <div class=head>
      <p class="date">{{date}}</p>
      <p>{{baseQuantity}} {{baseRate}} equals</p>
      <h2>{{conversion}} {{targetRate}}</h2>
    </div>
    <div class="form">
      <form>
        <input type="text" name="" id="1" @keyup="currency1Change">
        <select v-model="fristRate">
          <option v-for="(value, name) in rates" :key="name" :value="{value, name}">{{name}}</option>
        </select>
        <input type="text" name="" id="2"  @keyup="currency2Change">
        <select v-model="secondRate">
          <option v-for="(value, name) in rates" :key="name" :value="{value, name}">{{name}}</option>
        </select>
      </form>
    </div>
  </div>
</template>
<script>
import { getLatest } from '../api';

export default {
  data () {
    return {
      fristRate: {},
      secondRate: {},
      baseQuantity: 0,
      rates: {},
      conversion: '',
      baseRate: '',
      targetRate: '',
      date:''
    }
  },
  methods: {
    currency1Change: function (e) {
      let value = parseFloat(e.target.value);
      let conversion;
      conversion = (value / this.fristRate.value) * this.secondRate.value;
      this.conversion = conversion.toFixed(2);
      this.in2.value = this.conversion;
      this.baseRate = this.fristRate.name;
      this.targetRate = this.secondRate.name;
      this.baseQuantity = value;
    },
    currency2Change: function (e) {
      let value = parseFloat(e.target.value);
      let conversion;
      conversion = (value / this.secondRate.value) * this.fristRate.value;
      this.conversion = conversion.toFixed(2);
      this.in1.value = this.conversion;
      this.baseRate = this.secondRate.name;
      this.targetRate = this.fristRate.name;
      this.baseQuantity = value;
    }
  },
  watch: {
    // currency1: function (newVal, oldVal) {
    //   this.baseQty = newVal;
    //   this.in2.value = newVal * 2;
    //   console.log(this.in2.placeholder)
    // },
    // currency2: function (newVal, oldVal) {
    //   this.baseQty = newVal;
    //   this.in1.value = newVal * 4;
    // }
  },
  mounted: function () {
    this.in1 = document.getElementById('1');
    this.in2 = document.getElementById('2');
    let latest = getLatest();
    this.rates = latest.rates;
    this.date = latest.date;
  }
}
</script>
<style scoped>
.head {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
}
  p, h2 {
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 20px;
    color: var(--gray-3);
    margin-bottom: 15px;
  }
  h2 {
    font-size: 50px;
    font-family: 'OpenSans-SemiBold';
    color: var(--primary-0);
  }
  .date{
    font-size: 16px;
  }
  .card {
    background: white;
    width: 90%;
    max-width: 800px;
    min-height: 300px;
    border-radius: 10px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, .16);
    border: 1px solid var(--gray-4);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form {
    display: grid;
    grid-template-columns: 50% 50%;
    width: 600px;
    margin-bottom: 50px;
  }
  input, select {
    margin-right: 30px;
    margin-bottom: 15px;
  }
  select option {
    font-family: 'OpenSans-Regular';
  }
  select, input {
    color: var(--gray-2);
    padding: 10px 15px;
    border: 1px solid var(--gray-2);
    border-radius: 5px;

  }
  select:focus, input:focus, select:active, input:active {
    outline: none;
    border: 1px solid;
    border-color: var(--secondary-0);
    box-shadow: 0 0 0 2px var(--secondary-0-op);
  }
</style>