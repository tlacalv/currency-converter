<template>
  <div class="card">
    <div class=head>
      <p class="date">{{date}}</p>
      <p>{{baseQuantity}} {{baseRate}} equals</p>
      <h2>{{conversion}} {{targetRate}}</h2>
    </div>
    <div class="form">
      <form>
        <InputCurrency
          id="1"
          :default="setDefault('USD')"
          @input-update="currency1Change">
        </InputCurrency>
        <SelectRate 
          :rates="rates"
          :symbols="symbols"
          @select-currency="selectRate1">
        </SelectRate>
        <InputCurrency
          id="2"
          @input-update="currency2Change">
        </InputCurrency>
        <SelectRate 
          :rates="rates"
          :symbols="symbols"
          @select-currency="selectRate2">
        </SelectRate>
      </form>
    </div>
  </div>
</template>
<script>
import { getLatest, getSymbols } from '../api';
import SelectRate from './SelectRate.vue';
import InputCurrency from './InputCurrency.vue';

let validNumber = (number) => {
  if (isNaN(number) || number.length===0){
    return false;
  }
  return true;
}
let emptyObject = (obj) => {
  if(Object.keys(obj).length===0){
    return true;
  }
  return false;
}
export default {
  data () {
    return {
      fristRate: {},
      secondRate: {},
      baseQuantity: 0,
      rates: {},
      symbols: {},
      conversion: '',
      baseRate: '',
      targetRate: '',
      date:''
    }
  },
  components: {
    SelectRate,
    InputCurrency,
  },
  methods: {
    setDefault: function(rate) {
      return {
        name: rate,
        value: this.rates[rate],
      }
    },
    selectRate1: function (e) {
      this.fristRate=e;
      this.currency1Change(this.in1.value);
    },
    selectRate2: function (e) {
      this.secondRate=e;
      this.currency2Change(this.in2.value);
    },
    currency1Change: function (e) {
      if(emptyObject(this.fristRate) || emptyObject(this.secondRate)){
        return;
      }
      if(!validNumber(e)){
        e=0;
      }
      let value = parseFloat(e);
      let conversion;
      conversion = (value / this.fristRate.value) * this.secondRate.value;
      this.conversion = conversion.toFixed(2);
      this.in2.value = this.conversion;
      this.baseRate = this.fristRate.name;
      this.targetRate = this.secondRate.name;
      this.baseQuantity = value;
    },
    currency2Change: function (e) {
      if(emptyObject(this.fristRate) || emptyObject(this.secondRate)){
        return;
      }
      if(!validNumber(e)){
        e=0;
      }
      let value = parseFloat(e);
      let conversion;
      conversion = (value / this.secondRate.value) * this.fristRate.value;
      this.conversion = conversion.toFixed(2);
      this.in1.value = this.conversion;
      this.baseRate = this.secondRate.name;
      this.targetRate = this.fristRate.name;
      this.baseQuantity = value;
    }
  },
  mounted: function () {
    this.in1 = document.getElementById('1');
    this.in2 = document.getElementById('2');
    let latest = getLatest();
    let symbols = getSymbols();
    this.symbols = symbols.symbols;
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
</style>