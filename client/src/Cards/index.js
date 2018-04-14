// Import your dependancies
import React from "react";

const Cards = props => {
  // Deconstruct the varaibles contained in the elem and pass them props
  const { question, answer } = props;
  // Return the element layout
  return (
    <div className="card">
      <h1>{question}</h1>
    </div>
  );
};
