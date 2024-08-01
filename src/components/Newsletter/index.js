import React from 'react';
import PropTypes from 'prop-types';
import styles from './Newsletter.module.scss';
import Button, { Types } from '@/components/shard/Button';

function Newsletter({ title, description }) {
  return (
    <div className={styles.newsletter}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.inputContainer}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.input}
        />
        <Button className={styles.button} type={Types.subscribe}>Subscribe</Button>
      </div>
    </div>
  );
}

Newsletter.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Newsletter;
