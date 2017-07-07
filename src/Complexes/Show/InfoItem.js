import React from 'react';

export default props => {
  return (
    <h2 className="complex-info-title">
        {props.title}
        <br/>
        <small className="complex-info-subheading">
        {props.subheading}
        </small>
    </h2>
  );
};
