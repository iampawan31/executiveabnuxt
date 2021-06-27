const VEHICLE_REQUEST_LINK = '/request-vehicle'
const IS_EXTERNAL_LINK = false

export const firstSlider = [
  {
    title: 'Request Your Vehicle',
    image: require('assets/images/home/first-slide-one.png'),
    gradient: 'bg-gradient-to-r from-brand-blue-dark to-brand-blue-light',
    description:
      'Never settle for what dealers or websites have in stock. We locate the exact vehicle you want directly through the manufacturers.',
  },
  {
    title: 'Select & Approve',
    image: require('assets/images/home/first-slide-two.jpg'),
    gradient:
      'bg-gradient-to-r from-brand-turquoise-dark to-brand-turquoise-light',
    description:
      'We research & find the best vehicles that match your criteria & send them directly to your mobile phone. Simply choose which one you love most.',
  },
  {
    title: 'Contactless Purchasing',
    image: require('assets/images/home/first-slide-three.png'),
    gradient: 'bg-gradient-to-r from-brand-green-dark to-brand-green-light',
    description:
      'All required documents are prepared & securely sent to you for e-signature. Your vehicle is fully prepped, sanitized & delivered directly to you.',
  },
  {
    title: 'Perfection Guaranteed',
    image: require('assets/images/home/first-slide-four.png'),
    gradient:
      'bg-gradient-to-r from-brand-military-green-dark to-brand-military-green-light',
    description:
      "We offer a 5 day / 100-mile return policy so you can make sure your vehicle is the perfect one for you. If it's not, you may return it - no questions asked.",
  },
]

export const homepageTabSection = [
  {
    tabTitle: 'NEW',
    title: 'NEW VEHICLES',
    imageURL: require('assets/images/home/new-vehicles.jpeg'),
    description:
      'Our exclusive manufacturer relationships secure you the best deal.',
    listOne: [
      'Included Nationwide delivery',
      'Pay invoice or slightly above',
      'Receive same manufacturer incentives / programs including special interest rates',
    ],
    listTwo: [
      'Haggle-free pricing to buy or lease',
      'Access to vehicles not yet online or in dealerships',
      'No dealership contact required',
    ],
    link: {
      name: 'Start Request',
      path: VEHICLE_REQUEST_LINK,
      isExternalLink: IS_EXTERNAL_LINK,
    },
  },
  {
    tabTitle: 'PRE-OWNED',
    title: 'PRE-OWNED VEHICLES',
    imageURL: require('assets/images/home/pre-owned.jpeg'),
    description: 'Never settle for less than the highest quality vehicle.',
    listOne: [
      'Certified Pre-Owned (CPO) quality without the price',
      'Pay below Kelly Blue Book value',
      'All vehicles are accident-free, & have passed rigorous inspections and reconditioning',
    ],
    listTwo: [
      'Haggle-free pricing',
      'Access to vehicles not yet online or in dealerships',
      'No dealership contact required',
    ],
    link: {
      name: 'Start Request',
      path: VEHICLE_REQUEST_LINK,
      isExternalLink: IS_EXTERNAL_LINK,
    },
  },
  {
    tabTitle: 'CUSTOM BUILDS',
    title: 'CUSTOMIZED VEHICLES',
    imageURL: require('assets/images/home/custom-build.jpeg'),
    description: 'Solutions for those planning to modify their vehicle.',
    listOne: [
      'Include after-market upgrades into the price of your vehicle instead	of paying out of pocket',
      'Discounted pricing on performance parts and vehicle upgrades',
    ],
    listTwo: [
      'Discounted pricing on custom paint, tints, exhaust systems, wheels, lift kits, and more',
      'Specialized assistance in building custom Jeeps, Landrovers, and Porsches ',
    ],
    link: {
      name: 'Start Request',
      path: VEHICLE_REQUEST_LINK,
      isExternalLink: IS_EXTERNAL_LINK,
    },
  },
  {
    tabTitle: 'POWERSPORTS',
    title: 'POWERSPORTS',
    imageURL: require('assets/images/home/powersports.jpeg'),
    description:
      'Our same service and savings are available for motorcycles, ATVs, snow-mobiles, PWCs, and more!',
    listOne: [
      'Included Nationwide delivery',
      'Access to new and pre-owned vehicles with wholesale pricing',
    ],
    listTwo: [
      'Discounted pricing on vehicle upgrades and parts',
      'Trade-in service / consigned selling available',
    ],
    link: {
      name: 'Start Request',
      path: VEHICLE_REQUEST_LINK,
      isExternalLink: IS_EXTERNAL_LINK,
    },
  },
  {
    tabTitle: 'SALUTE TO SERVICE',
    title: 'THANK YOU FOR YOUR SERVICE',
    imageURL: require('assets/images/home/salute-to-service.jpeg'),
    description:
      'Special programs for those that serve our nation and communities.',
    listOne: [
      'Free consultation on car purchasing',
      '$200 Visa gift card with	vehicle purchase for all military, police, medical, and first responders',
    ],
    listTwo: [
      'Special accommodations for vehicle shipping when deployed, or deploying',
      'Special discount on maintenance, parts, and repairs',
    ],
    link: {
      name: 'More information',
      path: '/military-and-community-program',
      isExternalLink: IS_EXTERNAL_LINK,
    },
  },
  {
    tabTitle: 'SERVICE / PARTS',
    title: 'SERVICE / PARTS',
    imageURL: require('assets/images/home/maintenance.jpeg'),
    description: 'Savings on vehicle service, repairs, parts, & upgrades.',
    listOne: [
      'Discounts on yearly and mileage milestone service packages',
      'Discounts on all repairs & maintenance items including: oil changes, brakes, tires, & detailing',
    ],
    listTwo: [
      'Discounts on all vehicle parts including both OEM & after-market vehicle upgrades from all top brands',
      'Complimentary Concierge Service available in CA, FL, TX',
    ],
    link: {
      name: 'Contact us',
      path: '/contact-us',
      isExternalLink: IS_EXTERNAL_LINK,
    },
  },
  {
    tabTitle: 'SELL YOUR VEHICLE',
    title: 'SELL YOUR VEHICLE',
    imageURL: require('assets/images/home/sell-your-vehicle.jpeg'),
    description:
      'Gain the most value for your old vehicle through our consignment selling model.',
    listOne: [
      'Consign your vehicle to us and let us sell it for market value',
      'Consignment reduced for those utilizing our car buying service',
    ],
    listTwo: [
      'Best value for those trying to maximize the price they receive for their vehicle',
      'Easy processing - once your vehicle sells we transfer your funds within 48 hours',
    ],
    link: {
      name: 'Contact us',
      path: '/contact-us',
      isExternalLink: IS_EXTERNAL_LINK,
    },
  },
  {
    tabTitle: 'COMMERCIAL / FLEET',
    title: 'COMMERCIAL / FLEET',
    imageURL: require('assets/images/home/commercial.jpeg'),
    description:
      'Whether your organization needs commercial vehicles, or a fleet of cars / trucks - we can help.',
    listOne: [
      'Wholesale pricing and discounts for multiple car purchases / fleet',
      'Access to thousands of commercial vehicles nationwide',
    ],
    listTwo: [
      'Ability to add upgrades to your commercial vehicle(s) so they’re ready to get the job done',
      '1-on-1 consulting to make sure your vehicle selection fits your needs and budget',
    ],
    link: {
      name: 'Start request',
      path: VEHICLE_REQUEST_LINK,
      isExternalLink: IS_EXTERNAL_LINK,
    },
  },
]
