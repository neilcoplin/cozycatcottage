import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import styles from '@/styles/Feature.module.css'

export default function FeatureHolidayShoppingExtended() {
  
  return (
    <Container className={styles.FeatureHolidayShopping} fluid="sm">
      <Row xs={1} lg={2} className={styles.headerPadding}>
        <Col className={styles.center}>
          <h2>Welcome to the Cozy Cat Cottage Holiday Sale</h2>
          <p>Five Great Raffles - Drawings December 7th at 7pm<br />
          100% of Proceeds Support the Care of Our Shelter Felines</p>
          <Button href="https://www.cozycatcottagesale.com/raffle-tickets" size="lg" className="btn-secondary" target="_blank" rel="noreferrer">Purchase Raffle Tickets Here Thru December 7th</Button>
          <Button href="https://www.paypal.com/us/fundraiser/charity/1803839" size="lg" className="btn-secondary" target="_blank" rel="noreferrer">Donations Appreciated</Button>
        </Col>
        <Col className={styles.center}>
          <Image fluid src="/img/feature-holiday-shopping-kitten.png" alt="A kitten under a Christmas tree with three presents." />
        </Col>
      </Row>
    </Container>
  )
}