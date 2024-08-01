import React from 'react';
import PropTypes from 'prop-types';
import PartnerCard from './PartnerCard';
import Section from '../shard/Section';
import styles from './Partners.module.scss'

function Partners({ partners }) {
  return (
    <Section
      className={styles.partnersSection} titleClassName={styles.partnersTitle}
      descriptionClassName={styles.partnersDescription}
      title="Partners"
      description="With lots of unique blocks, you can easily build a page easily without any coding. "
    >
      <div className={styles.partners}>
        {partners.map((partner, index) => (
          <PartnerCard
            key={index}
            iconName={partner.iconName}
            text={partner.text}
          />
        ))}
      </div>
    </Section>
  );
}

Partners.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Partners;
