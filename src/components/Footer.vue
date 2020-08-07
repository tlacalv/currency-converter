<template>
  <footer>
    <h3>Developed by Tlacaelel Leon</h3>
    <a href="https://github.com/tlacalv"><span class="icon github"></span></a>
    <a href="https://www.linkedin.com/in/tlacaelel-le%C3%B3n-villase%C3%B1or-819978122/"><span class="icon linkedin"></span></a>
  </footer>
</template>
<style>
  .icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-size: cover;
  }
  .github {
    background-image: url('../assets/images/github.svg');
    
  }
  .linkedin {
    background-image: url('../assets/images/linkedin.svg');
    
  }
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    min-height: 50px;
    flex-wrap: wrap;
    align-items: center;
    background: var(--primary-0);
  }
  footer a {
    margin: 5px 5px;
  }
  footer h3 {
    font-size: 14px;
    font-weight: normal;
    width: 100%;
    margin: 10px 0;
    text-align: center;
    color: var(--primary-4);
  }
</style>