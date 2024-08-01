import React from 'react';
import Image from 'next/image';
import Section from '../shard/Section';
import Grid from '../shard/Grid';
import styles from './AboutUs.module.scss';
import Card from '../shard/Card';
import { aboutUsData } from '../../data';

function AboutUs() {
  return (
    <Section
      id="about"
      className={styles.aboutUs}
      title="About Us"
      description="With lots of unique blocks, you can easily build a page easily without any coding."
    >
      <div className={styles.aboutUsContent}>
        <div className={styles.textContent}>
          <h3 className={styles.subtitle}>OurWebsite</h3>
          <p className={styles.paragraph}>We offer more than just a workspace</p>
          <Grid columns={2} className={styles.textGrid}>
            {aboutUsData.map((item, index) => (
              <Card
                key={index}
                iconName={item.iconName}
                title={item.title}
                description={item.description}
              />
            ))}
          </Grid>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/aboutUs.jpg"
            alt="About Us"
            width={626}
            height={687}
            className={styles.image}
          />
        </div>
      </div>
    </Section>
  );
}

export default AboutUs;
