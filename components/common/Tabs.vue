<template lang="html">
  <div class="tabs__dark text-black">
    <ul class="mx-auto">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        class="mx-2 text-white text-sm py-1 m-0 inline-block cursor-pointer"
        :class="index == selectedIndex ? 'tab__selected' : null"
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </li>
    </ul>
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
