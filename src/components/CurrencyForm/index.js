import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

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
          <Form.Group>
            <Form.Label>From</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>EUR</option>
              <option>USD</option>
              <option>GBP</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group>
            <Form.Label>To</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>EUR</option>
              <option>USD</option>
              <option>GBP</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md>
          <Button as="input" variant="success" type="submit" />
        </Col>
      </Row>
    </Form>
  );
}
