<template>
  <a class="icon-btn" :href="url" target="_blank">
    <svg id="document_button" data-name="document button" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
      <g id="Ellipse_3" data-name="Ellipse 3" fill="none" stroke="currentColor" stroke-width="3">
        <circle cx="37.5" cy="37.5" r="37.5" stroke="none"/>
        <circle cx="37.5" cy="37.5" r="36" fill="none"/>
      </g>
      <path id="Path_955" data-name="Path 955" d="M0,0H47.345V47.345H0Z" transform="translate(14 14)" fill="none"/>
      <path id="Path_956" data-name="Path 956" d="M23.727,2H7.945A3.94,3.94,0,0,0,4.02,5.945L4,37.509a3.94,3.94,0,0,0,3.926,3.945H31.618a3.957,3.957,0,0,0,3.945-3.945V13.836Zm3.945,31.563H11.891V29.618H27.672Zm0-7.891H11.891V21.727H27.672Zm-5.918-9.863V4.959L32.6,15.809Z" transform="translate(17.891 15.945)" fill="currentColor"/>
    </svg>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    url: {type: String, required: true}
  }
})
</script>
