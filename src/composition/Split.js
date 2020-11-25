import React from "react";
import "./Split.css";

function Split(props) {
  const combinedClassName = `split ${props.className}`;
  const newStyles = { flex: props.flexBasis };
  return (
    <div className={combinedClassName} style={newStyles}>
      {props.children}
    </div>
  );
}
// export this component so that we can import it into the App.
export default Split;
