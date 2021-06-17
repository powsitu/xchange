import React from "react";
import { Button } from "react-bootstrap";
import converter from "./converter";

export default function ConvertButton(props) {
  function submitHandler(event) {
    event.preventDefault();
    console.log(
      `You wanna know how much ${props.amount} ${props.currencyFrom} is in ${props.currencyTo}`
    );
    console.log(
      "The result is",
      converter(props.amount, props.currencyFrom, props.currencyTo, props.data)
    );
  }

  return (
    <Button
      as="input"
      variant="success"
      type="submit"
      value="Convert"
      onClick={submitHandler}
    />
  );
}
