<template>
  <div class="card">
    <div class=head>
      <p>1 USD equals</p>
      <h2>39.99 MXN</h2>
    </div>
    <div class="form">
      <form>
        <input type="text" name="" id="">
        <select>
          <option value="example">Example</option>
          <option value="example">Example</option>
        </select>
        <input type="text" name="" id="">
        <select>
          <option value="example">Example</option>
          <option value="example">Example</option>
        </select>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  
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