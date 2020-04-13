<template>
  <nuxt-link
    @click.native="scrollToTop()"
    :to="{path: '/', hash: '#home'}"
    class="
      z-50
      invisible
      opacity-0
      h-12
      w-12
      rounded-full
      bg-teal
      text-teal-light
      shadow-fab
      fixed
      bottom-4
      right-4
      flex
      justify-center
      items-center
      hover:bg-teal-light
      hover:text-teal
      lg:h-16
      lg:w-16
      lg:bottom-8
      lg:right-8
    ">
    <ChevronRight class="arrow h-6 w-6 lg:h-8 lg:w-8" />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';
import ChevronRight from '~/components/icons/ChevronRight.vue';

export default Vue.extend({
  components: {
    ChevronRight
  },

  mounted() {
    const fab = this.$el as Element;
    const header = document.getElementsByTagName('header')[0];
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > header.offsetHeight) {
        fab.classList.remove('invisible', 'opacity-0');
      } else {
        fab.classList.add('invisible', 'opacity-0');
      }
    });
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.arrow {
  transform: rotate(-90deg);
}
</style>