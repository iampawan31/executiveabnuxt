<template>
  <div>
    <section class="text-white relative">
      <HeroSection
        :main-header-image="mainHeaderImage"
        main-header-image-classes="bg-right sm:bg-center"
      >
        <div class="content float-left py-4 lg:px-5 my-5">
          <div
            class="heading mb-3 tracking-wide uppercase underline max-w-xs sm:max-w-lg lg:max-w-lg xl:max-w-lg font-bold text-2xl md:text-4xl filter drop-shadow-max"
          >
            LEARN HOW WE WORK FOR YOU
          </div>
          <div
            class="font-light leading-normal max-w-md filter drop-shadow-max"
          >
            Our process was designed to make buying the exact vehicle you want
            as enjoyable as actually driving it!
          </div>
        </div>
      </HeroSection>
    </section>
    <section class="bg-black transition">
      <div class="container mx-auto px-4 lg:pt-10 lg:px-10 xl:px-0 xl:py-0">
        <div
          class="flex flex-col space-y-8 lg:space-y-0 md:flex-row items-center"
        >
          <div class="flex-1 lg:max-w-2xl">
            <img src="~/assets/images/how_it_works_section_one.jpeg" alt="" />
          </div>
          <div
            class="flex flex-1 flex-col md:content-center md:flex-wrap md:justify-center md:mx-auto"
          >
            <div class="text-brand uppercase text-lg mb-3">
              NEVER COMPROMISE AGAIN
            </div>
            <div class="text-white text-3xl font-semibold uppercase mb-5">
              FINDING YOUR PERFECT VEHICLE
            </div>
            <div class="text-gray-300 pb-5 lg:pb-16 max-w-xl">
              Unlike traditional dealerships and car-buying websites, we do not
              stock any inventory. Because of this, we have no bias or agenda to
              sell you a vehicle that does not fit the exact packages, options,
              or interior / exterior colors of the vehicle you are wanting to
              purchase. By utilizing our exclusive manufacturer relationships we
              are able to help find the car that fits your requirements.
            </div>
          </div>
        </div>
        <div class="flex flex-col place-items-center justify-center mx-auto">
          <div class="uppercase text-brand pb-4">Learn more</div>
          <button
            class="rounded-full h-12 w-12 flex items-center focus:outline-none justify-center -mb-5 bg-brand-gray-dark z-50"
            @click="sectionOneVisible = !sectionOneVisible"
          >
            <fa
              class="text-brand text-2xl"
              :icon="sectionOneVisible ? faChevronUp : faChevronDown"
            />
          </button>
        </div>
      </div>
    </section>
    <transition name="fade">
      <section v-show="sectionOneVisible" class="bg-white text-black py-16">
        <Features>
          <Feature>
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/binoculars.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title">
              ACCESS TO MILLIONS OF VEHICLES
            </template>
            <template slot="feature-description">
              <div class="mb-4">
                Our database and account access with the manufacturers allows us
                to view real-time inventory of millions of vehicles available
                for direct purchase nationwide. The listings we have access to
                includes vehicles you will not see listed online through popular
                sites such as Autotrader, or on dealership websites.
              </div>
              <div class="mb-4">
                When we locate a vehicle that meets both your specifications and
                our condition standards we send you the vehicle spec sheet which
                includes pictures of the vehicle, all included equipment and
                packages, and everything else you need to decide if it’s the
                perfect car for you.
              </div>
            </template>
          </Feature>
          <hr class="my-16 border-gray-400" />
          <Feature>
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/dollar-sign.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title">
              HOW OUR SERVICE IS COST FREE
            </template>
            <template slot="feature-description">
              <div class="mb-4">
                Since we do not have a traditional buy-sell business model, as
                found in franchise dealerships and online dealerships, this
                means we don’t have any of the high costs of doing business that
                come with them. This allows us to be able to provide our service
                for free.
              </div>
              <div class="mb-4">
                When you buy a vehicle from us we are not marking up the vehicle
                at all, but rather giving you the manufacturer direct pricing.
                The manufacturer in turn pays us for helping to facilitate the
                transaction.
              </div>
            </template>
          </Feature>
          <hr class="my-16 border-gray-400" />
          <Feature>
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/trophy.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title">
              HOW WE GET YOU THE BEST PRICE
            </template>
            <template slot="feature-description">
              <div class="mb-4">
                Since we are not in the business of flipping cars for profit,
                but rather helping people find the vehicle they want, the
                pricing we get from the manufacturer is the price that you get.
              </div>
              <div class="mb-4">
                This haggle-free pricing beats the dealerships and buying
                programs (like Truecar) because instead of you negotiating your
                way down from MSRP to hopefully land near invoice, we are
                already getting invoice pricing (or in some cases slightly
                above) for you.
              </div>
            </template>
          </Feature>
        </Features>
      </section>
    </transition>
    <section class="bg-black py-10">
      <div class="container mx-auto px-4 lg:px-10 xl:px-0 pt-10">
        <div class="flex flex-col md:flex-row items-center">
          <div
            class="flex flex-1 flex-col content-center flex-wrap justify-center mx-auto"
          >
            <div class="text-brand uppercase text-lg mb-3">
              PURCHASING MADE EASY
            </div>
            <div
              class="text-white text-3xl font-semibold uppercase mb-5 md:max-w-xl"
            >
              PAY FOR YOUR VEHICLE THE WAY YOU WANT
            </div>
            <div class="text-gray-300 pb-16 max-w-xl">
              Since we do not have arrangements or affiliations with any
              lenders, how you finance or want to pay for your vehicle is
              completely up to you. We will work with your lender of choice or
              facilitate a funds transfer to make sure that the vehicle you want
              is yours.
            </div>
          </div>
          <div class="flex-1 lg:max-w-2xl">
            <img src="~/assets/images/how_it_works_section_two.jpeg" alt="" />
          </div>
        </div>
        <div
          class="flex flex-col mt-5 place-items-center justify-center mx-auto"
        >
          <div class="uppercase text-brand pb-4">Learn more</div>
          <button
            class="rounded-full h-12 w-12 flex items-center focus:outline-none justify-center -mb-5 bg-brand-gray-dark z-50"
            @click="sectionTwoVisible = !sectionTwoVisible"
          >
            <fa
              class="text-brand text-2xl"
              :icon="sectionTwoVisible ? faChevronUp : faChevronDown"
            />
          </button>
        </div>
      </div>
    </section>
    <transition name="fade">
      <section v-show="sectionTwoVisible" class="bg-white text-black py-16">
        <Features>
          <Feature>
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/contract-sign.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title">
              LET US HANDLE THE DETAILS
            </template>
            <template slot="feature-description">
              <div class="mb-4">
                We take care of all the necessary paperwork to help your
                purchase finalize as soon as possible. This includes all DMV
                paperwork such as title, transfer of ownership, and vehicle
                registration.
              </div>
              <div class="mb-4">
                If you are interested in any after-purchase products such as
                extended warranties we are able to help facilitate these
                transactions directly with manufacturers or trusted vendors.
              </div>
            </template>
          </Feature>
          <hr class="my-16 border-gray-400" />
          <Feature>
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/cash-contract.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title"> PAY WITH CASH OR FINANCE </template>
            <template slot="feature-description">
              <div class="mb-4">
                Choose from paying with cash via bank account transfer, or use
                any lender of your choice to complete the sale. If you would
                like to use the manufacturer to finance your purchase we are
                able to arrange financing directly with them (if qualified) so
                that you may take advantage of all the special financing terms
                being offered by the manufacturers (Example: 0% APR - 60
                months).
              </div>
              <div class="mb-4">
                If you need help finding a trusted lender we will gladly point
                you in the right direction of lenders our past clients have
                worked with that offer competitive rates, however, we do not
                have any affiliation with them.
              </div>
              <div class="mb-4">
                If you need help finding a trusted lender we will gladly point
                you in the right direction of lenders our past clients have
                worked with that offer competitive rates, however we do not have
                any affiliation with them.
              </div>
            </template>
          </Feature>
          <hr class="my-16 border-gray-400" />
          <Feature>
            <template slot="feature-image"
              ><img
                src="~/assets/images/icons/trade-in.png"
                class="h-14 md:h-16"
                alt=""
            /></template>
            <template slot="feature-title"> HAVE A TRADE-IN? </template>
            <template slot="feature-description">
              <div class="mb-4">
                If you have a vehicle you are looking to trade-in during your
                purchase we will assist in accommodating your trade-in. For
                certain scenarios, we also have the ability to sell your car for
                you via consignment to help you earn top dollar for your
                vehicle. In the highly unlikely scenario where we are unable to
                help with a trade-in, we will make sure all of the best
                available options are presented to you.
              </div>
            </template>
          </Feature>
        </Features>
      </section>
    </transition>
    <section class="bg-black py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col justify-center">
          <div class="flex flex-col mx-auto">
            <div class="text-brand md:text-center uppercase text-lg mb-3">
              CPO QUALITY VEHICLES WITHOUT THE PRICE
            </div>
            <div
              class="text-white md:text-center text-3xl font-semibold uppercase mb-5"
            >
              EAB 360° SMART INSPECTION PROCESS
            </div>
            <div class="text-gray-300 pb-16 max-w-4xl">
              Before we ever send you a pre-owned vehicle to consider purchasing
              we cross-reference manufacturer data with several other reports
              such as CARFAX, AutoCheck, &
              <a
                href="https://vehiclehistory.bja.ojp.gov/"
                target="_blank"
                class=""
                >NMVTIS</a
              >
              to make sure it is accident-free and has up-to-date maintenance
              records. Additionality, each vehicle is run through the same
              inspection as a Certified Pre-Owned Vehicle. During the
              <span class="text-brand">100+ point inspection</span>
              and reconditioning, everything on the vehicle including cosmetics,
              tires, breaks, all engine components, and electronics are tested
              for functionality and are replaced if they are not in the proper
              condition. We will not sell any vehicle that does not meet our
              inspection and reconditioning standards.
            </div>
          </div>
          <div class="flex hidden lg:block">
            <img
              src="~/assets/images/how_it_works_section_three.jpeg"
              alt="car inspection"
            />
          </div>
        </div>
      </div>
      <div class="relative lg:hidden">
        <img
          src="~/assets/images/how-it-works-inspection-mobile.png"
          alt="car inspection"
        />
      </div>
      <div
        class="transition w-full h-full bg-cover optimize-bg-image bg-opacity-90 lg:hidden bg-no-repeat"
        :style="howItWorksInspectionBgImage"
      >
        <div class="px-4 sm:px-0 md:px-4 py-8 mb-8 sm:container sm:mx-auto">
          <ul class="tab-section list-outside grid grid-cols-2 gap-2">
            <li
              v-for="(inspection, index) in inspectionList"
              :key="index"
              class="text-sm"
            >
              {{ inspection }}
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 mt-4 sm:justify-end mx-4 sm:mx-10 sm:space-x-4"
      >
        <div class="text-xs max-w-xs border-gray-400 border p-1">
          All inspections are performed by licensed professional auto
          technicians.
        </div>
        <div>
          <img
            class="h-10 bg-white p-1 rounded"
            src="~assets/images/autocheck_from_experian.png"
            alt="Autocheck from experian"
          />
        </div>
        <div>
          <img
            class="h-10"
            src="~assets/images/carfax_logo.png"
            alt="Carfac logo"
          />
        </div>
      </div>
    </section>
    <section class="bg-brand-grayAlternate text-white py-16">
      <CallToAction
        title="NEED MORE INFORMATION?"
        subtitle="VISIT OUR FAQs PAGE"
        button-text="FAQS"
        button-link="/faqs"
      />
    </section>
  </div>
