import React from 'react';
import { TextArea, Form, Input, Label, Menu } from 'semantic-ui-react';

const InputItem = props => {
  const { arrIndex, frontValue, backValue, cardId } = props;
  return (
    <div className="input-card">
      <Label>{arrIndex + 1}</Label>
      <TextArea
        value={frontValue}
        onChange={e => props.handleFrontInput(arrIndex, cardId, e)}
      />
      <TextArea
        value={backValue}
        onChange={e => props.handleBackInput(arrIndex, cardId, e)}
      />
    </div>
  );
};

export default InputItem;
