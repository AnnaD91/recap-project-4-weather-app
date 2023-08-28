import React from "react";

export default function List({ isGoodWeather, activities, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here´s what you can do now: "}
      </h2>
      <ul>
        {activities.map((oneActivity) => {
          return (
            <li key={oneActivity.id}>
              {oneActivity.name}{" "}
              <button onClick={() => onDeleteActivity(oneActivity.id)}>
                delete
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}
