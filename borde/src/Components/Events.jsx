import React, { useState, useEffect } from "react";
import EventButton from "./EventButton";
import EventCard from "./EventCard";
import EventForm from "./EventForm";
let nextId = 0;
function Events() {
  const [canSubmit, setCanSubmit] = useState(false);
  const [events, setEvents] = useState([]);

  async function getEvents() {
    const eventsResponse = await fetch("http://127.0.0.1:5000/api");
    const eventsObj = await eventsResponse.json();
    setEvents(eventsObj.events);
  }
  useEffect(() => {
    getEvents();
  }, [canSubmit]);

  const handleClick = () => {
    setCanSubmit(true);
  };

  return (
    <>
      <EventButton onClick={handleClick} />
      {canSubmit ? (
        <EventForm setCanSubmit={setCanSubmit} getEvents={getEvents} />
      ) : null}
      {events.map((event) => {
        return <EventCard key={nextId++} data={event} />;
      })}
    </>
  );
}

export default Events;
