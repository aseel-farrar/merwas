import SocialMediaBlock from './components/SocialShareBlock';
import styles from './components/ContactUS/ContactDetails/ContactDetails.module.scss';

export const contactDetailsData = [
  {
    icon: 'findUs',
    title: "Find Us",
    info: ["2301 AMMAN . JORDAN"]
  },
  {
    icon: 'phone',
    title: "Phone",
    info: ["+ (06) 111-1111", "+ (06) 111 - 1111"]
  },
  {
    icon: 'alarm-clock' ,
    title: "Working Hours",
    info: ["Mon-Fri: 8 AM - 5 PM", "Sat - Sun: 8 AM - 2 PM"],
  },
  {
    icon: 'pen',
    title: "Write to Us",
    info: ["info@ourwebsite.com", "courses@ourwebsite.com"],
  },
  {
    icon: 'share',
    title: "Follow Us",
    children: (
      <SocialMediaBlock className={styles.ContactDetailsSocialMedia} />

    )
  },
];


export const servicesData = [
  {
    images: [
      'service1',
      'service2',
      'service3',
    ],
    title: 'Coworking Spaces',
    description:
      'Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity',
  },
  {
    images: [
      'service1',
      'service2',
      'service3',
    ],
    title: 'Mentoring and Training',
    description:
      'Grow with Expert Guidance. Our mentoring and training programs are your gateway to professional development. Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, navigate challenges, and expand your technological project',
  },
  {
    images: [
      'service1',
      'service2',
      'service3',
    ],
    title: 'Coworking Spaces',
    description:
      'Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity',
  },
  {
    images: [
      'service1',
      'service2',
      'service3',
    ],
    title: 'Mentoring and Training',
    description:
      'Grow with Expert Guidance. Our mentoring and training programs are your gateway to professional development. Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, navigate challenges, and expand your technological project',
  },
];

export const aboutUsData = [
  {
    iconName: 'rocket',
    title: 'Fostering Collaboration',
    description:
      'Encouraging synergy among different entities in the technology ecosystem, including startups, freelancers, companies, academia, and government',
  },
  {
    iconName: 'idea',
    title: 'Promoting Innovation',
    description:
      'By providing support and guidance/ training, the center aims to cultivate an environment where new ideas and innovative solutions can thrive',
  },
  {
    iconName: 'goal',
    title: 'Mission Statement',
    description:
      'A technological revolution in East Amman through fostering innovation, collaboration, education, and community growth',
  },
  {
    iconName: 'telescope',
    title: 'Vision Statement',
    description:
      'Establishing a leading technological hub as a catalyst for technological advancement and social development in East Amman',
  },
];

export const ServicesSummaryData = [
  {
    imageSrc: '/images/coworkingSpaces.jpg',
    title: 'Coworking Spaces',
    description:
      'Inspiring Work Environments Designed for Technological Innovation',
    link: '/read-more',
  },
  {
    imageSrc: '/images/MentoringAndTraining.jpg',
    title: 'Mentoring and Training',
    description: 'Gain Insights from Industry Experts to Boost Your Success',
    link: '/read-more',
  },
  {
    imageSrc: '/images/AccessFundingMarkets.jpg',
    title: 'Access to Funding and Markets',
    description: 'Unlock Financing Opportunities and Expand Your Impact',
    link: '/read-more',
  },
  {
    imageSrc: '/images/NetworkingOpportunities.jpg',
    title: 'Networking Opportunities',
    description: 'Unlock Financing Opportunities and Expand Your Impact',
    link: '/read-more',
  },
];

export const partnersData = [
  { iconName: 'partner', text: 'Agreement between xyz and ourwebsite' },
  { iconName: 'partner', text: 'Agreement between xyz and ourwebsite' },
  { iconName: 'partner', text: 'Agreement between xyz and ourwebsite' },
];
