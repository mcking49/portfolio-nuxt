<template>
  <footer class="bg-teal-black h-16 w-full flex items-center lg:h-40 absolute bottom-0">
    <div class="container flex items-center justify-between lg:justify-start">
      <TextBtn url="https://www.linkedin.com/in/mitenchauhan/">Developed by Miten Chauhan</TextBtn>
    </div>
    <div class="shape absolute"></div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import TextBtn from '~/components/TextBtn.vue';

export default Vue.extend({
  components: {
    TextBtn
  }
});
</script>

<style lang="scss" scoped>
.shape {
  width: 85%;
  min-width: 810px;
  height: 100%;
  transform: skew(42deg);
  background: rgba(255, 255, 255, 0.025);
  position: absolute;
  left: 50%;
  z-index: 3;

  @media (min-width: 1024px) {
    left: 60%;
  }
}
</style>