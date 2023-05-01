import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import styles from '@/styles/Feature.module.css'

export default function FeatureP4P2023() {
  
  return (
    <Container className={styles.PuttingForPaws2023} fluid="sm">
      <Row className={styles.headerPadding}>
        <h2>Putting for Paws</h2>
        <p>Our <a href="https://www.cozycatgolf.org" target="_blank" rel="noreferrer">Putting for Paws Website</a> launches May 1st for both golfers and non-golfers. Sign up to play golf, enter 12 cash raffles, buy raffle tickets for a Florida vacation, 18-holes of golf, sponsor a hole or cart. 100% of proceeds will be used for the care of our feline residents. Help us to Protect Their Journey.</p>
        <hr className={styles.divider} />
      </Row>
      <Row xs={1} lg={2}>
        <Col className={styles.centered4Up}>
          <h3>June 17th, 2023</h3>
          <p>Safari Golf Club, Powell, OH<br />
            $80 per golfer<br />
            Scramble/Shotgun: 2:00pm<br />
            18-Holes, cart, range balls, dinner & cash prizes for contest winners<br />
            ($20 for dinner only)<br />
            <strong>Sign-up by June 6th</strong></p>
          <p className={styles.sponsor}>Event Sponsor: Healthy Pets of Wedgewood in Powell<br />
            Dinner Sponsor: OSU Veterinary Medical Center</p>
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
            <span className={styles.orangeText}>Win a week in Miramar Beach, FL<br />
            12 Raffles for cash prizes of $50</span><br />
            Pet pic gallery & sponsor promotions<br />
            <strong>The first raffle is June 2nd</strong></p>

            <Button href="https://www.cozycatgolf.org" size="lg" className={styles.buttonBrown}>Visit<br />www.cozycatgolf.org<br />to sign up</Button>
        </Col>
      </Row>
    </Container>
  )
}