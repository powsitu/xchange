import React from "react";
import { Form } from "react-bootstrap";

export default function SelectCurrency(props) {
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>EUR</option>
        <option>USD</option>
        <option>GBP</option>
      </Form.Control>
    </Form.Group>
  );
}
