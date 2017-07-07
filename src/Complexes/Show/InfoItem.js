import React from 'react';

export default props => {
  return (
    <div>
      <h2 className="complex-info-title">
         {props.title}
         <br/>
         <small className="complex-info-subheading">
          {props.subheading}
         </small>
      </h2>
    </div>
  );
};
