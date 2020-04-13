<template>
  <div>
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
    <BackToTopBtn />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import BackToTopBtn from '~/components/buttons/BackToTopBtn.vue';

export default Vue.extend({
  components: {
    Header,
    Footer,
    BackToTopBtn
  },

  mounted() {
    this.$store.dispatch('getResume');
  }
});
</script>

<style style="scss">
</style>
