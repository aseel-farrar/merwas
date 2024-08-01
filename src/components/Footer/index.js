import React from 'react';
import SocialMediaBlock from '../SocialShareBlock';
import styles from './Footer.module.scss';
import Newsletter from '../Newsletter';
import LanguageDropdown from '../LanguageDropdown';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletterSocialMediaContainer}>
        <Newsletter
          title="Subscribe to our Newsletter"
          description="Your download should start automatically, if not Click here. Should I give up, huh?."
        />
        <SocialMediaBlock className={styles.footerSocialMedia} hasSkype={false} />
      </div>
      <div className={styles.bottomContainer}>
        <p className={styles.copyright}>
          Copyright &copy; 2024 OurWebsite. All Rights Reserved.
        </p>
        <LanguageDropdown className={styles.languageDropdown} hasIcon={false} />
      </div>
    </footer>
  );
}

export default Footer;
