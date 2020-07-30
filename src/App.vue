<template>
  <Home :title="message"></Home>
</template>
<script>
import Home from './containers/Home.vue';
export default {
  data () {
    return {
      message: 'Set up'
    }
  },
  components: {
    Home
  }
}
</script>
<style>

</style>