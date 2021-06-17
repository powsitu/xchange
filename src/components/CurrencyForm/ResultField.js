import React from "react";
import { Form } from "react-bootstrap";

export default function ResultField() {
  return <Form.Control type="text" value="Result here..." readOnly plaintext />;
}
