import React from "react";
import { Form } from "react-bootstrap";

export default function SelectDate(props) {
  return (
    <Form.Group controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type="date" onChange={props.onChange} />
    </Form.Group>
  );
}
