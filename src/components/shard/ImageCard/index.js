import React from 'react';
import Image from 'next/image';
import styles from './ImageCard.module.scss';
import Icon from '../Icon';

function ImageCard({ imageSrc, title, description, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={title} fill className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.textWrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <a href={link} className={styles.readMoreButton}>
              <span>Learn more</span>
              <Icon name="arrowRight" size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
