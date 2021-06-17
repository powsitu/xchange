import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import SelectCurrency from "./SelectCurrency";
import InputAmount from "./InputAmount";
import ConvertButton from "./ConvertButton";
import ResultField from "./ResultField";

export default function CurrencyForm() {
  const [amount, set_amount] = useState("");
  const [currencyFrom, set_currencyFrom] = useState("");
  const [currencyTo, set_currencyTo] = useState("");

  function changeHandler(event) {
    switch (event.target.id) {
      case "formAmount":
        set_amount(event.target.value);
        break;
      case "formFrom":
        set_currencyFrom(event.target.value);
        break;
      case "formTo":
        set_currencyTo(event.target.value);
        break;
      default:
        console.log("Something went wrong!");
    }
  }

  return (
    <Form>
      <Row>
        <Col md>
          <InputAmount
            label="Amount"
            value={amount}
            id="formAmount"
            onChange={changeHandler}
          />
        </Col>
        <Col md>
          <SelectCurrency
            label="From"
            id="formFrom"
            value={currencyFrom}
            onChange={changeHandler}
          />
        </Col>
        <Col md>
          <SelectCurrency
            label="To"
            id="formTo"
            value={currencyTo}
            onChange={changeHandler}
          />
        </Col>
        <Col md>
          <ConvertButton />
          <ResultField />
        </Col>
      </Row>
    </Form>
  );
}
