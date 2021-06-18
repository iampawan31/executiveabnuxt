<template>
  <div>
    <HeroSectionAlternate :main-header-image="mainHeaderImage">
      <template slot="title">// FAQs</template>
      <template slot="subtitle"
        >Learn more about the details of how our service works through
        frequently asked questions.</template
      >
    </HeroSectionAlternate>
    <section class="bg-white text-black py-12 px-5 2xl:px-0">
      <div class="container mx-auto xl:px-32">
        <div v-for="(faq, index) in faqs" :key="index" class="mb-14">
          <div class="text-2xl xl:text-3xl mb-4 font-semibold">
            {{ faq.title }}
          </div>
          <Accordion :items="faq.faqs" class="shadow-md" :default-index="-1">
            <template #title="{ item }">
              <div class="font-semibold">{{ item.title }}</div>
            </template>
            <template #content="{ item }">
              <!-- eslint-disable vue/no-v-html -->
              <div v-html="item.content"></div>
              <!--eslint-enable-->
            </template>
          </Accordion>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Accordion from '@dzangolab/vue-accordion'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import bgMainHeader from 'assets/images/faqs_header.jpeg'
import { faqs } from '../data/faqs'
import HeroSectionAlternate from '~/components/common/HeroSectionAlternate'
import '@dzangolab/vue-accordion/dist/accordion.css'

export default {
  transitions: 'fade',
  components: { HeroSectionAlternate, Accordion },
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
      faqs,
    }
  },
  head: {
    title: 'FAQs - Executive',
  },
  computed: {
    faChevronRight() {
      return faChevronRight
    },
  },
}
</script>

<style>
.c-accordion .c-accordion__item.-active .c-accordion__title {
  background-color: #191919 !important;
  color: #eaa068;
}
</style>
