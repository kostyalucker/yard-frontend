import React from 'react';

export default props => {
  return (
    <div className="col-xs-4">
      <div className="complex-offers-item">
        <h3 className="complex-card-title">
          {props.title}
        </h3>
        <p className="complex-card-info">
           <span className="complex-card-name">
             {props.nameFirst}
           </span>
           {props.valueFirst}
        </p>
        <p className="complex-card-info">
           <span className="complex-card-name">
             {props.nameSecond}
           </span>
           {props.valueSecond}
        </p>
        <div className="complex-card-btn">
           {props.button}
        </div>
      </div>
    </div>
  );
};