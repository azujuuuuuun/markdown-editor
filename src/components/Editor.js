import React from 'react';
import styles from './css/Editor.css';

export default (props) => {
  return (
    <div>
      <textarea
        className={styles.editorTextarea}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </div>
    );
};
