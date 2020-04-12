<template>
  <footer class="bg-teal-black h-16 w-full flex items-center relative lg:h-40">
    <div class="container flex items-center justify-between lg:justify-start">
      <p class="text-xs text-teal-light lg:text-base">Connect with me</p>
      <div class="icon-btn-wrapper flex items-center justify-center z-10 lg:ml-8">
        <CvBtn class="ml-0 sm:h-8 sm:w-8 lg:ml-4 lg:h-13 lg:w-13" />
        <LinkedInBtn class="ml-2 lg:ml-4 sm:h-8 sm:w-8 lg:h-13 lg:w-13" />
        <GithubBtn class="ml-2 lg:ml-4 sm:h-8 sm:w-8 lg:h-13 lg:w-13" />
        <EmailBtn class="ml-2 lg:ml-4 sm:h-8 sm:w-8 lg:h-13 lg:w-13" />
      </div>
    </div>
    <div class="shape absolute"></div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import CvBtn from '~/components/buttons/CvBtn.vue';
import LinkedInBtn from '~/components/buttons/LinkedInBtn.vue';
import GithubBtn from '~/components/buttons/GithubBtn.vue';
import EmailBtn from '~/components/buttons/EmailBtn.vue';

export default Vue.extend({
  components: {
    CvBtn,
    LinkedInBtn,
    GithubBtn,
    EmailBtn
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