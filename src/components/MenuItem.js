import React from "react";

const MenuItem = props => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width="100"
      height="100"
      onClick={() => props.showPage(props.alt)}
    />
  );
};

export default MenuItem;
