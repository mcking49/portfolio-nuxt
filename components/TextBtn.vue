<template>
  <div>
    <a :href="url" v-if="external" target="_blank">
      <slot></slot>
      <OpenExternal class="ml-1" />
    </a>
    <nuxt-link v-else :to="{path: url, hash}" class="internal-link"><slot></slot></nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OpenExternal from '~/components/icons/OpenExternal.vue';

export default Vue.extend({
  props: {
    external: {type: Boolean, default: false},
    url: {type: String, required: true},
    hash: {type: String, default: ''}
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

  &.internal-link {
    @apply text-teal-light;

    &:hover {
      @apply text-teal;
    }
  }
}
</style>