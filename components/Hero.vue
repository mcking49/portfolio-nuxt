<template>
  <div id="home" class="hero h-screen w-screen bg-teal-black relative">
    <div class="shape"></div>

    <div class="container relative h-full">
      <svg xmlns="http://www.w3.org/2000/svg" height="702" class="m absolute top-1/2 w-full left-0 mx-auto sm:left-auto sm:w-auto sm:ml-20 z-10" viewBox="0 0 525 702">
        <text id="M" transform="translate(0 556)" fill="#ffffff" font-size="599" font-family="Roboto-Bold, Roboto" font-weight="700" letter-spacing="0.08em" opacity="0.1"><tspan x="0" y="0">M</tspan></text>
      </svg>
      <div class="inner-container h-full w-full flex flex-row items-center">
        <div class="copy-container w-full">
          <h2 class="text-teal-light text-center uppercase sm:text-left">Hello, I am</h2>
          <h1 class="mt-4 xs:mt-6 sm:mt-2 text-center sm:text-left">Miten Chauhan</h1>
          <p class="mt-4 xs:mt-6 sm:mt-2 text-center sm:text-left hero-statement">"It's kind of like the word 'me' and then the number ten"</p>
          <div class="btn-container w-full flex flex-col justify-center items-center mt-10 xs:mt-11 sm:mt-12 sm:flex-row sm:justify-between">
            <DownloadCvBtn></DownloadCvBtn>
            <div class="icon-btn-wrapper flex items-center justify-center mt-8 sm:mt-0">
              <LinkedInBtn class="ml-0 md:ml-4" />
              <GithubBtn class="ml-2 md:ml-4" />
              <EmailBtn class="ml-2 md:ml-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DownloadCvBtn from '~/components/buttons/DownloadCvBtn.vue';
import LinkedInBtn from '~/components/buttons/LinkedInBtn.vue';
import GithubBtn from '~/components/buttons/GithubBtn.vue';
import EmailBtn from '~/components/buttons/EmailBtn.vue';

export default Vue.extend({
  components: {
    DownloadCvBtn,
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
  transform: skew(32deg);
  background: rgba(255, 255, 255, 0.025);
  position: absolute;
  left: 80%;
  z-index: 3;

  @media (min-width: 640px) {
    left: 60%;
    transform: skew(42deg);
  }
  z-index: 3;

  @media (min-width: 1280px) {
    left: 48%;
  }
}

.m {
  transform: translateY(-50%);
  z-index: 1;
}

.copy-container {
  z-index: 5;
}
</style>