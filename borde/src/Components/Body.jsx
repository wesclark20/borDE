import Events from "./Events";
import Stack from "react-bootstrap/Stack";

function Body(props) {
  return (
    <Stack gap={4} className="col-md-6 mx-auto">
      <Events filter={props.filter} />
    </Stack>
  );
}

export default Body;
