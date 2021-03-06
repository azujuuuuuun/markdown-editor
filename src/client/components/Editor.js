import React from 'react';
import styles from './css/Editor.css';

const Editor = (props) => {
  return (
    <div className={styles.editor}>
      <textarea
        className={styles.editorTextarea}
        value={props.text}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </div>
    );
};

export default Editor;
