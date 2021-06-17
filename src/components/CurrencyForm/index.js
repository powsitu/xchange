import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import SelectCurrency from "./SelectCurrency";

export default function CurrencyForm() {
  return (
    <Form>
      <Row>
        <Col md>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" placeholder="Enter amount..." />
          </Form.Group>
        </Col>
        <Col md>
          <SelectCurrency label="From" />
        </Col>
        <Col md>
          <SelectCurrency label="To" />
        </Col>
        <Col md>
          <Button as="input" variant="success" type="submit" />
        </Col>
      </Row>
    </Form>
  );
}
