<template>
  <div>
    <section class="text-white relative">
      <HeroSection
        :main-header-image="mainHeaderImage"
        main-header-image-classes="bg-center"
      >
        <div class="content float-left py-4 lg:px-5 my-5">
          <div
            class="heading mb-3 tracking-wide uppercase underline max-w-xs sm:max-w-lg lg:max-w-lg xl:max-w-lg font-bold text-2xl md:text-4xl filter drop-shadow-max"
          >
            OFFER OUR SERVICES AS AN AMAZING BENEFIT FOR YOUR STAFF
          </div>
          <div
            class="font-light leading-normal max-w-md filter drop-shadow-max"
          >
            It costs nothing for your organization to partner with us, and
            provides your staff with a one-of-a-kind benefit.
          </div>
        </div>
      </HeroSection>
    </section>
    <section
      class="bg-black lg:pt-16 optimize-bg-image bg-cover"
      :style="secondSectionBgImage"
    >
      <div
        class="flex flex-col md:place-items-center md:justify-center sm:mx-auto px-4 sm:px-10 lg:px-0 md:max-w-3xl lg:max-w-4xl"
      >
        <div class="text-brand uppercase text-lg mb-3 pt-10">
          EAB SERVICE AS A BENEFIT
        </div>
        <div class="text-white text-3xl font-semibold uppercase mb-5">
          EXCLUSIVE AUTO PURCHASING PROGRAM
        </div>
        <div class="text-gray-300 pb-10 lg:pb-28">
          We partner with your organization for free so you may offer an
          auto-purchasing program as part of your benefits package. By doing so
          you give your staff access to utilize our unique cost-free vehicle
          purchasing service, allowing them to find their perfect car while
          saving time and money. It is a win-win!
        </div>
        <div class="flex flex-col place-items-center justify-center mx-auto">
          <div class="uppercase text-brand mb-4">Learn more</div>
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
        <div class="container mx-auto pt-10 pb-0 lg:py-10">
          <Features>
            <Feature>
              <template slot="feature-image"
                ><img
                  src="~/assets/images/icons/building.png"
                  class="h-14 md:h-16"
                  alt=""
              /></template>
              <template slot="feature-title">
                HOW IT WORKS FOR YOUR ORGANIZATION
              </template>
              <template slot="feature-description">
                <div class="mb-4">
                  Getting set-up with us is simple. We setup a personalized link
                  for your staff to utilize if they are interested in our
                  service. Depending on the size of your organization we may
                  assign a dedicated Executive Concierge or a team to spefically
                  handle your account.
                </div>
                <div class="mb-4">
                  We then work with your HR department to provide any collateral
                  or materials your organization deems neccessary. If you
                  currently work with a company that handles a benefit portal
                  for you, we will work with them to get your material
                  implemented.
                </div>
              </template>
            </Feature>
            <hr class="my-16 border-gray-400" />
            <Feature>
              <template slot="feature-image"
                ><img
                  src="~/assets/images/icons/mobile.png"
                  class="h-14 md:h-16"
                  alt=""
              /></template>
              <template slot="feature-title">
                HOW IT WORKS FOR YOUR STAFF
              </template>
              <template slot="feature-description">
                <div class="mb-4">
                  Your staff simply utilizes the link we have provided for your
                  organization to learn more about our service, or if they are
                  ready to make a purchase submit a vehicle request. That’s it!
                  We take over from there.
                </div>
                <div class="mb-4">
                  We help your staff find the perfect vehicle they are searching
                  for, get them the best vehicle for the best price, handle all
                  of their neccessary paperwork, and have it delivered wherever
                  they want - all without any cost to them!
                </div>
              </template>
            </Feature>
            <hr class="my-16 border-gray-400" />
            <Feature>
              <template slot="feature-image"
                ><img
                  src="~/assets/images/icons/save-money.png"
                  class="h-14 md:h-16"
                  alt=""
              /></template>
              <template slot="feature-title"> YOU EARN WHEN WE EARN </template>
              <template slot="feature-description">
                <div class="mb-4">
                  On top of setting up and giving access to our service to your
                  staff free of cost, we also make sure that your organization
                  financially benefits from our service. Anytime a member of
                  your staff purchases a vehicle through our service, you will
                  recieve a pay-out from us.
                  <span class="text-brand mx-1">
                    That’s right, we are a free benefit for your organization
                    that actually pays you!
                  </span>
                </div>
              </template>
            </Feature>
            <hr class="my-16 border-gray-400" />
            <Feature>
              <template slot="feature-image"
                ><img
                  src="~/assets/images/icons/graduation-cap.png"
                  class="h-14 md:h-16"
                  alt=""
              /></template>
              <template slot="feature-title">
                VEHICLE PURCHASING EDUCATION
              </template>
              <template slot="feature-description">
                <div class="mb-4">
                  One of the passions that drives our business is a love for
                  educating and helping people not only getting the best deal
                  possible on a vehicle, but also making sure they are making
                  sound decisions and understand the process.
                </div>
                <div class="mb-4">
                  If you need additional resources or would like our help in
                  providing vehicle purchasing education for your staff we are
                  available. Whether that means attending a staff event, hosting
                  a zoom call, or just answering questions your staff has - we
                  can handle it.
                </div>
              </template>
            </Feature>
          </Features>
        </div>
      </section>
    </transition>
    <section class="bg-black py-16">
      <div class="container mx-auto">
        <div
          class="flex flex-col md:place-items-center md:justify-center sm:mx-auto px-4 sm:px-10 lg:px-0 md:max-w-3xl lg:max-w-4xl"
        >
          <div class="text-brand text-lg lg:text-center mb-4">
            WHY PARTNER WITH US?
          </div>
          <div class="lg:text-center text-white text-3xl font-semibold mb-4">
            YOUR STAFF DESERVES GREAT BENEFITS
          </div>
          <div class="text-gray-300 max-w-4xl mx-auto">
            Our service is designed to make people’s lives easier when it comes
            time to purchase a vehicle. By partnering with us you can make sure
            that your staff is well taken care during, what for many will be,
            the biggest purchase they will make outside of a home.
          </div>
        </div>
        <div
          class="flex lg:px-10 xl:px-44 2xl:px-72 mx-auto px-10 sm:px-16 md:px-20 md:mx-5 my-10 md:mt-36 md:mb-24"
        >
          <client-only>
            <swiper ref="carousel" class="swiper" :options="swiperOptions">
              <swiper-slide key="slide-1" class="flex">
                <div
                  class="flex flex-col px-6 py-20 bg-cover bg-no-repeat border-2 rounded border-gray-300 transition benefitOneImage"
                >
                  <div class="text-lg text-white font-semibold mb-4">
                    Increase employee retention
                  </div>
                  <div class="text-gray-300 text-sm">
                    One of the significant contributing factors of voluntary
                    employee turn-over has been attributed to lack of benefits
                    with their current employer.
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide key="slide-2" class="flex">
                <div
                  class="flex flex-col px-6 py-20 bg-cover bg-no-repeat border-2 rounded border-gray-300 transition benefitTwoImage"
                >
                  <div class="text-lg text-white font-semibold mb-4">
                    Increase productivity & engagement
                  </div>
                  <div class="text-gray-300 text-sm">
                    Studies have shown that organizations that offer enchanced
                    benefits to their staff have higher overall employee
                    satisfaction ratings.
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide key="slide-3" class="flex">
                <div
                  class="flex flex-col px-6 py-20 bg-cover bg-no-repeat border-2 rounded border-gray-300 transition benefitThreeImage"
                >
                  <div class="text-lg text-white font-semibold mb-4">
                    Attract great talent
                  </div>
                  <div class="text-gray-300 text-sm">
                    By offering amazing and unique benefits organizations can
                    establish a competitive edge in recruiting over their
                    competition.
                  </div>
                </div>
              </swiper-slide>
              <div slot="pagination" class="swiper-pagination"></div>
            </swiper>
          </client-only>
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
import bgMainHeader from 'assets/images/employee_benefits_header.jpeg'
import secondSectionBgImage from 'assets/images/employee-benefits-program/second-section-bg-image.jpeg'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
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
      secondSectionBgImage: { backgroundImage: `url(${secondSectionBgImage})` },
      sectionOneVisible: false,
      swiperOptions: {
        loop: false,
        effect: 'slide',
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          clickable: 'true',
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            pagination: false,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
    }
  },
  head: {
    title: 'Employee Benefits Program - Executive',
  },
  computed: {
    faChevronUp() {
      return faChevronUp
    },
    faChevronDown() {
      return faChevronDown
    },
  },
}
</script>

<style scoped>
.benefitOneImage {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('assets/images/employee-benefits-program/increase-employee-retention.jpeg');
}

.benefitOneImage:hover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('assets/images/employee-benefits-program/increase-employee-retention.jpeg');
}

.benefitTwoImage {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('assets/images/employee-benefits-program/increased-productivity-and-engagement.jpeg');
}

.benefitTwoImage:hover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('assets/images/employee-benefits-program/increased-productivity-and-engagement.jpeg');
}

.benefitThreeImage {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('assets/images/employee-benefits-program/attract-great-talent.jpeg');
}

.benefitThreeImage:hover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('assets/images/employee-benefits-program/attract-great-talent.jpeg');
}
</style>
