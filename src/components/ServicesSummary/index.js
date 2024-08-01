import React from 'react';
import Grid from '../shard/Grid';
import ImageCard from '../shard/ImageCard';
import styles from './ServicesSummary.module.scss';
import Section from '../shard/Section';
import { ServicesSummaryData } from '../../data';
import VideoCard from '../shard/VideoCard';

function ServicesSummary() {
  return (
    <Section className={styles.servicesSummary}>
      <p className={styles.description}>
        At The OurWebsite, we are dedicated to helping you excel in the world of
        technology. Our services are specifically designed to meet your needs
      </p>
      <Grid columns={2} rows={2} gap="50px">
        {ServicesSummaryData.map((item, index) => (
          <ImageCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </Grid>

      <VideoCard
        videoSrc="/videos/sampleVideo.mp4"
        posterSrc="/images/posterSrc.jpg"
        description="<span>OurWebsite</span> Your Gateway to Technological Excellence
                Get a quick glimpse into the dynamic environment at The OurWebsite and the benefits that await you"
      />
    </Section>
  );
}

export default ServicesSummary;
