<template>
  <div>
    <!-- <div v-if="windowWhidth > 600" class="hamburger-menu">
      <hr />
      <hr />
      <hr />
    </div> -->

    <nav class="nav-container">
      <font-awesome-icon icon="bars" class="bars" />
      <ul class="nav-list" id="nav-list">
        <li class="item" v-for="(item, index) in elements" :key="index">
          <button class="boton">
            <router-link :to="item">
              {{ item }}
            </router-link>
          </button>
          <!--PENDING-->
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navegation",
  data() {
    return {
      elements: ["Inicio", "Nosotros", "Sucursales", "Contacto", "Ingresar"],
      status: false,
    };
  },
};
</script>
<style>
/* .hamburger-menu {
  width: 40px;
  height: 20px;
  float: right;
  margin-right: 5vw;
  margin-top: 6.5vh;
  display: none;
}
.hamburger-menu hr {
  height: 5px;
  background-color: black;
  margin-bottom: 2px;
} */
.nav-container {
  width: 99.9vw;
  height: 20vh;
}
.nav-list {
  text-align: center;
  padding-top: 5vh;
}
.item {
  list-style: none;
  display: inline-block;
  margin-left: 80px;
  color: white;
  text-decoration: none;
}
.item button {
  padding: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px!important;
  cursor: pointer;
  border: 15px;
  background-color: black;
  border-radius: 12px;
}

.item button router-link {
  text-decoration: none;
}
.bars {
  display: none;
}
@media (max-width: 1280px) {
    .nav-container {
  width: 100vw;
  height: 20vh;
}
  .nav-list {
    display: none;
  }
 
  .item {
    list-style: none;
    display: inline-block;
    color: white;
    text-decoration: none;
    display: none;
  }
  .boton{
    padding: 10px;
    border: none;
    background: #2e2e2e;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 14px;
    cursor: pointer;
  }
  
  .bars {
    float: right;
    padding: 0.5em 1em 0 0;
    font-size: 3rem;
    display: inline;
    color: white;
  }
}
a {
  text-decoration: none;
  color: gray;
}
</style>