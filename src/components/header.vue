<template>
  <header id="line">
    <div class="header">
      <Logo />
      <div class="nav-container">
        <Navegation />
      </div>
    </div>
  </header>
</template>
<script>
import Logo from "./logo";
import Navegation from "./navegation";
export default {
  name: "header",
  components: {
    Logo,
    Navegation,
  },
  data() {
    return {
      elements: ["Inicio", "Nosotros", "Sucursales", "Contacto"],
    };
  },
};
</script>
<style>
#line {
  border-bottom: solid #a44b4b;
  margin: 0;
  padding: 0;
  border-width: 16px;
  margin-bottom: 20px;
  width: 99.9vw;
}
.log-in {
  float: right;
  color: white;
}
.log-in a {
  padding-right: 20px;
  margin-bottom: 20px;
}
.nav-container {
  width: 98.9vw;
  height: 15vh;
  margin: 0;
  padding: 0;
  background-color: #2e2e2e;
}
.nav-list {
  text-align: center;
  padding-top: 5vh;
}
.item {
  list-style: none;
  display: inline-block;
  margin-left: 80px;
}
@media (max-width: 1280) {
  .header {
    overflow: hidden;
    position: relative;
  }
  .header #nav-list {
    display: none;
  }
}
</style>