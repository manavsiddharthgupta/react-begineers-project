import { useState, useCallback } from "react";
const useFetch = (getting, setTasks) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async (taskText) => {
    setIsLoading(true);
    setError(null);
    let response;
    try {
      if (getting) {
        response = await fetch(
          "https://react-app-cc314-default-rtdb.firebaseio.com/tasks.json"
        );
      } else {
        response = await fetch(
          "https://react-app-cc314-default-rtdb.firebaseio.com/tasks.json",
          {
            method: "POST",
            body: JSON.stringify({ text: taskText }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      let loadedTasks;
      if (getting) {
        loadedTasks = [];
        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
      } else {
        const generatedId = data.name;
        loadedTasks = { id: generatedId, text: taskText };
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  },[getting, setTasks]);

  return [isLoading, error, fetchTasks];
};
export default useFetch;
