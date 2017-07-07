import React from 'react';

export default props => {
  return (
    <section className="complex-info">
      <div className="container">
        <div className="complex-info-wrap">
          <h2 className="complex-info-title">
            {props.title}
            <small className="complex-info-subheading">
              {props.subheading}
            </small>
          </h2>
        </div>
      </div>
    </section>
  );
};
