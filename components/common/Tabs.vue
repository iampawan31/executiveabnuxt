<template lang="html">
  <div class="tabs__dark">
    <div
      class="bg-gradient-to-r from-brand-gray-light to-brand-gray-medium-dark py-2"
    >
      <div
        ref="tabsSection"
        class="container w-72 sm:w-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-max mx-auto overflow-x-auto no-scrollbar flex content-center justify-between"
      >
        <button
          class="text-md absolute left-2 mt-1 xl:hidden flex focus:outline-none"
          @click="prevNav"
        >
          <fa class="text-2xl text-white" :icon="faChevronLeft" />
        </button>
        <div
          v-for="(tab, index) in tabs"
          :key="tab.title"
          class="mx-2 min-w-max 2xl:mx-5 text-white tracking-wider py-1 m-0 md:text-sm cursor-pointer"
          :class="index == selectedIndex ? 'border-b-2' : null"
          @click="selectTab(index)"
        >
          {{ tab.title }}
        </div>
        <button
          class="absolute right-2 mt-1 xl:hidden flex focus:outline-none"
          @click="nextNav"
        >
          <fa class="text-white text-2xl" :icon="faChevronRight" />
        </button>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
export default {
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [], // all of the tabs
    }
  },
  computed: {
    faChevronRight() {
      return faChevronRight
    },
    faChevronLeft() {
      return faChevronLeft
    },
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.selectTab(0)
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i
      })
    },
    nextNav() {
      // console.log(this.$refs.tabSection, 67)
      this.$refs.tabsSection.scrollBy({ top: 0, left: 100, behavior: 'smooth' })
    },
    prevNav() {
      this.$refs.tabsSection.scrollBy({
        top: 0,
        left: -100,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="css">
ul.tabs__header > li.tab__selected {
  border-bottom: 1px solid #fff;
}
</style>
