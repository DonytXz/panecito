<template>
<div>
  <Header />
  <About />
  <Footer />
</div>
</template>
<script>
import Header from "../components/header.vue";
import About from "../components/about.vue";
import Footer from '@/components/footer.vue';
export default {
  components: {
    Header,
    About,
    Footer
  },
};
</script>
