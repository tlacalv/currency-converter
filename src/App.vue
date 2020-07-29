<template>
  <Conversion :title="message"></Conversion>
</template>
<script>
import Conversion from './containers/Conversion.vue';
export default {
  data () {
    return {
      message: 'Set up'
    }
  },
  components: {
    Conversion
  }
}
</script>
<style>

</style>