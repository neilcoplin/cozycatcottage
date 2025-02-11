import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import styles from '@/styles/Feature.module.css'

export default function FeatureHeartsAndPaws() {
  return (
    <Container className={styles.FeatureHeartsAndPaws} fluid="sm">
    <Row xs={1} lg={2} className={styles.headerPadding}>
      <Col className={styles.center}>
        <h2>Cozy Cat Cottage<br />Hearts &amp; Paws Fundraiser</h2>
        <p className={styles.largeParagraph}>February 9th - 28th, 2025</p>
        <p>We hope you&apos;ll open your hearts during this season of love to help us raise $20,000 so we can care for the spring kittens that will be arriving soon, as well as the 150+ cats at our no-kill shelter.</p>
        <Button href="https://www.cozycatcottagehearts.com" size="lg" className={styles.buttonPink} target="_blank" rel="noreferrer">Donate online</Button><br />
        <Button href="/files/HeartsAndPaws2025.pdf" size="lg" className={styles.buttonPink} target="_blank" rel="noreferrer">Download a donation form</Button>
      </Col>
      <Col className={styles.center}>
        <Image fluid src="/img/feature-hearts-and-paws-2025.jpg" alt="A white cat nursing three white kittens." />
      </Col>
    </Row>
  </Container>
  )
}