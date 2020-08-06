<template>
  <div class="container">
    <Conversion></Conversion>
    <div class="background"></div>
    <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
  </div>
</template>
<script>
import Conversion from '../components/Conversion.vue';
export default {
  components: {
    Conversion
  },
  props:['title']
}
</script>
<style scoped>
  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  
  .background {
    border-radius: 100% 100% 0 0;
    height: 45vh;
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: -40vw;
    right: -40vw;
    
    background: var(--primary-2);
  }
</style>