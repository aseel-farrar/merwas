import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './SocialShareBlock.module.scss';
import SocialShareItem from './SocialShareItem';

const socials = ['facebook', 'twitter', 'instagram', 'linkedin', 'skype'];

function SocialMediaBlock({ className, hasSkype = true }) {
  return (
    <div className={classNames(styles.socialShareBlock, className)}>
      {socials.map((social) => {
        if (hasSkype || social !== 'skype') {
          return (<SocialShareItem key={social} name={social} />)
        }
      })}
    </div>
  );
}

SocialMediaBlock.propTypes = {
  className: PropTypes.string,
  hasSkype: PropTypes.bool
};

export default SocialMediaBlock;
