import React from "react";
import Form from "./component/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);
  console.log(activities);

  function handleAddActivity(oneActivity) {
    setActivities([{ id: uid(), ...oneActivity }, ...activities]);
  }

  return (
    <main>
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
