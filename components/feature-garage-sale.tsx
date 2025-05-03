import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import styles from '@/styles/Feature.module.css'

export default function FeatureGarageSale() {
  
  return (
    <Container className={styles.GarageSale} fluid="true">
      <Container fluid="md">
      <Row xs={1} md={2}>
        <Col className={styles.center} xs={12} md={6}>
          <h2>Cozy Cat Cottage Garage Sale</h2>
          <p><strong>When: Saturday, May 17, 2025 from 9:00am to 2:00pm</strong></p>
          <p>The garage sale will take place behind the adoption center in the parking lot. This is event is successful thanks to the many items donated by Cozy Cat supporters. What a better way to get rid of your unwanted items than to donate them to help care for kitties.</p>
        </Col>
        <Col xs={12} md={6}>
          <h3>We need your stuff!</h3>
          <p>Drop items off at Cozy Cat Cottage during open hours Starting Saturday, May 3rd until Friday, May 16th.</p>
          <p>We can sell a wide variety of items including collectibles, antiques, home d&eacute;cor, housewares, electronics, DVD&apos;s, games, toys, tools, lawn equipment, etc. (no clothing or extra-large furniture, please). We ask that items be in working order and in good condition.</p>
        </Col>
      </Row>
      </Container>
    </Container>
  )
}