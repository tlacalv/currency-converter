<template>
  <input type="text" @keyup="updateValue">
</template>
<script>
export default {
  methods: {
    updateValue: function(e) {
      let value = parseFloat(e.target.value);
      this.$emit('input-update', value);
    }
  }
}
</script>
<style scoped>
  input{
    margin-right: 30px;
    margin-bottom: 15px;
  }
  input {
    color: var(--gray-2);
    padding: 10px 15px;
    border: 1px solid var(--gray-2);
    border-radius: 5px;

  }
  input:focus, input:active {
    outline: none;
    border: 1px solid;
    border-color: var(--secondary-0);
    box-shadow: 0 0 0 2px var(--secondary-0-op);
  }
</style>