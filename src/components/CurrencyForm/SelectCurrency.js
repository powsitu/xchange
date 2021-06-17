import { Form } from "react-bootstrap";

export default function SelectCurrency(props) {
  return (
    <Form.Group controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        {props.data.map((currency, index) => {
          return (
            <option value={currency} key={index}>
              {currency}
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
}
