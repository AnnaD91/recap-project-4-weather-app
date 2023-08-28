import React from "react";

export default function List({ isGoodWeather, activities }) {
  return (
    <>
      <h1>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here´s what you can do now: "}
      </h1>
      <ul>
        {activities.map((oneActivity) => {
          return <li key={oneActivity.id}>{oneActivity.name}</li>;
        })}
      </ul>
    </>
  );
}
