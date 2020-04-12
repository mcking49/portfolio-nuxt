<template>
  <div>
    <Hero />

    <section id="about" class="alt">
      <div class="container">
        <div class="row">
          <div class="col-span-6 z-20">
            <div class="heading-wrapper flex justify-between items-center">
              <h2 class="section-heading">Web<br>Developer</h2>
              <div class="img-wrapper max-w-1/2 ml-4 max-h-32 xs:ml-8 lg:hidden">
                <img src="~/assets/img/profile-img-mobile.png" alt="Miten" class="object-contain max-h-32" />
              </div>
            </div>

            <blockquote class="mt-8">"the web will one day make the app store obsolete"</blockquote>

            <div class="copy mt-8">
              <p>Hi, I'm Miten! I am currently a web developer who loves to make awesome web apps using popular frontend frameworks like Angular, Vue and React. I believe that one day, the Web will make the App Store obsolete! If you disagree, add me on LinkedIn and let's have a heated debate (just kidding).</p>
              <p class="mt-4">In my spare time I like to do a lot of things like making short highlight videos of my trips and significant events in my life, or building computers, watching too many movies and TV shows, going out adventuring, and supporting the Lakers.</p>
              <p class="mt-4">If you would like to get to know me more, or just want to have a chat, feel free to connect with me. I would love to hear from you. In the meantime, below you will find some of the project’s I’ve worked on over the years. </p>
            </div>
          </div>
          <div class="col-span-5 col-start-8 relative hidden lg:block">
            <div class="absolute h-full w-full flex items-end bottom-n18 z-10">
              <img src="~/assets/img/profile-img.png" alt="Miten" class="max-h-full" />
            </div>
            <div class="line left"></div>
            <div class="line right"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects"></section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Hero from '~/components/Hero.vue';

export default Vue.extend({
  components: {
    Hero
  }
});
</script>

<style lang="scss" scoped>
.line {
  height: 125%;
  width: 4px;
  background: white;
  position: absolute;
  bottom: -72px;
  transform-origin: 0 100%;
  left: 40%;

  &.left {
    transform: skew(30deg);
  }

  &.right {
    transform: skew(-30deg);
  }
}
</style>