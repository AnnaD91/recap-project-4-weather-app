import React from "react";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const newActivity = {
      name: event.target.elements.activityName.value,
      isGoodWeather: event.target.elements.weatherCheckbox.checked,
    };

    onAddActivity(newActivity);

    event.target.reset();
  }
  return (
    <>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <label htmlFor="activityName">Activity Name:</label>
              <input id="activityName" type="text" name="activityName"></input>
            </li>
            <li>
              <label htmlFor="weatherCheckbox">Weather Checkbox:</label>
              <input type="checkbox" name="weatherCheckbox"></input>
            </li>
            <li>
              <button type="submit"> submit</button>
            </li>
          </ul>
        </div>
      </form>
    </>
  );
}
