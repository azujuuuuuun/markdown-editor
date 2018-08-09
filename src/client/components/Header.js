import React from 'react';
import {Link} from 'react-router-dom';
import styles from './css/Header.css';

const Header = (props) => {
  return (
    <header className={styles.header} >
      <Link to='/'>
        <h1 className={styles.siteName}>Markdown Editor</h1>
      </Link>
      {props.auth
        ?
        <Link to='/' onClick={props.onClick}>Logout</Link>
        :
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Login</Link>
        </div>
      }
    </header>
  );
};

export default Header;
