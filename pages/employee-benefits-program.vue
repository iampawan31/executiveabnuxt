<template>
  <div>
    <section class="text-white relative">
      <div
        class="min-h-screen hero-image bg-center bg-cover flex"
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
    <section class="bg-black pt-16">
      <div
        class="flex flex-col place-items-center justify-center mx-auto max-w-4xl"
      >
        <div class="text-brand uppercase text-lg mb-3">
          EAB SERVICE AS A BENEFIT
        </div>
        <div class="text-white text-3xl font-semibold uppercase mb-5">
          EXCLUSIVE AUTO PURCHASING PROGRAM
        </div>
        <div class="text-gray-300 pb-24">
          We partner with your organization for free so you may offer an
          auto-purchasing program as part of your benefits package. By doing so
          you give your staff access to utilize our unique cost-free vehicle
          purchasing service, allowing them to find their perfect car while
          saving time and money. It is a win-win!
        </div>
        <div class="uppercase text-brand mb-4">Learn more</div>
        <a
          href="#aboutEmployeeBenefitsProgram"
          class="rounded-full h-12 w-12 flex items-center justify-center -mb-5 bg-brand-gray-dark"
        >
          <fa class="text-brand text-2xl" :icon="faChevronDown" />
        </a>
      </div>
    </section>
    <section
      id="aboutEmployeeBenefitsProgram"
      class="bg-white text-black py-16"
    >
      <div class="container mx-auto py-16">
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <fa class="text-8xl text-brand" :icon="faBuilding" />
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
            <fa class="text-8xl text-brand" :icon="faMobile" />
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
            <fa class="text-8xl text-brand" :icon="faHandHoldingUsd" />
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
              <span class="text-brand">
                { ' That’s right, we are a free benefit for your organization
                that actually pays you! ' }
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-10 my-10 gap-4">
          <div class="col-span-1">
            <fa class="text-8xl text-brand" :icon="faGraduationCap" />
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
    <section class="bg-brand-grayAlternate text-white py-16">
      <CallToAction
        title="Ready to get started?"
        subtitle="START YOUR VEHICLE REQUEST"
        button-text="Get Started"
      />
    </section>
  </div>
</template>

<script>
import bgMainHeader from 'assets/images/employee_benefits_header.jpg'
import {
  faBuilding,
  faChevronDown,
  faGraduationCap,
  faHandHoldingUsd,
  faMobile,
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
    }
  },
  computed: {
    faBuilding() {
      return faBuilding
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
    faMobile() {
      return faMobile
    },
  },
}
</script>
