import React from 'react';
import Editor from '../components/Editor';

export default class EditorContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Editor onChange={this.props.onChange} />
      );
  }
}
