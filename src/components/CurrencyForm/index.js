import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import SelectCurrency from "./SelectCurrency";
import submitHandler from "./submitHandler";
import InputAmount from "./InputAmount";

export default function CurrencyForm() {
  return (
    <Form>
      <Row>
        <Col md>
          <InputAmount label="Amount" />
        </Col>
        <Col md>
          <SelectCurrency label="From" />
        </Col>
        <Col md>
          <SelectCurrency label="To" />
        </Col>
        <Col md>
          <Button
            as="input"
            variant="success"
            type="submit"
            value="Convert"
            onClick={submitHandler}
          />
        </Col>
      </Row>
    </Form>
  );
}
