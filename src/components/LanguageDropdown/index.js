import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './LanguageDropdown.module.scss';
import Icon from '../shard/Icon';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'Arabic' },
  { code: 'fr', name: 'French' },
  // Add more languages as needed
];

function LanguageDropdown({ hasIcon = true }) {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const selectRef = useRef(null);

  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    setSelectedLanguage(selectedLang);
    // Add logic here to handle the language change
  };

  const toggleDropdown = () => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  return (
    <div className={styles.dropdownContainer}>
      {hasIcon && <Icon name="language" size={20} />}
      <select
        ref={selectRef}
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className={styles.dropdown}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
      <Icon
        name="arrowDown"
        className={styles.dropdownArrow}
        size={16}
        onClick={toggleDropdown}
      />
    </div>
  );
}

LanguageDropdown.propTypes = {
  hasIcon: PropTypes.bool,
};
export default LanguageDropdown;
