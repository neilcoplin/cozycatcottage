import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import styles from '@/styles/Feature.module.css'

export default function FeatureHolidayShopping() {
  
  return (
    <Container className={styles.FeatureHolidayShopping} fluid="sm">
      <Row xs={1} lg={2} className={styles.headerPadding}>
        <Col className={styles.center}>
          <h2>2025 Holiday Shopping</h2>
          <p>Open October 30th to November 15th</p>
          <Button href="https://www.cozycatsanta.com" size="lg" className="btn-secondary" target="_blank" rel="noreferrer">www.cozycatsanta.com</Button>
          <p>Save Time &amp; Money - Discounted Prices<br />
          Fast Drive-Thru Pickup</p>
          <p>100% of proceeds support Cozy Cat Cottage</p>
        </Col>
        <Col className={styles.center}>
          <Image fluid src="/img/feature-holiday-shopping-kitten.png" alt="A kitten under a Christmas tree with three presents." />
        </Col>
      </Row>
    </Container>
  )
}