</template>

<script>
import bgMainHeader from 'assets/images/how_it_works_header.jpeg'
import bgSectionHeader from 'assets/images/how_it_works_section_one.jpeg'
import bgHowItWorksInspectionImage from 'assets/images/how-it-works-popup.jpeg'
import {
  faChevronDown,
  faChevronUp,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import CallToAction from '~/components/CallToAction'
import Feature from '~/components/common/Feature'
import Features from '~/components/common/Features'
import HeroSection from '~/components/common/HeroSection'

export default {
  transitions: 'fade',
  components: {
    CallToAction,
    Feature,
    Features,
    HeroSection,
  },
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
      sectionHeaderImage: { backgroundImage: `url(${bgSectionHeader})` },
      howItWorksInspectionBgImage: {
        backgroundImage: `url(${bgHowItWorksInspectionImage})`,
      },
      sectionOneVisible: false,
      sectionTwoVisible: false,
      inspectionList: [
        'VIN Verification',
        'Underhood/Fluids',
        'Unibody (Frame)',
        'Front Interior',
        'Under Vehicle',
        'Rear Interior',
        'Replacement Items',
        'Front Exterior',
        'Road Test',
        'Rear Exterior',
        'Brakes/ Wheels/ Tires',
        'Documentation/ Keys/ Manuals',
      ],
    }
  },
  head: {
    title: 'How It Works - Executive',
  },
  computed: {
    faChevronUp() {
      return faChevronUp
    },
    faChevronDown() {
      return faChevronDown
    },
    faInfoCircle() {
      return faInfoCircle
    },
  },
}
</script>

<style scoped>
ul.tab-section {
  list-style: none;
  list-style-position: outside;
}

ul.tab-section li {
  padding-left: 25px;
  text-indent: -25px;
}

ul.tab-section li:before {
  content: '✓';
  color: lightgreen;
  font-size: 1.1em;
  margin-right: 0.6em;
}
</style>
