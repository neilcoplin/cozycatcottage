import React from 'react';
import { Container } from "react-bootstrap";

export default function ClosureNotice(props:{
    message:string;
    untilDatestring:string;
}) {
  let now = new Date();
  let untilDate = new Date(props.untilDatestring)

  const className = now < untilDate ? "highlight-notice" : "hidden";
  return (
    <Container className={className} fluid="true">
      <Container fluid="lg">
        <p>{props.message}</p>
      </Container>
    </Container>
  );
}