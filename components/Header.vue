<template>
  <header ref="header" class="main-header fixed top-0 left-0 w-full bg-transparent h-16 md:h-20 z-50 transition-all duration-300 ease-in-out">
    <div class="container flex flex-row justify-between items-center h-full">
      <div class="logo flex-none h-full flex items-center">
        <nuxt-link :to="{path: '/', hash: '#home'}">
          <img src="~/assets/img/logo.svg" class="h-6 w-6 md:h-10 md:w-10" />
        </nuxt-link>
      </div>
      <nav class="flex flex-row justify-end flex-1 items-center">
        <TextBtn url="/" hash="#about" class="ml-4">About</TextBtn>
        <TextBtn url="/" hash="#projects" class="ml-4">Projects</TextBtn>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import TextBtn from '~/components/TextBtn.vue';

export default Vue.extend({
  components: {
    TextBtn
  },

  mounted() {
    const header = this.$refs.header as Element;
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
});
</script>

<style lang="scss" scoped>
.main-header {
  &.scrolled {
    @apply bg-teal-black;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>