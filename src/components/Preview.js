import React from 'react';

export default (props) => {
  return (
    <div>
      <span dangerouslySetInnerHTML={{__html: props.text}} />
    </div>
    );
};
