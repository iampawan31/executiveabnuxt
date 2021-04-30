<template>
  <div>
    <section class="text-white relative">
      <div
        class="min-h-screen max-h-screen bg-center bg-cover flex"
        :style="mainHeaderImage"
      >
        <div class="relative container mx-auto p-4 flex items-center z-10">
          <div>
            <div class="content float-left py-4 px-5 my-5">
              <div
                class="heading mb-3 tracking-wide uppercase underline max-w-xl font-bold text-2xl md:text-4xl"
              >
                LEARN HOW WE WORK FOR YOU
              </div>
              <div
                class="text-lg font-light leading-normal hidden max-w-md sm:block"
              >
                Our process was designed to make buying the exact vehicle you
                want as enjoyable as actually driving it!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black transition">
      <div class="container mx-auto">
        <div class="flex">
          <div class="flex-1 max-w-2xl">
            <img src="~/assets/images/how_it_works_section_one.jpeg" alt="" />
          </div>
          <div
            class="flex flex-1 flex-col content-center flex-wrap justify-center mx-auto"
          >
            <div class="text-brand uppercase text-lg mb-3">
              EAB SERVICE AS A BENEFIT
            </div>
            <div class="text-white text-3xl font-semibold uppercase mb-5">
              EXCLUSIVE AUTO PURCHASING PROGRAM
            </div>
            <div class="text-gray-300 pb-16 max-w-xl">
              We partner with your organization for free so you may offer an
              auto-purchasing program as part of your benefits package. By doing
              so you give your staff access to utilize our unique cost-free
              vehicle purchasing service, allowing them to find their perfect
              car while saving time and money. It is a win-win!
            </div>
          </div>
        </div>
        <div class="flex flex-col place-items-center justify-center mx-auto">
          <div class="uppercase text-brand pb-4">Learn more</div>
          <button
            class="rounded-full h-12 w-12 flex items-center focus:outline-none justify-center -mb-5 bg-brand-gray-dark"
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
    <section
      :class="sectionOneVisible ? 'block' : 'hidden'"
      class="bg-white text-black py-16 transition"
    >
      <div class="container mx-auto py-16">
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div-one">
              <fa class="text-8xl text-brand" :icon="faBinoculars" />
            </div>
          </div>
          <div class="col-span-3 text-3xl uppercase font-semibold">
            ACCESS TO MILLIONS OF VEHICLES
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              Our database and account access with the manfucatorers allows us
              to view real time inventory of millions of vehicles available for
              direct purchase nationwide. The listings we have access to
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
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div-one">
              <fa class="text-8xl text-brand" :icon="faDollarSign" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            HOW OUR SERVICE IS COST FREE
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              Since we do not have a traditional buy-sell business model, as
              found in franchise dealerships and online dealerships, this means
              we don’t have any of the high costs of doing business that come
              with them. This allows us to be able to provide our service for
              free.
            </div>
            <div class="mb-4">
              When you buy a vehicle from us we are not marking up the vehicle
              at all, but rather giving you the manfucatorer direct pricing. The
              manufacturer in turn pays us for helping to facilitate the
              transaction.
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div-one">
              <fa class="text-8xl text-brand" :icon="faTrophy" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            HOW WE GET YOU THE BEST PRICE
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              Since we are not in the business of flipping cars for profit, but
              rather helping people find the vehicle they want, the pricing we
              get from the manfucatorer is the price that you get.
            </div>
            <div class="mb-4">
              This haggle-free pricing beats the dealerships and buying programs
              like Truecar because instead of you negotiating your way down from
              MSRP to hopefully land near invoice, we are already getting
              invoice pricing (or in some cases slightly above) for you.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black py-10">
      <div class="container mx-auto">
        <div class="flex">
          <div
            class="flex flex-1 flex-col content-center flex-wrap justify-center mx-auto"
          >
            <div class="text-brand uppercase text-lg mb-3">
              PURCHASING MADE EASY
            </div>
            <div class="text-white text-3xl font-semibold uppercase mb-5">
              PAY FOR YOUR VEHICLE THE WAY YOU WANT
            </div>
            <div class="text-gray-300 pb-16 max-w-xl">
              Since we do not have arrangements or affilitations with any
              lenders, how you finance or want to pay for your vehicle is
              completely up to you. We will work with your lender of choice or
              facilitate a funds transfer to make sure that the vehicle you want
              is yours.
            </div>
          </div>
          <div class="flex-1 max-w-2xl">
            <img src="~/assets/images/how_it_works_section_two.jpeg" alt="" />
          </div>
        </div>
        <div class="flex flex-col place-items-center justify-center mx-auto">
          <div class="uppercase text-brand pb-4">Learn more</div>
          <button
            class="rounded-full h-12 w-12 flex items-center focus:outline-none justify-center -mb-5 bg-brand-gray-dark"
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
    <section
      :class="sectionTwoVisible ? 'block' : 'hidden'"
      class="bg-white text-black py-16"
    >
      <div class="container mx-auto py-16">
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div-two">
              <fa class="text-8xl text-brand" :icon="faFile" />
            </div>
          </div>
          <div class="col-span-3 text-3xl uppercase font-semibold">
            LET US HANDLE THE DETAILS
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              We take care of all the necessary paperwork to help your purchase
              finalize as soon as possible. This includes all DMV paperwork such
              as title, transfer of ownership, and vehicle registration.
            </div>
            <div class="mb-4">
              If you are interested in any after purchase products such as
              extended warranties we are able to help facilitate these
              transactions directly with manufacturors or trusted vendors.
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div-two">
              <fa class="text-8xl text-brand" :icon="faMoneyCheckAlt" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            PAY WITH CASH OR FINANCE
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              Choose from paying with cash via bank account transfer, or use any
              lender of your choice to complete the sale. If you would like to
              use the manufacturer to finance your purchase we are able to
              arrange financing directly with them (if qualified) so that you
              may take advantage of all the special financing terms being
              offered by the manufacturers (Example: 0% APR - 60 months).
            </div>
            <div class="mb-4">
              We do not, and never will, offer in house financing options as we
              do not want to conduct business in the way of a dealership. Since
              dealerships ussually have “preferred lenders” they work with,
              there is an incentive for them to push clients towards certain
              lenders or loan types which will earn them more incentive pay.
            </div>
            <div class="mb-4">
              If you need help finding a trusted lender we will gladly point you
              in the right direction of lenders our past clients have worked
              with that offer competitive rates, however we do not have any
              affiliation with them.
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div-two">
              <fa class="text-8xl text-brand" :icon="faKey" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">HAVE A TRADE-IN?</div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              If you have a vehicle you are looking to trade-in during your
              purchase we will assist in accomodating your trade-in. For certain
              scenarios, we also have the ability to sell your car for you via
              consignment to help you earn top dollar for your vehicle. In the
              highly unlikely scenario where we are unable to help with a
              trade-in, we will make sure all of the best available options are
              presented to you.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black py-16">
      <div class="container mx-auto">
        <div class="flex flex-col justify-center">
          <div class="flex flex-col mx-auto">
            <div class="text-brand text-center uppercase text-lg mb-3">
              EAB SERVICE AS A BENEFIT
            </div>
            <div
              class="text-white text-center text-3xl font-semibold uppercase mb-5"
            >
              EXCLUSIVE AUTO PURCHASING PROGRAM
            </div>
            <div class="text-gray-300 pb-16 max-w-4xl">
              Before we ever send you a pre-owned vehicle to consider purchasing
              we cross-reference manufacturor data with several other reports
              such as CARFAX, AutoCheck, &
              <span class="underline">NMVTIS</span> to make sure it is accident
              free and has up-to-date maintenance records. Additionality, each
              vehicle is run through the same inspection as a Certified
              Pre-Owned Vehicle. During the
              <span class="text-brand">100+ point inspection</span> everything
              on the vehicle including cosmetics, tires, breaks, all engine
              components, and electronics are tested for functionality and are
              replaced if they are not in the proper condition. We will not sell
              any vehicle that does not meet our inspection standards.
            </div>
          </div>
          <div class="flex">
            <img src="~/assets/images/how_it_works_section_three.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div class="flex justify-end mx-10 space-x-4">
        <div class="text-xs max-w-xs border-gray-400 border p-1">
          All inspections are performed by licensed professional auto
          technicians.
        </div>
        <img
          class="h-10 bg-white p-1 rounded"
          src="~assets/images/autocheck_from_experian.png"
          alt="Autocheck from experian"
        />
        <img
          class="h-10"
          src="~assets/images/carfax_logo.png"
          alt="Carfac logo"
        />
      </div>
    </section>
    <section class="bg-brand-grayAlternate text-white py-16">
      <CallToAction
        title="NEED MORE INFORMATION?"
        subtitle="VISIT OUR FAQs PAGE"
        button-text="FAQS"
      />
    </section>
    <svg width="0" height="0">
      <linearGradient id="lgrad" x1="100%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style="stop-color: rgb(9, 223, 232); stop-opacity: 1"
        />
        <stop
          offset="100%"
          style="stop-color: rgb(27, 176, 126); stop-opacity: 1"
        />
      </linearGradient>
    </svg>
    <svg width="0" height="0">
      <linearGradient id="lgradOne" x1="100%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style="stop-color: rgb(113, 236, 10); stop-opacity: 1"
        />
        <stop
          offset="100%"
          style="stop-color: rgb(141, 172, 24); stop-opacity: 1"
        />
      </linearGradient>
    </svg>
  </div>
