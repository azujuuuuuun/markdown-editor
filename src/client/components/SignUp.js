import React from 'react';
import styles from './css/SignUp.css';

const SignUp = (props) => {
  return (
    <form>
      <label className={styles.label}>user name</label>
      <input className={styles.input} type="text" />
      <label className={styles.label}>email</label>
      <input className={styles.input} type="text" />
      <label className={styles.label}>password</label>
      <input className={styles.input} type="text" />
      <button type="submit">Register</button>
    </form>
  );
};

export default SignUp;
