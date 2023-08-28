import React from "react";
import Form from "./component/Form";
import { useState } from "react";
import { uid } from "uid";
import List from "./component/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const isGoodWeather = true;

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  console.log(activities);

  const filterActivities = activities.filter((oneActivity) => {
    return isGoodWeather
      ? oneActivity.isForGoodWeather
      : !oneActivity.isForGoodWeather;
  });

  function handleAddActivity(oneActivity) {
    setActivities([{ id: uid(), ...oneActivity }, ...activities]);
  }

  return (
    <main>
      <Form onAddActivity={handleAddActivity} />
      <List isGoodWeather={isGoodWeather} activities={filterActivities} />
    </main>
  );
}

export default App;
