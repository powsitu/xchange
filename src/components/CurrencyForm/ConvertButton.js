import React from "react";
import { Button } from "react-bootstrap";

function submitHandler(event) {
  event.preventDefault();
  console.log("submit button was clicked!");
}

export default function ConvertButton() {
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
