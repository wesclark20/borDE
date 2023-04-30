import Navigationbar from "./Components/Navigationbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import React, { useState } from "react";

function App() {
  const [filter, setFilter] = useState(null);
  return (
    <div className="bg-info bg-gradient">
      <Navigationbar setFilter={setFilter} />
      <Body filter={filter} />
      <Footer />
    </div>
  );
}

export default App;
