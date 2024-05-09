import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import styles from '@/styles/Feature.module.css'

export default function FeatureP4P2024() {
  
  return (
    <Container className={styles.PuttingForPaws2023} fluid="sm">
      <Row className={styles.headerPadding}>
        <h2>15th Annual Putting for Paws</h2>
        <p>A family-friendly event for golfers nad non-golfers benefitting Cozy Cat Cottage.  Individuals and businesses welcome!</p>
        <hr className={styles.divider} />
      </Row>
      <Row xs={1} lg={2}>
        <Col className={styles.centered4Up}>
          <h3>June 15th, 2024</h3>
          <p>Golf Tournament &amp; Dinner<br />
            Safari Golf Club, Powell, OH<br />
            $90 &amp; $120 golf options<br />
            Scramble/Shotgun: 2:00pm<br />
            18-Holes, cart, range balls, dinner &amp; cash prizes for contest winners<br />
            ($20 for dinner only)<br />
            <strong>Sign-up by June 5th</strong></p>
            <p className={styles.sponsor}>Event Sponsor: The Ohio State University Veterinary Medical Center
              Frank Stanton Spectrum of Care Clinic and Dublin Urgent Care<br />
              Dinner Sponsor: Healthy Pets of Wedgewood in Powell</p>
        </Col>
        <Col className={styles.noPadding}>
          <Image fluid src="/img/feature-p4p2023-cat-face.png" alt="Close up of a cat face" />
        </Col>
      </Row>
      <Row xs={1} lg={2}>
        <Col className={styles.noPadding}>
          <Image fluid src="/img/feature-p4p2023-logo.png" alt="Proceeds benefit Cozy Cat Cottage Adoption Center" />
        </Col>
        <Col className={styles.centered4Up}>
          <h3>June 1st - 30th, 2023</h3>
          <p>Virtual event open to everyone<br />
            <span className={styles.orangeText}>Win a week in Williamsburg, VA<br />
            6 Raffles for cash prizes of $100</span><br />
            Pet pic gallery & sponsor promotions<br />
            <strong>The first raffle is June 1st</strong></p>

            <Button href="https://www.cozycatgolf.org" size="lg" className={styles.buttonBrown}>Visit<br />www.cozycatgolf.org<br />to sign up</Button>
        </Col>
      </Row>
    </Container>
  )
}