import React from "react";
import Form from "./component/Form";
import { useState } from "react";
import { uid } from "uid";
import List from "./component/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  console.log(activities);

  function handleAddActivity(oneActivity) {
    setActivities([{ id: uid(), ...oneActivity }, ...activities]);
  }

  return (
    <main>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </main>
  );
}

export default App;
