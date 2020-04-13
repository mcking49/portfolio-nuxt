<template>
  <section id="projects">
    <div class="container">
      <div class="row">
        <h2 class="section-heading">All<br>Projects</h2>
      </div>
      <div class="row mt-8">
        <div class="hidden lg:block col-span-4 xl:col-span-3">
          <div class="link-container">
            <div class="link" v-for="(project, index) in projects" :key="`link-${index}`">
              <button class="btn-style-none link-btn" :class="{'active': project.active}" @click="toggleActiveProject(index)">
                {{ project.name }}
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:block lg:col-span-8 lg:col-start-5 project-col relative">
          <button class="slider-arrow left btn-style-none" @click="prevProject()"><ChevronRight /></button>
          <div class="project-wrapper absolute inset-0" :class="{'z-10': project.active}" v-for="(project, index) in projects" :key="`project-${index}`" ref="projectEls">
            <transition name="fade" tag="div">
              <div v-if="project.active" class="project-inner-wrapper">
                <div class="link-wrapper flex w-full justify-between items-center lg:justify-end">
                  <h4 class="text-teal-dark lg:hidden">{{ project.shortName }}</h4>
                  <TextBtn :url="project.url" class="flex-shrink-0" external>View Project</TextBtn>
                </div>
                <div class="img-copy-wrapper px-4 xs:px-6 sm:px-8 lg:px-0">
                  <img :src="getImg(project.img)" class="w-full mt-8 object-contain" />
                  <div class="copy-container mt-8">
                    <div class="stack-wrapper flex flex-wrap items-center justify-start">
                      <h5 class="text-teal stack-label mt-1" v-for="stack in project.stack" :key="getStackSlug(project.name, stack)">{{ stack }}</h5>
                    </div>
                    <p class="mt-2">{{ project.description }}</p>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <button class="slider-arrow right btn-style-none" @click="nextProject()"><ChevronRight /></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import ChevronRight from '~/components/icons/ChevronRight.vue';
import TextBtn from '~/components/TextBtn.vue';
import * as _ from 'lodash';

interface Project {
  name: string;
  shortName: string;
  url: string;
  img: string;
  description: string;
  stack: string[];
  active: boolean;
}

export default Vue.extend({
  components: {
    ChevronRight,
    TextBtn
  },

  data() {
    return {
      activeProjectIndex: 0,
      projects: [] as Project[]
    }
  },

  mounted() {
    const p1: Project = {
      name: 'Physique Studio App',
      shortName: 'Physique Studio',
      url: 'https://app.physiquestudio.co.nz/',
      img: 'physique.jpg',
      description: `During the COVID-19 outbreak, Physique Studio was forced to close their private gym and rehab center as NZ entered lockdown. In order to continue providing their services to their clients, we created an app to post custom workouts that can be tailored to each clients needs. Available on Android, iOS and Web.`,
      stack: ['Ionic 5', 'Angular 9', 'Capacitor 2', 'Firebase'],
      active: true
    }
    const p2: Project = {
      name: `Austin D'Souza`,
      shortName: `Austin D'Souza`,
      url: 'https://www.austindsouza.co.nz/',
      img: 'austin.jpg',
      description: `After completing a Masters in Architecture, Austin wanted to showcase his portfolio on his own custom website. I developed a solution that not only displays his portfolio, but also has a custom admin panel that allows Austin to manage the content on his site.`,
      stack: ['Angular 7', 'Firebase'],
      active: false
    }
    const p3: Project = {
      name: 'Lesvos Shoe & Bag Repairs',
      shortName: 'Lesvos',
      url: 'http://www.shoeandbagrepair.co.nz/',
      img: 'lesvos.jpg',
      description: `A popular shoe and bag repair shop located at the heart of Wellington's Railway Station, wanted to create a website to advertise their services. I implemented a simple solution that is appealing to the eye and effectively advertises the services offered by Lesvos.`,
      stack: ['HTML', 'SCSS', 'Bootstrap'],
      active: false
    }
    const p4: Project = {
      name: 'Miten Chauhan',
      shortName: 'Miten Chauhan',
      url: 'https://www.mitenchauhan.com/',
      img: 'miten-portfolio.jpg',
      description: `Being a web developer myself, it felt wrong not having my own website! So, here it is. I created this website to showcase a little bit about me and display all the projects i've been involved in over the years as a freelancer.`,
      stack: ['Vue / Nuxt (TS)', 'TailwindCSS'],
      active: false
    }

    this.projects = [p1, p2, p3, p4];
  },

  methods: {
    getImg(img: string): string {
      return require(`~/assets/img/${img}`);
    },

    getStackSlug(name: string, stack: string): string {
      return `${_.kebabCase(name)}-${_.kebabCase(stack)}`;
    },

    nextProject() {
      this.projects[this.activeProjectIndex].active = false;
      if (this.activeProjectIndex == this.projects.length-1) {
        this.activeProjectIndex = 0;
      } else {
        this.activeProjectIndex++;
      }
      this.projects[this.activeProjectIndex].active = true;
    },

    prevProject() {
      this.projects[this.activeProjectIndex].active = false;
      if (this.activeProjectIndex == 0) {
        this.activeProjectIndex = this.projects.length-1;
      } else {
        this.activeProjectIndex--;
      }
      this.projects[this.activeProjectIndex].active = true;
    },

    toggleActiveProject(index: number) {
      if (this.activeProjectIndex != index) {
        this.projects[index].active = true;
        this.projects[this.activeProjectIndex].active = false;
        this.activeProjectIndex = index;
      }
    },
  }
});
</script>

<style lang="scss" scoped>
.link-btn {
  @apply flex items-center justify-end mb-4 w-full pr-8 text-base normal-case font-normal text-right bg-white border-l-2 border-white text-teal-dark;
  min-height: 3rem;

  &:hover {
    @apply bg-grey-light border-teal text-teal-dark;
  }

  &.active {
    @apply bg-grey-light border-teal text-teal;
  }

  svg {
    @apply h-6 w-6 ml-6;
  }

  @media (min-width: 1366px) {
    // @appl;
  }
}

.project-col {
  height: 610px;

  @media (min-width: 375px) {
    height: 545px;
  }

  @media (min-width: 640px) {
    height: 590px;
  }

  @media (min-width: 1024px) {
    height: 590px;
  }

  @media (min-width: 1280px) {
    height: 665px;
  }

  @media (min-width: 1366px) {
    height: 700px;
  }
}

.stack-label {
  @apply mr-3 relative;

  &:not(:last-of-type):after {
    content: '|';
    @apply absolute text-grey;
    top: 0;
    right: -8px;
  }
}

.slider-arrow {
  @apply text-grey absolute top-64 z-20 h-10 w-10 flex justify-center items-center;

  &.left {
    @apply -left-6;
    transform: rotate(180deg);
  }

  &.right {
    @apply -right-6;
  }

  @media (min-width: 1024px) {
    @apply hidden;
  }
}
</style>