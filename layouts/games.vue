<template>
  <div>
    <Header />
    <main class="pb-16 lg:pb-40 pt-16 md:pt-20 min-h-screen">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/games/Header.vue';
import Footer from '~/components/games/Footer.vue';

export default Vue.extend({
  components: {
    Header,
    Footer
  },

  mounted() {
  }
});
</script>
