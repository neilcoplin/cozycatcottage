import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import styles from '@/styles/Feature.module.css'

export default function FeatureHolidayShopping() {
  
  return (
    <Container className={styles.FeatureHolidayShopping} fluid="sm">
      <Row xs={1} lg={2} className={styles.headerPadding}>
        <Col className={styles.center}>
          <h2>Holiday Shopping</h2>
          <p>Open October 30th to November 15th<br />
          Raffle sales through November 22nd</p>
          <Button href="https://www.cozycatcottagesale.com" size="lg" className="btn-secondary" target="_blank" rel="noreferrer">www.cozycatcottagesale.com</Button>
          <p>Shop Early - Save Money - Discounted Prices<br />
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