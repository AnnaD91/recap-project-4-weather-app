import React from "react";
import Form from "./component/Form";
import { useState } from "react";
import { uid } from "uid";
import List from "./component/List";

function App() {
  const [activities, setActivities] = useState([]);
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
