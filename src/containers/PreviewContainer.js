import React from 'react';
import Preview from '../components/Preview';
import marked from 'marked';

export default class PreviewContainer extends React.Component {
  constructor(props) {
    super(props);
    marked.setOptions({breaks: true});
  }

  render() {
    const text = marked(this.props.text);
    return (
      <Preview text={text} />
      );
  }
}
