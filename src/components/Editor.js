import React from 'react';
import styles from './css/Editor.css';

const Editor = (props) => {
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

export default Editor;
