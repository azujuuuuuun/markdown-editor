import React from 'react';
import styles from './css/SignUp.css';

const SignUp = (props) => {
  const {
    userName,
    email,
    password,
    errorMessage,
    onClick,
    handleUserName,
    handleEmail,
    handlePassword,
  } = props;

  return (
    <div>
      <form>
        <label className={styles.label}>user name</label>
        <input
          className={styles.input}
          type="text" value={userName}
          onChange={handleUserName}
        />
        <label className={styles.label}>email</label>
        <input
          className={styles.input}
          type="text" value={email}
          onChange={handleEmail}
        />
        <label className={styles.label}>password</label>
        <input
          className={styles.input}
          type="text" value={password}
          onChange={handlePassword}
        />
        <button type="submit" onClick={onClick}>Register</button>
      </form>
      <div>
        <strong>{errorMessage}</strong>
      </div>
    </div>
  );
};

export default SignUp;
