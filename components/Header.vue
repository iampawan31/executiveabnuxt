<template>
  <header
    :class="
      isHomeRoute
        ? `${isMenuOpenOnHomeRoute} absolute w-full top-0 z-50 2xl:container 2xl:mx-auto`
        : 'bg-black relative'
    "
    class="lg:flex lg:justify-between lg:items-center sm:py-3 sm:px-4"
  >
    <div class="flex justify-between items-center py-3 px-4 sm:p-0">
      <NuxtLink to="/">
        <img class="h-12" src="~/assets/logo_white.png" alt="Executive AB" />
      </NuxtLink>
      <div class="lg:hidden flex content-center sm:flex-none">
        <button
          type="button"
          :class="isHomeRoute ? 'text-white' : 'text-gray-300'"
          class="hover:text-white focus:text-white focus:outline-none"
          aria-label="Menu Button"
          @click="isOpen = !isOpen"
        >
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              v-if="isOpen"
              d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
              fill="currentColor"
            />
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="px-4 pb-4 bt-2 lg:flex sm:p-0"
    >
      <div class="group">
        <div
          class="mt-1 dropdown text-white hover:border-white border-transparent border-b-2 transition lg:px-3 py-2 text-sm font-medium lg:mt-0 lg:ml-2 xl:ml-4"
        >
          <div class="text-white">
            About EAB
            <button class="lg:hidden focus:outline-none ml-2">
              <fa
                :icon="requestVehicleOpen ? faChevronUp : faChevronDown"
                @click.stop="requestVehicleOpen = !requestVehicleOpen"
              />
            </button>
          </div>
        </div>
        <ul
          :class="requestVehicleOpen ? 'block' : 'hidden'"
          class="lg:group-hover:block lg:hidden lg:absolute lg:text-gray-700 pt-1 z-50 top-12"
        >
          <li>
            <NuxtLink
              to="/about-us"
              class="rounded-t xl:pr-10 bg-gray-800 lg:text-white lg:bg-black lg:hover:text-gray-400 lg:bg-opacity-80 transition text-sm py-2 px-4 block whitespace-no-wrap"
            >
              About us
            </NuxtLink>
          </li>
          <li class="">
            <NuxtLink
              class="rounded-b xl:pr-10 bg-gray-800 lg:text-white lg:bg-black lg:hover:text-gray-400 lg:bg-opacity-80 transition text-sm py-2 px-4 block whitespace-no-wrap"
              to="/faqs"
              >FAQs</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="group">
        <div
          class="mt-1 dropdown text-white hover:border-white border-transparent border-b-2 transition lg:px-3 py-2 text-sm font-medium lg:mt-0 lg:ml-2 xl:ml-4"
        >
          <div>
            How EAB Works
            <button class="lg:hidden focus:outline-none ml-2">
              <fa
                :icon="howItWorksOpen ? faChevronUp : faChevronDown"
                @click="howItWorksOpen = !howItWorksOpen"
              />
            </button>
          </div>
        </div>
        <ul
          :class="howItWorksOpen ? 'block' : 'hidden'"
          class="lg:group-hover:block lg:hidden lg:absolute lg:text-gray-700 pt-1 z-50 top-12"
        >
          <li>
            <NuxtLink
              to="/how-it-works"
              class="rounded-t bg-gray-800 lg:text-white lg:bg-black lg:hover:text-gray-400 lg:bg-opacity-80 transition text-sm py-2 px-4 block whitespace-no-wrap"
            >
              How it works
            </NuxtLink>
          </li>
          <li class="">
            <NuxtLink
              class="bg-gray-800 lg:text-white lg:bg-black lg:hover:text-gray-400 lg:bg-opacity-80 transition text-sm py-2 px-4 block whitespace-no-wrap"
              to="/friends-and-family-program"
              >Friends & family program</NuxtLink
            >
          </li>
          <li class="">
            <NuxtLink
              class="bg-gray-800 lg:text-white lg:bg-black lg:hover:text-gray-400 lg:bg-opacity-80 transition py-2 text-sm px-4 block whitespace-no-wrap"
              to="/employee-benefits-program"
              >Employee benefits program</NuxtLink
            >
          </li>
          <li class="">
            <NuxtLink
              class="rounded-b bg-gray-800 lg:text-white lg:bg-black lg:hover:text-gray-400 lg:bg-opacity-80 transition text-sm py-2 px-4 block whitespace-no-wrap"
              to="/military-and-community-program"
              >Military & community program</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div
        class="block mt-1 text-white no-underline hover:border-white border-transparent border-b-2 transition lg:px-3 py-2 text-sm font-medium lg:mt-0 lg:ml-2 xl:ml-4"
      >
        <NuxtLink
          to="/request-vehicle"
          rel="noreferrer"
          class="text-white no-underline"
        >
          Request vehicle
        </NuxtLink>
      </div>
      <NuxtLink
        to="/contact-us"
        class="block mt-1 text-white hover:border-white border-transparent border-b-2 transition lg:px-3 py-2 text-sm font-medium lg:mt-0 lg:ml-2 xl:ml-4"
      >
        Contact us
      </NuxtLink>
    </div>
  </header>
</template>

<script>
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
export default {
  data() {
    return {
      isOpen: false,
      howItWorksOpen: false,
      requestVehicleOpen: false,
    }
  },
  computed: {
    isHomeRoute() {
      return this.$route.path === '/'
    },
    isMenuOpenOnHomeRoute() {
      return this.isHomeRoute && this.isOpen
        ? 'bg-black bg-opacity-100'
        : 'bg-transparent bg-opacity-100'
    },
    faChevronDown() {
      return faChevronDown
    },
    faChevronUp() {
      return faChevronUp
    },
  },
  watch: {
    '$route.path'(oldRoute, newRoute) {
      if (oldRoute !== newRoute) {
        this.isOpen = false
      }
    },
  },
}
</script>
