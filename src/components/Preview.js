import React from 'react';
import styles from './css/Preview.css';

const Preview = (props) => {
  return (
    <div className={styles.preview}>
      <span dangerouslySetInnerHTML={{__html: props.text}} />
    </div>
    );
};

export default Preview;
