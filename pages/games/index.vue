<template>
  <div class="games-page">
    <div class="container">
      <div class="row">
        <div class="col-span-4 lg:col-span-6 lg:col-start-4 pt-8 text-center">
          <h2 class="section-heading">Tournament</h2>
          <p class="mt-4">Create an elimination bracket tournament with a wide variety of customisation options allowing you to personalise each tournament to your needs</p>
          <PrimaryBtn class="mt-4 w-48">Create Tournament</PrimaryBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PrimaryBtn from '~/components/PrimaryBtn.vue';

export default Vue.extend({
  layout: 'games',
  components: {
    PrimaryBtn
  }
});
</script>
