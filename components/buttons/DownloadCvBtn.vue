<template>
  <div class="download-btn flex items-center" :class="{'loaded': loaded}">
    <CvBtn v-if="icon" :url="resumeUrl" :class="customClasses"></CvBtn>
    <PrimaryBtn v-else @click.native="onClickDownload()">download resume</PrimaryBtn>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import PrimaryBtn from '~/components/PrimaryBtn.vue';
import CvBtn from '~/components/buttons/CvBtn.vue';

export default Vue.extend({
  components: {
    PrimaryBtn,
    CvBtn
  },

  props: {
    icon: {type: Boolean, default: false},
    customClasses: {type: String, required: false}
  },

  data() {
    return {
      loaded: false
    }
  },

  computed: {
    resumeUrl(): string {
      return this.$store.state.resumeUrl;
    }
  },

  methods: {
    onClickDownload(): Window | null {
      console.log('click');
      return window.open(this.resumeUrl, '_blank');
    }
  },

  watch: {
    resumeUrl() {
      if (this.resumeUrl && this.resumeUrl.length) {
        this.loaded = true;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.download-btn {
  transition: all 1s;
  opacity: 0;
  visibility: hidden;

  &.loaded {
    opacity: 1;
    visibility: visible;
  }
}
</style>