import React from "react";

// Write a Form component which

// contains a heading
// has two input fields (name of activity, checkbox whether it is a good- or bad-weather activity) with appropriate labels and
// a submit button;
// it receives a prop called onAddActivity.

export default function Form({ onAddActivity }) {
  //preventDefault()
  return (
    <>
      <h1>heading</h1>
      <input type="text">name of activity</input>
      <input type="checkbox">weather checkbox</input>
      <button type="submit"> submit</button>
    </>
  );
}
