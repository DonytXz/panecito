<template>
  <div>
    <Header />
    <Inicio />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
import Inicio from "@/components/inicio.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Inicio,
    Footer,
  },
};
</script>
