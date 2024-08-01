import HeroSlider from '@/components/HeroSlider';
import ServicesSummary from '@/components/ServicesSummary';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import { servicesData, partnersData } from '../data';
import ContactUS from '@/components/ContactUS';

function HomePage() {
  return (
    <>
      <HeroSlider /> 
      <ServicesSummary />
      <AboutUs />
      <Services services={servicesData} /> 
      <Partners partners={partnersData} />
      <ContactUS />
    </>
  );
}

export default HomePage;
