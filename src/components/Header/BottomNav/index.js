import React, { useState } from 'react';
import Link from 'next/link';
import styles from './BottomNav.module.scss';
import LanguageDropdown from '../../LanguageDropdown';
import Button, { Types } from '../../shard/Button';
import Icon from '../../shard/Icon';

function BottomNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={styles.BottomNav}>
      <Link href="/">
        <Icon name="logo" className={styles.logo} />
      </Link>

      <div className={styles.dropdown} onClick={toggleDropdown}>
        Menu
      </div>

      <ul className={`${styles.dropdownContent} ${dropdownOpen ? styles.show : ''}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#about">About Us</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/partners">Partners</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>

      <LanguageDropdown />

      <div className={styles.btnContainer}>
        <Button type={Types.register}>Register</Button>
        <Button type={Types.login}>Login</Button>
      </div>
    </nav>
  );
}

export default BottomNav;
