import React from "react";

function Demonym(props) {
  return (
    <div className="demonym">
      A {props.name} comes from {props.country}
    </div>
  );
}

export default Demonym;
