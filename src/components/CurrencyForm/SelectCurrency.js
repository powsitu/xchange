import { Form } from "react-bootstrap";
import { currencyNames } from "../../constants/currencyNames";

export default function SelectCurrency(props) {
  return (
    <Form.Group controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control as="select" onChange={props.onChange}>
        <option>Choose...</option>
        {props.data.map((currency, index) => {
          return (
            <option value={currency} key={index}>
              {currency} - {currencyNames[currency]}
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
}
