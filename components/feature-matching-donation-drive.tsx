import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import styles from '@/styles/Feature.module.css'

export default function FeatureMatchingDonationDrive() {
  
  return (
    <Container className={styles.FeatureMatchingDonationDrive} fluid="sm">
      <Row xs={1} lg={2} className={styles.headerPadding}>
        <Col className={styles.center}>
          <h2>5th Annual Matching Funds Campaign</h2>
          <p className={styles.largeParagraph}><strong>Double your donation this August and help us raise <span className={styles.brownText}>$20,000</span>!</strong></p>
          <p>A generous supporter will match donations up to our goal of $10,000. This major fundraiser is a great opportunity to help Cozy Cat Cottage continue its mission of rescuing and adoptiong hundreds of homeless, sick, and abused cats and kittens annually.</p>
          <Button href="https://paypal.com/us/fundraiser/charity/1803839" size="lg" className={styles.buttonOrange} target="_blank" rel="noreferrer">Donate via Paypal</Button>
          <p>The first 50 donors who donate $100 or more will receive a custom painting made by a current or previous Cozy Cat resident.</p>
        </Col>
        <Col className={styles.center}>
          <Image fluid src="/img/feature-matching-donation-cat-2.png" alt="A close up of the face of a grey, black and white long hair cat." />
          <p className={styles.captionText}>From 1998 to 2024, Cozy Cat Cottage has had 14,100+ adoptions thanks to your support!</p>
        </Col>
      </Row>
    </Container>
  )
}