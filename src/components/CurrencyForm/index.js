import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import SelectCurrency from "./SelectCurrency";
import InputAmount from "./InputAmount";
import ConvertButton from "./ConvertButton";
import ResultField from "./ResultField";
import {
  availableCurrencies,
  availableRates,
} from "../../store/currencyData/actions";
import {
  selectCurrencies,
  selectConversionResult,
  selectRates,
} from "../../store/currencyData/selectors";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import SelectDate from "./SelectDate";

export default function CurrencyForm() {
  const [amount, set_amount] = useState("");
  const [currencyFrom, set_currencyFrom] = useState("");
  const [currencyTo, set_currencyTo] = useState("");
  const [date, set_date] = useState("");

  const data = useSelector(selectCurrencies);
  const fxData = useSelector(selectRates);
  const conversionResult = useSelector(selectConversionResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(availableCurrencies());
    dispatch(availableRates());
  }, [dispatch]);

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
      case "formDate":
        console.log(event.target.value);
        set_date(event.target.value);
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
        {Object.keys(data).length === 0 ? (
          <Loading />
        ) : (
          <>
            <Col md>
              <SelectCurrency
                label="From"
                id="formFrom"
                value={currencyFrom}
                onChange={changeHandler}
                data={data}
              />
            </Col>
            <Col md>
              <SelectDate
                label="Select date"
                id="formDate"
                value={date}
                onChange={changeHandler}
              />
            </Col>
            <Col md>
              <SelectCurrency
                label="To"
                id="formTo"
                value={currencyTo}
                onChange={changeHandler}
                data={data}
              />
            </Col>
          </>
        )}
        <Col md>
          <ConvertButton
            amount={amount}
            currencyFrom={currencyFrom}
            currencyTo={currencyTo}
            data={fxData}
          />
          <ResultField result={conversionResult} />
        </Col>
      </Row>
    </Form>
  );
}
