<template>
  <div>
    <section class="text-white relative">
      <div
        class="min-h-screen lg:min-h-full lg:py-48 hero-image bg-center bg-cover flex"
        :style="mainHeaderImage"
      >
        <div class="relative container mx-auto p-4 flex items-center z-10">
          <div>
            <div class="content float-left py-4 px-5 my-5">
              <div
                class="heading mb-3 tracking-wide uppercase underline max-w-xl font-bold text-2xl md:text-4xl"
              >
                OFFER OUR SERVICES AS AN AMAZING BENEFIT FOR YOUR STAFF
              </div>
              <div
                class="text-lg font-light leading-normal hidden max-w-md sm:block"
              >
                It costs nothing for your organization to partner with us, and
                provides your staff with a one-of-a-kind benefit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black pt-16" :style="secondSectionBgImage">
      <div
        class="flex flex-col place-items-center justify-center mx-auto max-w-4xl"
      >
        <div class="text-brand uppercase text-lg mb-3 pt-10">
          EAB SERVICE AS A BENEFIT
        </div>
        <div class="text-white text-3xl font-semibold uppercase mb-5">
          EXCLUSIVE AUTO PURCHASING PROGRAM
        </div>
        <div class="text-gray-300 pb-28">
          We partner with your organization for free so you may offer an
          auto-purchasing program as part of your benefits package. By doing so
          you give your staff access to utilize our unique cost-free vehicle
          purchasing service, allowing them to find their perfect car while
          saving time and money. It is a win-win!
        </div>
        <div class="uppercase text-brand mb-4">Learn more</div>
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
    </section>
    <section
      :class="sectionOneVisible ? 'block' : 'hidden'"
      class="bg-white text-black py-16"
    >
      <div class="container mx-auto py-16">
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div">
              <fa class="text-8xl text-brand" :icon="faBuilding" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            HOW IT WORKS FOR YOUR ORGANIZATION
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              Getting set-up with us is simple. We setup a personalized link for
              your staff to utilize if they are interested in our service.
              Depending on the size of your organization we may assign a
              dedicated Executive Concierge or a team to spefically handle your
              account.
            </div>
            <div class="mb-4">
              We then work with your HR department to provide any collateral or
              materials your organization deems neccessary. If you currently
              work with a company that handles a benefit portal for you, we will
              work with them to get your material implemented.
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div">
              <fa class="text-8xl text-brand" :icon="faMobileAlt" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            HOW IT WORKS FOR YOUR STAFF
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              Your staff simply utilizes the link we have provided for your
              organization to learn more about our service, or if they are ready
              to make a purchase submit a vehicle request. That’s it! We take
              over from there.
            </div>
            <div class="mb-4">
              We help your staff find the perfect vehicle they are searching
              for, get them the best vehicle for the best price, handle all of
              their neccessary paperwork, and have it delivered wherever they
              want - all without any cost to them!
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div">
              <fa class="text-8xl text-brand" :icon="faHandHoldingUsd" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            YOU EARN WHEN WE EARN
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              On top of setting up and giving access to our service to your
              staff free of cost, we also make sure that your organization
              financially benefits from our service. Anytime a member of your
              staff purchases a vehicle through our service, you will recieve a
              pay-out from us.
              <span class="text-brand mx-1">
                That’s right, we are a free benefit for your organization that
                actually pays you!
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <div class="parent-div">
              <fa class="text-8xl text-brand" :icon="faGraduationCap" />
            </div>
          </div>
          <div class="col-span-3 text-3xl font-semibold">
            VEHICLE PURCHASING EDUCATION
          </div>
          <div></div>
          <div class="col-span-5">
            <div class="mb-4">
              One of the passions that drives our business is a love for
              educating and helping people not only getting the best deal
              possible on a vehicle, but also making sure they are making sound
              decisions and understand the process.
            </div>
            <div class="mb-4">
              If you need additional resources or would like our help in
              providing vehicle purchasing education for your staff we are
              available. Whether that means attending a staff event, hosting a
              zoom call, or just answering questions your staff has - we can
              handle it.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black py-16">
      <div class="container mx-auto">
        <div class="flex flex-col content-center justify-center">
          <div class="text-brand text-center mb-4">WHY PARTNER WITH US?</div>
          <div class="text-center text-white text-3xl font-semibold mb-4">
            YOUR STAFF DESERVES GREAT BENEFITS
          </div>
          <div class="text-gray-300 max-w-4xl mx-auto">
            Our service is designed to make people’s lives easier when it comes
            time to purchase a vehicle. By partnering with us you can make sure
            that your staff is well taken care during, what for many will be,
            the biggest purchase they will make outside of a home.
          </div>
        </div>
        <div class="flex max-w-4xl mx-auto mt-36 mb-24 space-x-20">
          <div
            class="px-6 py-20 bg-contain bg-no-repeat"
            :style="benefitOneImage"
          >
            <div class="text-lg text-white font-semibold">
              Increase employee retention
            </div>
            <div class="text-gray-300 text-sm">
              One of the significant contributing factors of voluntary employee
              turn-over has been attributed to lack of benefits with their
              current employer.
            </div>
          </div>
          <div
            class="px-6 py-20 bg-contain bg-no-repeat"
            :style="benefitTwoImage"
          >
            <div class="text-lg text-white font-semibold">
              Increase productivity & engagement
            </div>
            <div class="text-gray-300 text-sm">
              Studies have shown that organizations that offer enchanced
              benefits to their staff have higher overall employee satisfaction
              ratings.
            </div>
          </div>
          <div
            class="px-6 py-20 bg-contain bg-no-repeat"
            :style="benefitThreeImage"
          >
            <div class="text-lg text-white font-semibold">
              Attract great talent
            </div>
            <div class="text-gray-300 text-sm">
              By offering amazing and unique benefits organizations can
              establish a competitive edge in recruiting over their competition.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-brand-grayAlternate text-white py-16">
      <CallToAction
        title="Ready to get started?"
        subtitle="START YOUR VEHICLE REQUEST"
        button-text="Get Started"
      />
    </section>
    <svg width="0" height="0">
      <linearGradient id="lgrad" x1="100%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style="stop-color: rgb(199, 21, 133); stop-opacity: 1"
        />
        <stop
          offset="100%"
          style="stop-color: rgb(255, 140, 0); stop-opacity: 1"
        />
      </linearGradient>
    </svg>
  </div>
