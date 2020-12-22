<template>
  <div>
    <Header />
    <Contacto />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Contacto from "@/components/contacto.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Header,
    Contacto,
    Footer,
  },
};
</script>

<style>
</style>