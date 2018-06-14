import React from 'react';
import Header from './Header';
import Editor from '../containers/EditorContainer';
import Preview from '../containers/PreviewContainer';
import Footer from './Footer';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Editor />
        <Preview />
        <Footer />
      </div>
      );
  }
}
