import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import Icon from '../Icon';

function Card({ iconName, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <Icon name={iconName} size={50} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
