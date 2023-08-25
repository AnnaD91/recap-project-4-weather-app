import React from "react";

// export default function EntryForm({ onAddEntry }) {
// function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);
//     onAddEntry(data);
// }

export default function Form({ onAddActivity }) {
  function handleSubmit(event /*name isForGoodWeather*/) {
    event.preventDefault();
    const newActivity = {
      name: "activityName",
      isForGoodWeather: "weatherCheckbox.checked",
    };
  }

  return (
    <>
      <h1>Weather App</h1>
      <form>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <label htmlFor="activityName">Activity Name:</label>
              <input type="text" name="activityName"></input>
            </li>
            <li>
              <label htmlFor="weatherCheckbox">Weather Checkbox:</label>
              <input
                type="checkbox"
                name="weatherCheckbox"
                checked={onAddActivity.isChecked}
              ></input>
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
