import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './Service.module.scss';

function Service({ images, title, description, reverse, className, oddService }) {
  return (
    <div
      className={classNames(styles.service, className, {
        [styles.reverse]: reverse,
      })}
    >
      <div className={styles.images}>
        {images.map((src, index) => (
          <div key={index} className={styles[`imageWrapper${index + 1}`]}>
            <Image src={`/images/${src}.jpg`} alt={`Service image ${index + 1}`} fill />
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h3
          className={classNames(styles.serviceTitle, {
            [styles.oddServiceTitle]: oddService,
          })}
        >
          {title}
        </h3>
        <p
          className={classNames(styles.serviceDescription, {
            [styles.oddServiceDescription]: oddService,
          })}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

Service.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  className: PropTypes.string,
  oddService: PropTypes.bool,
};

export default Service;
