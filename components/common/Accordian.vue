<template>
  <div class="">
    <div class="tab__header">
      <a
        href="#"
        :class="active ? 'bg-brand text-white' : 'bg-black text-white'"
        class="tab__link text-2xl p-4 no-underline border-b-2 border-white flex justify-between"
        @click.prevent="active = !active"
      >
        <strong>{{ homepageTab ? homepageTab.tabTitle : null }}</strong>
        <span v-show="!active" class="down-Arrow">
          <fa class="text-3xl text-brand" :icon="faChevronDown"
        /></span>
        <span v-show="active" class="up-Arrow"
          ><fa class="text-3xl text-white" :icon="faChevronUp"
        /></span>
      </a>
    </div>
    <div v-show="active" class="transition tab__content p-2">
      <div class="shadow-sm transition-opacity">
        <div class="md:grid-cols-2 grid">
          <div
            class="flex flex-wrap flex-column content-center bg-fixed p-5"
            :style="{
              backgroundImage: `url(${
                homepageTab ? homepageTab.imageURL : null
              })`,
            }"
          >
            <h1 class="uppercase text-3xl text-white font-semibold mb-5">
              {{ homepageTab ? homepageTab.title : null }}
            </h1>
            <p class="text-brand text-lg">
              {{ homepageTab ? homepageTab.description : null }}
            </p>
          </div>
          <div class="bg-white text-gray-500">
            <div class="grid sm:grid-cols-2 p-10 gap-4">
              <div>
                <div v-if="homepageTab">
                  <ul class="tab-section">
                    <li
                      v-for="(singleList, indexOne) in homepageTab.listOne"
                      :key="indexOne"
                      class="mb-4"
                    >
                      {{ singleList }}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div v-if="homepageTab">
                  <ul class="tab-section">
                    <li
                      v-for="(singleList, indexTwo) in homepageTab.listTwo"
                      :key="indexTwo"
                      class="mb-4"
                    >
                      {{ singleList }}
                    </li>
                  </ul>
                  <div v-if="homepageTab">
                    <div class="ml-6">
                      <a
                        :href="homepageTab ? homepageTab.link.path : null"
                        class="text-brand underline"
                      >
                        {{ homepageTab ? homepageTab.link.name : null }}
                        <fa class="ml-1" :icon="faAngleRight" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  faChevronDown,
  faChevronUp,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'
export default {
  props: {
    homepageTab: { type: Object, default: null },
    open: { type: Boolean, default: false },
  },
  data() {
    return {
      active: false,
    }
  },
  computed: {
    faChevronDown() {
      return faChevronDown
    },
    faChevronUp() {
      return faChevronUp
    },
    faAngleRight() {
      return faAngleRight
    },
  },
  mounted() {
    this.active = this.open
  },
}
</script>
