import React from 'react';
import FileUploader from '../components/FileUploader';

export default class FileUploaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = (e) => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const fileData = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.props.onChange(reader.result);
      };
      reader.readAsText(fileData);
    }
  }

  render() {
    return (
      <FileUploader onChange={this.onChange} />
      );
  }
}
