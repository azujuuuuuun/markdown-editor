import React from 'react';
import FileDownloader from '../components/FileDownloader';

export default class FileDownloaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    const text = this.props.text;
    const filename = 'download';
    const ext = 'md';
    const file = filename + '.' + ext;
    let fileObject = new File([text], file);
    e.target.download = file;
    e.target.href = window.URL.createObjectURL(fileObject);
  }

  render() {
    return (
      <FileDownloader onClick={this.onClick} />
    );
  }
}
