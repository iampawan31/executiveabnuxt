<template lang="html">
  <div class="tabs__dark">
    <div
      class="bg-gradient-to-r from-brand-gray-light to-brand-gray-medium-dark py-2"
    >
      <div class="container mx-auto overflow-x-auto flex justify-between">
        <div
          v-for="(tab, index) in tabs"
          :key="tab.title"
          class="mx-2 min-w-max text-white py-1 m-0 md:text-sm cursor-pointer"
          :class="index == selectedIndex ? 'border-b-2' : null"
          @click="selectTab(index)"
        >
          {{ tab.title }}
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [], // all of the tabs
    }
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
  },
}
</script>

<style lang="css">
ul.tabs__header > li.tab__selected {
  border-bottom: 1px solid #fff;
}
</style>
