import React from "react";
import './../styles/load.scss';

const Load = () => {
  return (
    <article className="card card--mars">
      <div className="card__planet">
        <div className="planet__atmosphere"></div>
        <div className="planet__surface"></div>
      </div>
    </article>
  );
};

export default Load;
