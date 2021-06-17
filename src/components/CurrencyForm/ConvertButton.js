import React from "react";
import { Button } from "react-bootstrap";

export default function ConvertButton(props) {
  function submitHandler(event) {
    event.preventDefault();
    console.log(
      `You wanna know how much ${props.amount} ${props.currencyFrom} is in ${props.currencyTo}`
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
