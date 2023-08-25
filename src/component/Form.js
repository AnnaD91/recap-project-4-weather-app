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
      <h1>Weather App</h1>
      <label htmlFor="activityName">Activity Name:</label>
      <input type="text" name="activityName"></input>
      <label htmlFor="weatherCheckbox">Weather Checkbox:</label>
      <input type="checkbox" name="weatherCheckbox"></input>
      <button type="submit"> submit</button>
    </>
  );
}
