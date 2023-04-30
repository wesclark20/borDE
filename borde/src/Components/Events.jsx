import React, { useState } from "react";
import EventButton from "./EventButton";
import EventCard from "./EventCard";
import EventForm from "./EventForm";

const eventArr = [];
function Events() {
  const [id, setId] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);
  const handleClick = () => {
    console.log(eventArr);
    setCanSubmit(true);
  };
  return (
    <>
      <EventButton onClick={handleClick} />
      {canSubmit ? (
        <EventForm
          setCanSubmit={setCanSubmit}
          eventArr={eventArr}
          setId={setId}
          id={id}
        />
      ) : null}
      {eventArr.map((i) => {
        return <EventCard key={i} />;
      })}
    </>
  );
}

export default Events;
