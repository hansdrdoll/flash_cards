import React from 'react';
import { TextArea, Form, Input, Label, Menu } from 'semantic-ui-react';

const InputItem = props => {
  const { arrIndex } = props;
  return (
    <div className="input-card">
      <Label>{arrIndex + 1}</Label>
      <TextArea
        autoheight
        placeholder="Front"
        rows="2"
        onChange={e => props.handleFrontInput(arrIndex, e)}
      />
      <TextArea
        autoheight
        placeholder="Back"
        onChange={e => props.handleBackInput(arrIndex, e)}
      />
    </div>
  );
};

export default InputItem;
