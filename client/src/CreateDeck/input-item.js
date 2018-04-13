import React from "react";

const InputItem = props => {
  return (
    <div>
      <div className="input-card">
        {props.arrIndex + 1}
        <input type="text" placeholder="Front" index={props.arrIndex} onChange={props.handleFrontInput} />
        <input type="text" placeholder="Back" index={props.arrIndex} onChange={props.handleBackInput} />
      </div>
    </div>
  );
};

export default InputItem;
