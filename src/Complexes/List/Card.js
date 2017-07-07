import React from 'react';
import cardimg from '../../img/bitmap.jpg';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <section className="container">
      <Link className="compass-card-link" to='/complex'>
         <img
           src={cardimg}
           className="compass-card-img"
           alt="complex-preview"
         />
         <article className="compass-card-info">
           <p className="compass-card-location">
             {props.location}
           </p>
          <h3 className="compass-card-title">
             {props.address}
           </h3>
           <p className="compass-card-description">
             {props.text}
           </p>
         </article>
      </Link>
    </section>  
  );
};