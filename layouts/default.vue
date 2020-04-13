<template>
  <div>
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default Vue.extend({
  components: {
    Header,
    Footer
  },

  mounted() {
    this.$store.dispatch('getResume');
  }
});
</script>

<style style="scss">
</style>
