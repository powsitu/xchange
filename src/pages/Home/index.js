import React from "react";
import { Container, Card } from "react-bootstrap";
import CurrencyForm from "../../components/CurrencyForm";
import "bootstrap/dist/css/bootstrap.min.css";
import TheChart from "../../components/TheChart";

export default function Home() {
  return (
    <Container>
      <Card bg="light" text="dark">
        <Card.Header>xChange</Card.Header>
        <Card.Body>
          <CurrencyForm />
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Using rates from <a href="https://ratesapi.io/">ratesapi.io</a>
          </small>
        </Card.Footer>
      </Card>
      <Card text="dark">
        <TheChart />
      </Card>
    </Container>
  );
}