</template>

<script>
import bgMainHeader from 'assets/images/employee_benefits_header.jpeg'
import secondSectionBgImage from 'assets/images/employee-benefits-program/second-section-bg-image.jpeg'
import benefitOneImage from 'assets/images/employee-benefits-program/increase-employee-retention.jpeg'
import benefitTwoImage from 'assets/images/employee-benefits-program/increased-productivity-and-engagement.jpeg'
import benefitThreeImage from 'assets/images/employee-benefits-program/attract-great-talent.jpeg'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import {
  faChevronUp,
  faChevronDown,
  faGraduationCap,
  faHandHoldingUsd,
  faMobileAlt,
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
      secondSectionBgImage: { backgroundImage: `url(${secondSectionBgImage})` },
      benefitOneImage: { backgroundImage: `url(${benefitOneImage})` },
      benefitTwoImage: { backgroundImage: `url(${benefitTwoImage})` },
      benefitThreeImage: { backgroundImage: `url(${benefitThreeImage})` },
      sectionOneVisible: false,
    }
  },
  head: {
    title: 'Executive - Employee Benefits Program',
  },
  computed: {
    faBuilding() {
      return faBuilding
    },
    faChevronUp() {
      return faChevronUp
    },
    faChevronDown() {
      return faChevronDown
    },
    faGraduationCap() {
      return faGraduationCap
    },
    faHandHoldingUsd() {
      return faHandHoldingUsd
    },
    faMobileAlt() {
      return faMobileAlt
    },
  },
}
</script>

<style scoped>
.parent-div svg * {
  fill: url(#lgrad);
}
</style>
