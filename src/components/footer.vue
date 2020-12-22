<template>
  <footer id="red">
    <div class="footer">
      <h1 class="text">Panecito</h1>
      <h2 class="text2">&copy; Todos los derechos reservados 2020</h2>
    </div>
  </footer>
</template>
<script>
export default {
  name: "footer",
};
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Lato:900);

#red {
  border-top: solid #a44b4b;
  border-width: 15px;
  background: #2e2e2e;
  position: absolute;
  height: 15vh;
  width: 99.9vw;
  margin-top: 20px;
}

.text {
  color: white;
  font-family: Lato;
  font-size: 32px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.text2 {
  color: whitesmoke;
  font-family: Lato;
  font-size: 20px;
  text-align: center;
  margin-top: -10px;
}

</style>