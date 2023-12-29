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
        <p>We will be closed Sunday, December 31st and Monday, January 1st in observance of the new year. Normal hours return Tuesday, January 2nd.  Thank you for your ongoing support.</p>
      </Container>
    </Container>
  );
}