import React from "react";
import { Form } from "react-bootstrap";

export default function ResultField(props) {
  return <Form.Control type="text" value={props.result} readOnly plaintext />;
}
