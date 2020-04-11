<template>
  <div class="dev-page">
    <header class="bg-grey-light h-24 w-full flex items-center fixed">
      <div class="header-inner container">
        <p class="text-2lg">Stylesheet Specs</p>
      </div>
    </header>
    <main class="pt-24">
      <section class="color-palette pt-8">
        <div class="container">
          <h3 class="text-teal-dark">color palette</h3>
          <div class="flex flex-wrap">
            <div v-for="(color, index) in colorsArray" :key="index" class="mt-4 mr-4 flex flex-col items-center justify-start">
              <h5>{{ color.label }}</h5>
              <div class="h-20 w-20 mt-1" :style="{backgroundColor: color.hex}"></div>
              <p class="font-light mt-2">{{ color.hex }}</p>
            </div>
          </div>
          <div class="rule w-full mt-16 bg-grey-dark h-px"></div>
        </div>
      </section>

      <section class="components pt-8">
        <div class="container">
          <h3 class="text-teal-dark">call-to-actions</h3>
          <div class="flex flex-wrap">
            <div class="mt-4 mr-4 flex flex-col items-center justify-start">
              <h5>primary button</h5>
              <PrimaryBtn class="mt-1">button</PrimaryBtn>
            </div>
            <div class="mt-4 mr-4 flex flex-col items-center justify-start">
              <h5>secondary button</h5>
              <SecondaryBtn class="mt-1">button</SecondaryBtn>
            </div>
            <div class="mt-4 mr-4 flex flex-col items-center justify-start">
              <h5>text button</h5>
              <TextBtn url="https://www.mitenchauhan.com" external>Open in new tab</TextBtn>
            </div>
            <!-- <div class="mt-4 mr-4 flex flex-col items-center justify-start">
              <h5>text link</h5>
              <TextBtn url="/">Open in new tab</TextBtn>
            </div> -->
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { theme } from '~/tailwind.config';
import _ from 'lodash';
import PrimaryBtn from '~/components/PrimaryBtn.vue';
import SecondaryBtn from '~/components/SecondaryBtn.vue';
import TextBtn from '~/components/TextBtn.vue';

interface ThemeColor {
  label: string;
  hex: string;
}

export default Vue.extend({
  layout: 'dev',

  components: {
    PrimaryBtn,
    SecondaryBtn,
    TextBtn
  },

  data() {
    return {
      colorsArray: [] as ThemeColor[]
    }
  },

  mounted() {
    const { colors } = theme;
    _.each(colors, (val: any, key: any) => {
      if (key == 'transparent') {
        return; // skip transparent color;
      }

      if (typeof val == 'string') {
        this.colorsArray.push({label: key, hex: val});
      } else {
        _.each(val, (nVal: any, nKey: any) => {
          const label = nKey == 'default' ? key : `${key}-${nKey}`;
          const color: ThemeColor = {
            label,
            hex: nVal
          }
          this.colorsArray.push(color);
        });
      }
    });
  }
});
</script>
