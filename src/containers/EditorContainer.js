import React from 'react';
import Editor from '../components/Editor';

export default class EditorContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      if (e.preventDefault) {
        e.preventDefault();
      }

      const elem = e.target;
      const start = elem.selectionStart;
      const end = elem.selectionEnd;
      const value = elem.value;

      elem.value = value.substring(0, start) + '\t' + value.substring(end);
      elem.selectionStart = elem.selectionEnd = start + 1;
      this.props.onChange(e);
    }
  }

  render() {
    return (
      <Editor onChange={this.props.onChange} onKeyDown={this.handleKeyDown} />
      );
  }
}
