import { Form } from "react-bootstrap";

export default function SelectCurrency(props) {
  return (
    <Form.Group controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control as="select" onChange={props.onChange}>
        <option>Choose...</option>
        {Object.keys(props.data).map((currency, index) => {
          return (
            <option value={currency} key={index}>
              {currency} - {props.data[currency]}
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
}
