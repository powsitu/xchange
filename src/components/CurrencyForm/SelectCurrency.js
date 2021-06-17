import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { availableCurrencies } from "../../store/currencyData/actions";
import { selectCurrencies } from "../../store/currencyData/selectors";

export default function SelectCurrency(props) {
  const currencies = Object.keys(useSelector(selectCurrencies));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(availableCurrencies());
  }, [dispatch]);

  return (
    <Form.Group controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        {currencies.length > 0
          ? currencies.map((currency, index) => {
              return (
                <option value={currency} key={index}>
                  {currency}
                </option>
              );
            })
          : null}
      </Form.Control>
    </Form.Group>
  );
}
