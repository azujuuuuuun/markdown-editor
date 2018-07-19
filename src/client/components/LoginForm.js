import React from 'react';
import styles from './css/Form.css';

const LoginForm = (props) => {
  const {
    userName,
    password,
    errorMessage,
    onClick,
    handleUserName,
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
        <label className={styles.label}>password</label>
        <input
          className={styles.input}
          type="text" value={password}
          onChange={handlePassword}
        />
        <button type="submit" onClick={onClick}>Login</button>
      </form>
      <div>
        <strong>{errorMessage}</strong>
      </div>
    </div>
  );
};

export default LoginForm;
