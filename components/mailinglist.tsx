import React from 'react';
import { Col, Form, Row, Stack } from "react-bootstrap";

import styles from '@/styles/MailingList.module.css'

export default function MailingList() {
  return (
    <Form action="https://cozycatcottage.us3.list-manage.com/subscribe/post?u=1ae3cc87ca3c296059b619b6f&amp;id=c90d3fe81a&amp;f_id=00dcc2e1f0"
        method="post"
        name="mc-embedded-subscribe-form"
        className={styles.validate}
        target="_blank">
      <Form.Control className={styles.honeypot} type="text" name="b_1ae3cc87ca3c296059b619b6f_c90d3fe81a" tabIndex={-1} />
      <Stack gap={1}>
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" id="mailing-list-fname" name="FNAME" placeholder="first name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" id="mailing-list-lname" name="LNAME" placeholder="last name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your email address</Form.Label>
          <Form.Control type="email" id="mailing-list-email" name="EMAIL" placeholder="your email address (required)" />
        </Form.Group>
        <Form.Control type="submit" className={styles.button} id="subscribe" value="Sign up right meow!" />
      </Stack>
    </Form>
  );
}