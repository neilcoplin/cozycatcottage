import React from 'react';
import { Container } from "react-bootstrap";

export default function ClosureNotice(props:{
    message:string;
}) {
  return (
    <Container className="highlight-notice" fluid="true">
      <Container fluid="lg">
        <p>{props.message}</p>
      </Container>
    </Container>
  );
}