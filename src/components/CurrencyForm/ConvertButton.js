import React from "react";
import { Button } from "react-bootstrap";
import submitHandler from "./submitHandler";

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
