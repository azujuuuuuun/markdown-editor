import React from 'react';
import Header from './Header';
import FileUploader from '../containers/FileUploaderContainer';
import Editor from '../containers/EditorContainer';
import Preview from '../containers/PreviewContainer';
import Footer from './Footer';
import styles from './css/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChange = (text, callback) => {
    this.setState({
      text: text,
    }, callback);
  }

  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Editor text={this.state.text} onChange={this.onChange} />
        <Preview text={this.state.text} />
        <Footer />
        <FileUploader onChange={this.onChange} />
      </div>
      );
  }
}
