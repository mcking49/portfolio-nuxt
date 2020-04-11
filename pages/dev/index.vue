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
            <div v-for="(color, index) in colorsArray" :key="index" class="mt-4 mr-4 flex flex-col items-center justify-center">
              <h5>{{ color.label }}</h5>
              <div class="h-20 w-20 mt-2" :style="{backgroundColor: color.hex}"></div>
              <p class="font-light mt-2">{{ color.hex }}</p>
            </div>
          </div>
          <div class="rule w-full mt-16 bg-grey-dark h-px"></div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { theme } from '~/tailwind.config';
import _ from 'lodash';

interface ThemeColor {
  label: string;
  hex: string;
}

export default Vue.extend({
  layout: 'dev',

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
