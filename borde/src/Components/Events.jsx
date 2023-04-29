import React, { useState } from "react";
import EventButton from "./EventButton";
import EventCard from "./EventCard";

const eventArr = [];
function Events() {
  const [id, setId] = useState(0);
  const handleClick = () => {
    console.log(eventArr);
    eventArr.push(id);
    setId(id + 1);
  };
  return (
    <>
      <EventButton onClick={handleClick} />
      {eventArr.map((i) => {
        return <EventCard key={i} />;
      })}
    </>
  );
}

export default Events;
