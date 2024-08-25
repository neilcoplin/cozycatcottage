import React from 'react';
import { Col, Container, Image, Row } from "react-bootstrap";

export default function ClosureNoticeWithPicture(props:{
    message:string;
    imagePath:string;
    altText:string;
}) {
  return (
    <Container className="closure highlight-notice" fluid="true">
      <Container fluid="lg">
        <p>{props.message}</p>
        <Container className="center">
            <Image fluid src={props.imagePath} alt={props.altText} />
        </Container>
      </Container>
    </Container>
  );
}