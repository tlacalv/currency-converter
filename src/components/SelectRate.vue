<template>
  <select v-model="selectedRate" @change="selectCurrency">
    <option selected="true" disabled="disbled" :value="{}">Select currency</option>
    <option 
      v-for="(value, name) in rates" 
      :key="name" 
      :value="{value, name}">
        {{name}}
    </option>
  </select>
</template>
<script>
export default {
  data () {
    return {
      selectedRate: {}
    }
  },
  props: ['rates'],
  methods: {
    selectCurrency: function(e) {
      this.$emit('select-currency', this.selectedRate);
    }
  }
}
</script>
<style scoped>
  select {
    margin-right: 30px;
    margin-bottom: 15px;
  }
  select option {
    font-family: 'OpenSans-Regular';
  }
  select {
    color: var(--gray-2);
    padding: 10px 15px;
    border: 1px solid var(--gray-2);
    border-radius: 5px;

  }
  select:focus, select:active{
    outline: none;
    border: 1px solid;
    border-color: var(--secondary-0);
    box-shadow: 0 0 0 2px var(--secondary-0-op);
  }
</style>