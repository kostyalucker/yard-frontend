import React from "react";

export default props => {
  return (
    <div className="complex-address-point">
      <h4 className="complex-point-title">
        {props.title}
      </h4>
      <p className="complex-point-text">
        {props.text}
      </p>
    </div>
  );
};
