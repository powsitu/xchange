import React from "react";
import { Container } from "react-bootstrap";
import CurrencyForm from "../../components/CurrencyForm";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <Container>
      <CurrencyForm />
    </Container>
  );
}
