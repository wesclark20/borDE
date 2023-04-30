import React from "react";
import Button from "react-bootstrap/Button";
//import Stack from "react-bootstrap/Stack";

function EventButton(props) {
  return (
    <Button
      variant="secondary"
      onClick={props.onClick}
      className="col-md-5 mx-auto"
    >
      Create DEvent{" "}
    </Button>
  );
}
export default EventButton;
