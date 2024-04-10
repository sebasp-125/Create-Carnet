import { useEffect, useState } from "react";
import Home from "./Components/Home";
import { Fetch } from "./Data/UserFetch";
function App() {

  const { data, loading , error} = Fetch("https://jsonplaceholder.typicode.com/todos")

  return (
    <div className="App">
      <h1>Hi, Good Morning</h1>
      <p>¿Time Correct Zone? {new Date().toLocaleString()}</p>
      <ul>
        {error && 
          <h1>Yuo have an error in the FetchData, Solution to!!</h1>
        }
        {loading &&
          <li>Loading....</li>
        }
        {data?.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
