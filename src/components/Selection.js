import React, { useState } from "react";
const Selection = (props) => {
  const [temp1,temp2] = useState({ background: "" })
  const {key,applyColor } = props;
  return (
    <div className="fix-box" style={temp1} onClick={()=>{applyColor(temp2)}}>
    <h2 className="subheading">Selection</h2>
    </div>
  )
}
export default Selection;

