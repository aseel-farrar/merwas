import React from 'react';
import classNames from 'classnames';
import Service from './Service';
import Section from '../shard/Section';
import { servicesData } from '../../data';
import styles from './Services.module.scss';

function Services() {
  return (
    <Section
      className={styles.servicesSection}
      title="Services"
      description="With lots of unique blocks, you can easily build a page easily without any coding."
    >
      <div className={styles.services}>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={classNames(styles.serviceWrapper, {
              [styles.oddService]: index % 2 === 0,
              [styles.evenService]: index % 2 !== 0,
            })}
          >
            <Service
              images={service.images}
              title={service.title}
              description={service.description}
              reverse={index % 2 !== 0}
              className={styles.customService}
              oddService={index % 2 === 0}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Services;
