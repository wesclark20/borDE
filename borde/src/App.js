import Navigationbar from "./Components/Navigationbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import React, { useState } from "react";

function App() {
  const [filter, setFilter] = useState(null);
  return (
    <>
      <Navigationbar setFilter={setFilter} />
      <Body filter={filter} />
      <Footer />
    </>
  );
}

export default App;
