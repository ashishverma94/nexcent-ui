// CARE SECTION IMAGES
import Care1Img from "@/assets/images/care-1.jpg";
import Care2Img from "@/assets/images/care-2.jpg";
import Care3Img from "@/assets/images/care-3.jpg";

// CLIENTS ICONS
import Icon0 from "@/assets/icons/clients/Logo-0.png";
import Icon1 from "@/assets/icons/clients/Logo-1.png";
import Icon2 from "@/assets/icons/clients/Logo-2.png";
import Icon3 from "@/assets/icons/clients/Logo-3.png";
import Icon4 from "@/assets/icons/clients/Logo-4.png";
import Icon5 from "@/assets/icons/clients/Logo-5.png";
import Icon6 from "@/assets/icons/clients/Logo-6.png";

// CUSTOMERS LOGOS
import Logo0 from "@/assets/icons/customers/Logo-0.svg";
import Logo1 from "@/assets/icons/customers/Logo-1.svg";
import Logo2 from "@/assets/icons/customers/Logo-2.svg";
import Logo3 from "@/assets/icons/customers/Logo-3.svg";
import Logo4 from "@/assets/icons/customers/Logo-4.svg";
import Logo5 from "@/assets/icons/customers/Logo-5.svg";

// FEATURE CARD ICONS
import GroupsIcon from "@/assets/icons/groups.svg";
import AssociatesIcon from "@/assets/icons/associates.svg";
import MembershipsIcon from "@/assets/icons/memberships.svg";

// METRICES DATA
import ClubIcon from "@/assets/icons/metrices/clubs.svg";
import EventsIcon from "@/assets/icons/metrices/events.svg";
import MembersIcon from "@/assets/icons/metrices/members.svg";
import PaymentIcon from "@/assets/icons/metrices/payments.svg";

// SOCIAL MEDIA ICONS
import WikiIcon from "@/assets/icons/socials/wiki.svg";
import InstaIcon from "@/assets/icons/socials/insta.svg";
import YoutubeIcon from "@/assets/icons/socials/youtube.svg";
import TwitterIcon from "@/assets/icons/socials/twitter.svg";

// CONTENT IMAGES
import LoginImg from "@/assets/images/login.png";
import MobileFormImg from "@/assets/images/mobile-form.png";
import TeslaImg from "@/assets/images/tesla.jpg";

const caringData = [
  {
    img: Care1Img,
    desctiption: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    img: Care2Img,
    desctiption:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    img: Care3Img,
    desctiption: "Revamping the Membership Model with Triathlon Australia",
  },
];

const clientsIcons = [
  {
    url: Icon0,
    name: "name0",
  },
  {
    url: Icon1,
    name: "name1",
  },
  {
    url: Icon2,
    name: "name2",
  },
  {
    url: Icon3,
    name: "name3",
  },
  {
    url: Icon4,
    name: "name4",
  },
  {
    url: Icon5,
    name: "name5",
  },
  {
    url: Icon6,
    name: "name6",
  },
];

const customersData = {
  img: TeslaImg,
  userName: "Tim Smith",
  subHeading: "British Dragon Boat Racing Association",
  description:
    " Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.",
  logos: [
    {
      icon: <Logo0 className="size-12" />,
    },
    {
      icon: <Logo1 className="size-12" />,
    },
    {
      icon: <Logo2 className="size-12" />,
    },
    {
      icon: <Logo3 className="size-12" />,
    },
    {
      icon: <Logo4 className="size-12" />,
    },
    {
      icon: <Logo5 className="size-12" />,
    },
  ],
};

const featureCardsData = [
  {
    icon: <MembershipsIcon className="w-16.25 h-14" />,
    heading: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: <AssociatesIcon className="w-16.25 h-14" />,
    heading: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: <GroupsIcon className="w-16.25 h-14" />,
    heading: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

const slides = [
  {
    title: "Lessons and insights",
    highlight: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
  },
  {
    title: "Real stories, real",
    highlight: "growth stats",
    description:
      "See how photographers turned side projects into full-time studios.",
  },
  {
    title: "Build your brand",
    highlight: "the smart way",
    description:
      "Practical frameworks to stand out in a crowded creative market.",
  },
];

const metricsData = [
  {
    icon: <MembersIcon className="size-6 md:size-12" />,
    title: "Members",
    value: "2,245,341",
  },
  {
    icon: <ClubIcon className="size-6 md:size-12" />,
    title: "Clubs",
    value: "46,328",
  },
  {
    icon: <EventsIcon className="size-6 md:size-12" />,
    title: "Event Bookings",
    value: "828,867",
  },
  {
    icon: <PaymentIcon className="size-6 md:size-12" />,
    title: "Payments",
    value: "1,926,436",
  },
];

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Service",
    href: "/",
  },
  {
    name: "Feature",
    href: "/",
  },
  {
    name: "Product",
    href: "/",
  },
  {
    name: "Testimonial",
    href: "/",
  },
  {
    name: "FAQ",
    href: "/",
  },
];

const socialIcon = [
  {
    name: "Instagram",
    href: "/",
    icon: <InstaIcon className="size-8 cursor-pointer" />,
  },
  {
    name: "Wikipedia",
    href: "/",
    icon: <WikiIcon className="size-8 cursor-pointer" />,
  },
  {
    name: "Twitter",
    href: "/",
    icon: <TwitterIcon className="size-8 cursor-pointer" />,
  },
  {
    name: "Youtube",
    href: "/",
    icon: <YoutubeIcon className="size-8 cursor-pointer" />,
  },
];

const websiteLinks = [
  {
    heading: "Company",
    subLinks: [
      {
        name: "About us",
        href: "/",
      },
      {
        name: "Blog",
        href: "/",
      },
      {
        name: "Contact us",
        href: "/",
      },
      {
        name: "Pricing",
        href: "/",
      },
      {
        name: "Testimonials",
        href: "/",
      },
    ],
  },
  {
    heading: "Support",
    subLinks: [
      {
        name: "Help center",
        href: "/",
      },
      {
        name: "Terms of services",
        href: "/",
      },
      {
        name: "Legal",
        href: "/",
      },
      {
        name: "Privacy Policy",
        href: "/",
      },
      {
        name: "Status",
        href: "/",
      },
    ],
  },
];

const contentData = [
  {
    image: LoginImg,
    imageAlt: "login-image",
    title: "The unseen of spending three years at Pixelgrade",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
  },
  {
    image: MobileFormImg,
    imageAlt: "login-image",
    title: "How to design your site footer like we did",
    description:
      "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
  },
];

export {
  slides,
  navLinks,
  caringData,
  socialIcon,
  metricsData,
  contentData,
  websiteLinks,
  clientsIcons,
  customersData,
  featureCardsData,
};
