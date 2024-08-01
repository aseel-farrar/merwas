import React from 'react';
import PropTypes from 'prop-types';
import styles from './PartnerCard.module.scss';
import Icon from '@/components/shard/Icon';

function PartnerCard({ iconName, text }) {
  return (
    <div className={styles.partnerCard}>
      <Icon name={iconName} className={styles.icon} />
      <p className={styles.text}>{text}</p>
      <svg
        className={styles.line}
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0.5" x2="100" y2="0.5" />
      </svg>
    </div>
  );
}

PartnerCard.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PartnerCard;
