import Navigationbar from "./Components/Navigationbar";
import Body from "./Components/Body";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setdata] = useState({});

  // Using useEffect for single rendering
  useEffect(() => {
    fetch("http://127.0.0.1:5000/members", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Navigationbar />
      <Body />
    </>
  );
}

export default App;
