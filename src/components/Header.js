import React from 'react';
import styles from './css/Header.css';

const Header = (props) => {
  return (
    <header className={styles.header} >
      <h1 className={styles.siteName}>Markdown Editor</h1>
    </header>
    );
};

export default Header;
