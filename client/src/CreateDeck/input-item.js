import React from "react";

const InputItem = props => {
  return (
    <div>
      <div className="input-card">
        {props.number}
        <input type="text" placeholder="Front" />
        <input type="text" placeholder="Back" />
      </div>
    </div>
  );
};

export default InputItem;
