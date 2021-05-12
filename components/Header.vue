<template>
  <header
    :class="
      isHomeRoute
        ? `${isMenuOpenOnHomeRoute} absolute w-full top-0 z-50 2xl:container 2xl:mx-auto`
        : 'bg-black relative'
    "
    class="md:flex md:justify-between md:items-center sm:py-3 sm:px-4"
  >
    <div class="flex justify-between items-center py-3 px-4 sm:p-0">
      <NuxtLink to="/">
        <img class="h-6" src="~/assets/logo_white.png" alt="Executive AB" />
      </NuxtLink>
      <div class="md:hidden flex content-center sm:flex-none">
        <button
          type="button"
          :class="isHomeRoute ? 'text-white' : 'text-gray-300'"
          class="hover:text-white focus:text-white focus:outline-none"
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
      class="px-4 pb-4 bt-2 md:flex sm:p-0"
    >
      <NuxtLink
        to="/about-us"
        class="block text-white hover:border-white transition border-transparent border-b-2 lg:px-3 md:px-1 py-2 text-sm font-medium"
      >
        About us
      </NuxtLink>

      <div class="group">
        <NuxtLink
          to="/how-it-works"
          class="block mt-1 dropdown text-white hover:border-white border-transparent border-b-2 transition lg:px-3 md:px-1 py-2 text-sm font-medium md:mt-0 md:ml-2 xl:ml-4"
        >
          How it works
        </NuxtLink>
        <ul
          class="group-hover:block md:hidden md:absolute md:text-gray-700 pt-1 z-50 top-12"
        >
          <li class="">
            <NuxtLink
              class="rounded-t bg-gray-200 bg-opacity-20 md:bg-opacity-100 md:bg-gray-200 hover:bg-black hover:text-white transition text-sm py-2 px-4 block whitespace-no-wrap"
              to="/friends-and-family-program"
              >Friends and family program</NuxtLink
            >
          </li>
          <li class="">
            <NuxtLink
              class="bg-gray-200 bg-opacity-20 md:bg-opacity-100 md:bg-gray-200 hover:bg-black hover:text-white transition py-2 text-sm px-4 block whitespace-no-wrap"
              to="/employee-benefits-program"
              >Employee benefits program</NuxtLink
            >
          </li>
          <li class="">
            <NuxtLink
              class="rounded-b bg-gray-200 bg-opacity-20 md:bg-opacity-100 md:bg-gray-200 hover:bg-black hover:text-white transition text-sm py-2 px-4 block whitespace-no-wrap"
              to="/military-and-community-program"
              >Military and community program</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="group">
        <a
          href="https://forms.executiveab.com/ExecutiveAB/form/VehicleRequest1/formperma/ljV2tVecdl87E_wAsOY-BK5MvOaJW1QjLaoQNzYyWEM"
          class="block mt-1 text-white no-underline hover:border-white border-transparent border-b-2 transition lg:px-3 py-2 md:px-1 text-sm font-medium md:mt-0 md:ml-2 xl:ml-4"
        >
          Request vehicle
        </a>
        <ul
          class="group-hover:block md:hidden md:absolute md:text-gray-700 pt-1 z-50 top-12"
        >
          <li class="">
            <a
              class="rounded-t bg-gray-200 bg-opacity-20 md:bg-opacity-100 md:bg-gray-200 hover:bg-black hover:text-white transition text-sm py-2 px-4 block whitespace-no-wrap"
              href="#"
              >Request Powersports</a
            >
          </li>
          <li class="">
            <a
              class="bg-gray-200 bg-opacity-20 md:bg-opacity-100 md:bg-gray-200 hover:bg-black hover:text-white transition py-2 text-sm px-4 block whitespace-no-wrap"
              href="#"
              >Request Commercial/Fleet</a
            >
          </li>
          <li class="">
            <a
              class="rounded-b bg-gray-200 bg-opacity-20 md:bg-opacity-100 md:bg-gray-200 hover:bg-black hover:text-white transition text-sm py-2 px-4 block whitespace-no-wrap"
              href="#"
              >Request Maintenance/Parts</a
            >
          </li>
        </ul>
      </div>

      <NuxtLink
        to="/contact-us"
        class="block mt-1 text-white hover:border-white border-transparent border-b-2 transition lg:px-3 py-2 md:px-1 text-sm font-medium md:mt-0 md:ml-2 xl:ml-4"
      >
        Contact us
      </NuxtLink>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
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
