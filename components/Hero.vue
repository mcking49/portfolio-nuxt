<template>
  <div class="hero h-screen w-screen bg-teal-black relative">
    <div class="shape"></div>

    <div class="container relative h-full">
      <svg xmlns="http://www.w3.org/2000/svg" height="702" class="m absolute top-1/2 w-full left-0 mx-auto sm:left-auto sm:w-auto sm:ml-20 z-10" viewBox="0 0 525 702">
        <text id="M" transform="translate(0 556)" fill="#ffffff" font-size="599" font-family="Roboto-Bold, Roboto" font-weight="700" letter-spacing="0.08em" opacity="0.1"><tspan x="0" y="0">M</tspan></text>
      </svg>
      <div class="inner-container h-full w-full flex flex-row items-center">
        <div class="copy-container w-full">
          <h2 class="text-teal-light text-center sm:text-left">Hello, I am</h2>
          <h1 class="mt-2 text-center sm:text-left">Miten Chauhan</h1>
          <h3 class="mt-2 text-center sm:text-left">It's kind of like the word "me" and the number ten</h3>
          <div class="btn-container w-full flex flex-col justify-center items-center sm:flex-row sm:justify-between mt-12">
            <PrimaryBtn>download resume</PrimaryBtn>
            <div class="icon-btn-wrapper flex items-center justify-center mt-8 sm:mt-0">
              <LinkedInBtn class="ml-0 sm:ml-4" />
              <GithubBtn class="ml-4" />
              <EmailBtn class="ml-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PrimaryBtn from '~/components/PrimaryBtn.vue';
import LinkedInBtn from '~/components/buttons/LinkedInBtn.vue';
import GithubBtn from '~/components/buttons/GithubBtn.vue';
import EmailBtn from '~/components/buttons/EmailBtn.vue';

export default Vue.extend({
  components: {
    PrimaryBtn,
    LinkedInBtn,
    GithubBtn,
    EmailBtn
  }
});
</script>

<style lang="scss" scoped>
.shape {
  width: 85%;
  height: 100%;
  transform: skew(42deg);
  background: rgba(255, 255, 255, 0.05);
  position: absolute;
  right: -35%;
  z-index: 3;
}

.m {
  transform: translateY(-50%);
  z-index: 1;
}

.copy-container {
  z-index: 5;
}
</style>