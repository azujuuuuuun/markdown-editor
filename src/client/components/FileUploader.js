import React from 'react';
// import styles from './css/Editor.css';

const FileUploader = (props) => {
  return (
    <div>
      <input type="file" onChange={props.onChange} />
    </div>
    );
};

export default FileUploader;
