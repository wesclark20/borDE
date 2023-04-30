import React, { useState, useEffect } from "react";
import EventButton from "./EventButton";
import EventCard from "./EventCard";
import EventForm from "./EventForm";
import Stack from "react-bootstrap/Stack";

let nextId = 0;
function Events(props) {
  const [canSubmit, setCanSubmit] = useState(false);
  const [events, setEvents] = useState([]);

  async function getEvents() {
    const eventsResponse = await fetch("http://127.0.0.1:5000/api", {
      mode: "cors",
    });
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
      <Stack gap={3}>
        <h1 className="mx-auto mt-3">Create your own event</h1>
        <EventButton onClick={handleClick} />
        {canSubmit ? (
          <EventForm setCanSubmit={setCanSubmit} getEvents={getEvents} />
        ) : (
          <h5 className="mx-auto mt-2">
            Or browse through other events in the community
          </h5>
        )}
      </Stack>
      {events.map((event) => {
        return props.filter === null || props.filter === event.type ? (
          <EventCard key={nextId++} data={event} />
        ) : null;
      })}
    </>
  );
}

export default Events;
