import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Section from '../shard/Section';
import styles from './ContactUS.module.scss';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactDetails/ContactForm';
import { contactDetailsData } from "../../data";

const MapWithNoSSR = dynamic(() => import('../shard/Map'), { ssr: false });

const ContactUs = () => {
  const [location, setLocation] = useState({ latitude: 40.7128, longitude: -74.0060 });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if (location) {
      data.location = location;
    }

    console.log('Form Data:', data);

    // Add your form submission logic here
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        console.log('Location:', { latitude, longitude });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Section
      className={styles.contactUs}
      title="Contact Us"
      description="With Lots Of Unique Blocks, You Can Easily Build A Page Easily Without Any Coding."
    >
      <h3 className={styles.heading}>Get In Touch Today!</h3>
      <div className={styles.contactContent}>
        <div className={styles.contactDetails}>
          <ContactDetails contactDetailsData={contactDetailsData} />
        </div>
        <ContactForm handleSubmit={handleSubmit} />
      </div>
      <div className={styles.mapContainer}>
        <MapWithNoSSR location={location} />
      </div>
    </Section>
  );
};

export default ContactUs;
