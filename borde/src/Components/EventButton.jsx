import React from "react";
import Button from "react-bootstrap/Button";
//import Stack from "react-bootstrap/Stack";

function EventButton(props) {
  return (
    <Button
      variant="primary"
      onClick={props.onClick}
      className="col-md-6 mx-auto mt-4"
    >
      Create DEvent{" "}
    </Button>
  );
}
export default EventButton;
