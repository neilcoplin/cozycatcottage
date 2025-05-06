import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Link from 'next/link'

import styles from '@/styles/Feature.module.css'

export default function FeatureP4P2025() {
  
  return (
    <Container className={styles.PuttingForPaws2023} fluid="sm">
      <Row className={styles.headerPadding}>
        <h2>16th Annual Putting for Paws</h2>
        <p>A family-friendly event for golfers nad non-golfers benefitting Cozy Cat Cottage.</p>
        <hr className={styles.divider} />
      </Row>
      <Row xs={1} lg={2}>
        <Col className={styles.centered4Up}>
          <h3>June 14th, 2025</h3>
          <p>Golf Tournament &amp; Dinner<br />
            Safari Golf Club, Powell, OH<br />
            $90, $120 &amp; $145 golf options<br />
            18-Hole golf, buffet dinner, contests, and prizes<br />
            Registration opens at Noon | Range balls at 1 pm<br />
            Scramble format at 2:00pm<br />
            ($20 for dinner only)<br />
            <strong>Sign-up by June 4th</strong></p>
            <p className={styles.sponsor}>Event Sponsor: <Link href="https://buckeyeheat.com/location/powell-ohio/" target="_blank" rel="noreferrer">Buckeye Heating, Cooling &amp; Plumbing</Link><br />
              Dinner Sponsor: <Link href="https://www.healthypetsofohio.com/" target="_blank" rel="noreferrer">Healthy Pets of Wedgewood in Powell</Link></p>
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

            <Button href="https://www.cozycatgolf.com" size="lg" className={styles.buttonBrown}>Visit<br />www.cozycatgolf.com<br />to sign up</Button>
        </Col>
      </Row>
    </Container>
  )
}