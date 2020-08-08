<template>
  <div class="container">
    <Conversion></Conversion>
    <div class="background"></div>
    <Footer></Footer>
    <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
  </div>
</template>
<script>
import Conversion from '../components/Conversion.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {
    Conversion,
    Footer
  }
}
</script>
<style scoped>
  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
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