import React from "react";
import { Button } from "react-bootstrap";
import converter from "./converter";
import { useDispatch } from "react-redux";
import { updateResult } from "../../store/currencyData/actions";

export default function ConvertButton(props) {
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();

    const result = converter(
      props.amount,
      props.currencyFrom,
      props.currencyTo,
      props.data
    );
    dispatch(updateResult(result));
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
