<template>
  <header
    :class="
      isHomeRoute
        ? 'bg-transparent absolute w-full top-0 z-50'
        : 'bg-black fixed m-60'
    "
    class="sm:flex sm:justify-between sm:items-center sm:py-3 sm:px-4"
  >
    <div class="flex justify-between items-center py-3 px-4 sm:p-0">
      <div>
        <img class="h-6" src="~/assets/logo_white.png" alt="Executive AB" />
      </div>
      <div class="sm:hidden">
        <button
          type="button"
          :class="isHomeRoute ? 'text-white' : 'text-gray-300'"
          class="hover:text-white focus:text-white"
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
      class="px-4 pb-4 bt-2 sm:flex sm:p-0"
    >
      <NuxtLink
        to="/about-us"
        class="block text-white hover:bg-brand transition uppercase px-3 py-2 rounded-md text-sm font-medium"
      >
        About us
      </NuxtLink>

      <NuxtLink
        to="/how-it-works"
        class="block mt-1 text-white uppercase hover:bg-brand transition px-3 py-2 rounded-md text-sm font-medium sm:mt-0 sm:ml-2"
      >
        How it works
      </NuxtLink>

      <NuxtLink
        to="/request-vehicle"
        class="block mt-1 text-white uppercase hover:bg-brand transition px-3 py-2 rounded-md text-sm font-medium sm:mt-0 sm:ml-2"
      >
        Request vehicle
      </NuxtLink>

      <NuxtLink
        to="/contact-us"
        class="block mt-1 text-white uppercase hover:bg-brand transition px-3 py-2 rounded-md text-sm font-medium sm:mt-0 sm:ml-2"
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
  },
}
</script>
