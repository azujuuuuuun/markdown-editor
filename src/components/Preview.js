import React from 'react';

const Preview = (props) => {
  return (
    <div>
      <span dangerouslySetInnerHTML={{__html: props.text}} />
    </div>
    );
};

export default Preview;
