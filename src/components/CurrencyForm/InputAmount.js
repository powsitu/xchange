import React from "react";
import { Form } from "react-bootstrap";

export default function InputAmount(props) {
  return (
    <Form.Group controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter amount..."
        value={props.value}
        onChange={props.onChange}
      />
    </Form.Group>
  );
}
