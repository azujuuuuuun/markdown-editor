import React from 'react';

const FileDownloader = (props) => {
  return (
    <div>
      <a href="#" onClick={props.onClick}>
        ダウンロード
      </a>
    </div>
  );
};

export default FileDownloader;