</template>

<script>
import bgMainHeader from 'assets/images/how_it_works_header.jpeg'
import bgSectionHeader from 'assets/images/how_it_works_section_one.jpeg'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import {
  faChevronDown,
  faChevronUp,
  faBinoculars,
  faDollarSign,
  faTrophy,
  faMoneyCheckAlt,
  faKey,
} from '@fortawesome/free-solid-svg-icons'
import CallToAction from '~/components/CallToAction'
export default {
  transitions: 'fade',
  components: {
    CallToAction,
  },
  data() {
    return {
      mainHeaderImage: { backgroundImage: `url(${bgMainHeader})` },
      sectionHeaderImage: { backgroundImage: `url(${bgSectionHeader})` },
      sectionOneVisible: false,
      sectionTwoVisible: false,
    }
  },
  head: {
    title: 'Executive - How It Works',
  },
  computed: {
    faFile() {
      return faFile
    },
    faChevronUp() {
      return faChevronUp
    },
    faChevronDown() {
      return faChevronDown
    },
    faBinoculars() {
      return faBinoculars
    },
    faDollarSign() {
      return faDollarSign
    },
    faTrophy() {
      return faTrophy
    },
    faMoneyCheckAlt() {
      return faMoneyCheckAlt
    },
    faKey() {
      return faKey
    },
  },
}
</script>

<style scoped>
.parent-div-one svg * {
  fill: url(#lgrad);
}

.parent-div-two svg * {
  fill: url(#lgradOne);
}
</style>
