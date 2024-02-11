import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import styles from '@/styles/Feature.module.css'

export default function FeatureHeartsAndPaws() {
  
  return (
    <Container className={styles.FeatureHeartsAndPaws} fluid="sm">
    <Row xs={1} lg={2} className={styles.headerPadding}>
      <Col className={styles.center}>
        <h2>Cozy Cat Cottage<br />Hearts &amp; Paws Fundraiser</h2>
        <p className={styles.largeParagraph}>February 10th - 29th, 2024</p>
        <p>Spring is just around the corner which means even more kittens will soon need our help to survive.</p>
        <p>Individuals donating $20 or more will be automatically entered in a bonus Taylor Swift themed raffle!</p>
        <Button href="https://www.cozycatcottagehearts.org" size="lg" className={styles.buttonPink} target="_blank" rel="noreferrer">Donate online</Button><br />
        <Button href="/files/HeartsAndPaws2024.pdf" size="lg" className={styles.buttonPink} target="_blank" rel="noreferrer">Download a donation form</Button>
      </Col>
      <Col className={styles.center}>
        <Image fluid src="/img/feature-hearts-and-paws-2024.png" alt="A white cat nursing three white kittens." />
      </Col>
    </Row>
  </Container>
  )
}