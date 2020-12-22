<template>
  <div>
    <Header />
    <Sucursales />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Sucursales from "@/components/sucursales.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Header,
    Sucursales,
    Footer,
  },
};
</script>

<style>
</style>