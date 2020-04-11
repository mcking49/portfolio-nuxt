<template>
  <div>
    <a :href="url" v-if="external" target="_blank">
      <slot></slot>
      <OpenExternal class="ml-1" />
    </a>
    <nuxt-link v-else :to="url"><slot></slot></nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OpenExternal from '~/components/icons/OpenExternal.vue';

export default Vue.extend({
  props: {
    external: {type: Boolean, default: false},
    url: {type: String, required: true}
  },

  components: {
    OpenExternal
  }
});
</script>

<style lang="scss" scoped>
a {
  @apply font-bold text-teal text-xs uppercase;

  &:hover {
    @apply text-grey;
  }
}
</style>