import React from "react";

/* Style */
import '../style/MenuItem.css';

const MenuItem = props => {
  return (
    <img
      className={props.animation}
      src={props.src}
      alt={props.alt}
      width="100"
      height="100"
      onClick={() => props.showPage(props.alt)}
    />
  );
};

export default MenuItem;
