import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import styles from '@/styles/Feature.module.css'

export default function FeatureHolidayMarketplace() {
  
  return (
    <Container className={styles.FeatureHolidayMarketplace} fluid="sm">
      <Row xs={1} lg={2} className={styles.headerPadding}>
        <Col className={styles.center}>
          <h2>Shop the Cozy Cat Cottage Holiday Marketplace</h2>
          <p>350+ items have been discounted; from dog and cat items to jewelry and housewares and everything in between.</p>
          <p>Fast drive-thru pick-up &bull; Gift cards &bull; Great raffles</p>
          <Button href="https://www.cozycatsanta.org" size="lg" className="btn-secondary" target="_blank" rel="noreferrer">Open now at<br />cozycatsanta.org</Button>
          <p>100% of proceeds support the care of 200+ cats and kittens.</p>
        </Col>
        <Col className={styles.center}>
          <Image fluid src="/img/feature-holiday-marketplace-kitten.png" alt="A kitten under a christmas tree with two ornaments." />
        </Col>
      </Row>
    </Container>
  )
}