import React from 'react';

export default (props) => {
  return (
    <div>
      <textarea onChange={props.onChange} onKeyDown={props.onKeyDown} />
    </div>
    );
};
