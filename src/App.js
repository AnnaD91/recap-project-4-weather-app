import React from "react";
import Form from "./component/Form";
import { useState, useEffect } from "react";
import { uid } from "uid";
import List from "./component/List";
import useLocalStorageState from "use-local-storage-state";
export default App;

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [isGoodWeather, setIsGoodWeather] = useState();
  console.log(isGoodWeather);

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/sahara"
      );
      const weather = await response.json();

      setIsGoodWeather(weather);
    }
    fetchWeather();
  }, []);

  const filteredActivities = activities.filter((oneActivity) => {
    return isGoodWeather
      ? oneActivity.isForGoodWeather
      : !oneActivity.isForGoodWeather;
  });

  function handleDeleteActivity(id) {
    const updatedActivites = activities.filter(
      (_oneActivity) => _oneActivity.id !== id
    );

    setActivities(updatedActivites);
  }

  function handleAddActivity(oneActivity) {
    setActivities([{ id: uid(), ...oneActivity }, ...activities]);
  }

  return (
    <>
      <h1>
        {isGoodWeather?.condition} {isGoodWeather?.temperature}
      </h1>
      <main>
        <Form onAddActivity={handleAddActivity} />
        <List
          onDeleteActivity={handleDeleteActivity}
          isGoodWeather={isGoodWeather}
          activities={filteredActivities}
        />
      </main>
    </>
  );
}
