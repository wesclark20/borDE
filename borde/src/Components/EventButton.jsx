import React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function EventButton() {
    return (
    <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Blue button as link
  </Button>
  <Button as="a" variant="warning">
    Yellow button link
  </Button>
</Stack>
);
}
export default EventButton;