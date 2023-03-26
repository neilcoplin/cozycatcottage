import React from 'react';
import { Col, Container, Row, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

import MailingList from './mailinglist';

import styles from '@/styles/Footer.module.css'

export default function Footer() {
  const today = new Date(); // For copyright display
  return (
    <Container fluid="true" className={styles.backgroundwrapper}>
      <Container fluid="xxl" className={styles.footer}>
        <Row xs={1} md={2} lg={4}>
          <Col>
            <p><strong>Visit us</strong><br />
              10344 Sawmill Road<br />
              Powell, Ohio 43065<br />
              <a href="mailto:cozycatcottageadoption@gmail.com">Email us</a></p>
            
            <p><strong>Our mailing address</strong><br />
              Cozy Cat Cottage Adoption Center<br />
              P.O. Box 283<br />
              Powell,&nbsp;Ohio 43065-0283</p>

            <p><a href="tel:+16143368510">614.336.8510</a><br />
              614.336.8515 (fax)</p>
          </Col>
          <Col>
         <p><strong>Monday:</strong> 10am - 2pm, 5:30pm - 7:30pm<br />
            <strong>Tuesday:</strong> 10am - 2pm, Evenings: Book Buddies Reading Program Only*<br />
            <strong>Wednesday:</strong> 10am - 2pm, 5:30pm - 7:30pm<br />
            <strong>Thursday:</strong> 10am - 2pm, 5:30pm - 7:30pm<br />
            <strong>Friday:</strong> 10am - 2pm, 5:30pm - 7:30pm<br />
            <strong>Saturday:</strong> 11:00am - 3:00pm<br />
            <strong>Sunday:</strong> 1:30pm - 4:30pm</p>

            <p>*Two reading times with one child/one adult: 6:00-6:30pm and 6:30-7:00pm. You must reserve a time by emailing: <a href="mailto:bookbuddies@cozycatcottage.org">bookbuddies@cozycatcottage.org</a></p>

            <p>You will receive a confirmation by email.</p>
          </Col>
          <Col>
            <p><strong>Join our email list</strong></p>
            <MailingList />

            <p className={styles.socialHeading}><strong>Connect with us</strong></p>

            <Stack direction="horizontal" gap={2}>
              <a className={styles.socialIcon} href="https://www.facebook.com/groups/cozycat/?ref=bookmarks"><FontAwesomeIcon icon={faFacebook} size="2xl" /></a>

              <a className={styles.socialIcon} href="https://www.instagram.com/cozycatcottageac/"><FontAwesomeIcon icon={faInstagram} size="2xl" /></a>

              {/* Temporarily removing twitter logo
              <a className={styles.socialIcon} href="https://twitter.com/cozycatcottage"><FontAwesomeIcon icon={faTwitter} size="2xl" /></a>
              */}
            </Stack>
          </Col>

          <Col>
            <iframe loading="lazy" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.756515149968!2d-83.0916999489891!3d40.147707079779565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838ed834428f12f%3A0x60b290bca2300d43!2s10344+Sawmill+Rd%2C+Powell%2C+OH+43065!5e0!3m2!1sen!2sus!4v1543114665169" 
              width="100%" 
              height="250" 
              frameBorder="0" 
              allowFullScreen
              title="Google map of Cozy Cat Cottage"
            />

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