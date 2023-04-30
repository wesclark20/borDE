import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

// make a function, create whole form, press submit, get info to json data, and then make a post request
function EventForm(props) {
  const [formData, setFormData] = useState({});

  const setCanSubmit = props.setCanSubmit;

  const sendDataToDatabase = (formData) => {
    const url = "http://127.0.0.1:5000/api";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      mode: "no-cors",
    });
  };

  const handleSubmit = (e) => {
    props.getEvents();
    e.preventDefault();
    console.log(formData);
    setCanSubmit(false);
    sendDataToDatabase(formData);
  };

  return (
    <Form className="border px-5 py-3 rounded" onSubmit={handleSubmit}>
      <Stack>
        <h1 className="mx-auto">Create Event</h1>
        <>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            <Form.Control
              required
              placeholder="Enter Title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Date and Time</InputGroup.Text>
            <Form.Control
              required
              placeholder="Enter Date"
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
            <Form.Control
              required
              placeholder="Enter Time"
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
            />
          </InputGroup>
          <Form.Select
            required
            className="mb-3"
            placeholder={"Choose Catagory"}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value.toLowerCase() })
            }
          >
            <option>Choose Type</option>
            <option>Volunteer Program</option>
            <option>Food Drive</option>
            <option>Clothing Drive</option>
            <option>Fundraiser</option>
            <option>Walkathon</option>
            <option>Marathon</option>
            <option>Sales</option>
            <option>Furniture Drive</option>
            <option>Food Program</option>
          </Form.Select>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
            <Form.Control
              required
              as="textarea"
              placeholder="Enter Description"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </InputGroup>
        </>
        <Stack direction="horizontal" className="mx-auto" gap={3}>
          <Button type="submit" variant="primary">
            Submit
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setCanSubmit(false);
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
}

export default EventForm;
