import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function CurrencyForm() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" placeholder="Enter amount..." />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>From</Form.Label>
            <Form.Control as="select" placeholder="Choose...">
              <option>EUR</option>
              <option>USD</option>
              <option>GBP</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>To</Form.Label>
            <Form.Control as="select" placeholder="Choose...">
              <option>EUR</option>
              <option>USD</option>
              <option>GBP</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Button as="input" variant="success" type="submit" />
        </Col>
      </Row>
    </Form>
  );
}
