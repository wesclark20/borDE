import EventButton from "./EventButton";
import EventCard from "./EventCard";
import Stack from "react-bootstrap/Stack";

function Body() {
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <EventButton />
      <EventCard />
    </Stack>
  );
}

export default Body;
