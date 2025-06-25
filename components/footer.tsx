import React from 'react';
import Link from 'next/link'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

import MailingList from './mailinglist';

import styles from '@/styles/Footer.module.css'

export default function Footer() {
  const today = new Date(); // For copyright display
  return (
    <Container fluid="true" className={styles.backgroundwrapper}>
      <Container fluid="xxl" className={styles.footer}>
        <Row xs={1} md={2} lg={3}>
          <Col>
            <p><strong>Visit us</strong><br />
              10344 Sawmill Road<br />
              Powell, Ohio 43065<br />
              <a href="https://maps.google.com/maps?ll=40.147608,-83.089366&z=15&t=m&hl=en-US&gl=US&mapclient=embed&q=10344%20Sawmill%20Rd%20Powell%2C%20OH%2043065" target="_blank" rel="noreferrer">View in Google Maps</a></p>
            
            <p><strong>Mailing address</strong><br />
              Cozy Cat Cottage Adoption Center<br />
              P.O. Box 283<br />
              Powell,&nbsp;Ohio 43065-0283</p>

            <p><a href="mailto:cozycatcottageadoption@gmail.com">Email us</a><br />
              <a href="tel:+16143368510">614.336.8510</a><br />
              614.336.8515 (fax)</p>
          </Col>
          <Col>
            <p><strong>Hours</strong><br />
            Weekdays: 10am - 2pm, 5:30pm - 7:30pm<sup>*</sup><br />
            Saturday: 11:00am - 3:00pm<br />
            Sunday: 1:30pm - 4:30pm</p>

            <p><sup>*</sup>Tuesday evening reserved for <Link href="/book-buddies">Book Buddies Reading Program</Link> only</p>
            <p className={styles.socialHeading}><strong>Connect with us</strong></p>

            <Stack direction="horizontal" gap={2}>
              <a className={styles.socialIcon} href="https://www.facebook.com/groups/cozycat/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="2xl" /></a>

              <a className={styles.socialIcon} href="https://www.instagram.com/cozycatcottageac/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="2xl" /></a>
            </Stack>

          </Col>
          <Col className="center">
            <Row>
              <Col>
                <Image src="/img/2022-great-non-profits.png" alt="Great Non-Profits 2022 Top-Rated Non-profit" fluid />
              </Col>
              <Col>
                <Image src="/img/2022-best-of-columbus.jpg" alt="2022 Best of Columbus Award" fluid />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col id="copyright" className={styles.copyright}>
            <p>Cozy Cat Cottage © {today.getFullYear()} | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}