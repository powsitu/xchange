import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import SelectCurrency from "./SelectCurrency";
import InputAmount from "./InputAmount";
import ConvertButton from "./ConvertButton";
import ResultField from "./ResultField";

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
          <ConvertButton />
          <ResultField />
        </Col>
      </Row>
    </Form>
  );
}
