import React from 'react';
import styles from './SocialShareItem.module.scss';
import Icon from '../../shard/Icon';

function SocialShareItem({ name }) {
  return (
    <div className={styles.shareItem}>
      <a
        href={`https://www.${name}.com`}
        aria-label={`Share this page on ${name} (opens in a new window)`}
        target="_blank"
      >
        <Icon name={name} size={14} />
      </a>
    </div>
  );
}

export default SocialShareItem;
