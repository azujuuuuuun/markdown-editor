import React from 'react';
import Header from './Header';
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

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Editor onChange={this.onChange} />
        <Preview text={this.state.text} />
        <Footer />
      </div>
      );
  }
}
