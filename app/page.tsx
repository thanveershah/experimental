"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h1>Loading data with Fetch API inside useEffect</h1>
      {JSON.stringify(data)}
    </div>
  );
}
