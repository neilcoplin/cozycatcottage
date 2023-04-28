import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import MailingList from '../components/mailinglist';

export default function ContactUs(props:any) {
  return (
    <>
      <Head>
        <title>{"Contact Us | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Stack gap={3} id="contact-us">
          <Image fluid src="/img/hero-image-pawsonglass.jpg" alt="Cat face closeup with paws on glass window." />

          <Container fluid="lg">
            <h1 className="center">Contact us</h1>
          </Container>
          <Container fluid="lg">
            <Row xs={1} md={2}>
              <Col xs={12} md={4}>
                <Row xs={1} sm={2} md={1}>
                  <Col className={styles.bottomMargin}>
                    <h2>Hours</h2>
                    <p><strong>Weekdays:</strong> 10am - 2pm, 5:30pm - 7:30pm<br />
                    <strong>Saturday:</strong> 11:00am - 3:00pm<br />
                    <strong>Sunday:</strong> 1:30pm - 4:30pm</p>

                    <p>* Tuesday evening reserved for <Link href="/book-buddies">Book Buddies Reading Program</Link> only</p>
                  </Col>
                  <Col className={styles.bottomMargin}>
                    <h2>Visit us</h2>
                    <p>10344 Sawmill Road<br />
                    Powell, Ohio 43065<br />
                    <a href="mailto:cozycatcottageadoption@gmail.com">Email us</a><br />
                    <a href="tel:+16143368510">614.336.8510</a> (phone)<br />
                    614.336.8515 (fax)
                    </p>
                    <h2>Our mailing address</h2>
                    <p>Cozy Cat Cottage Adoption Center<br />
                    P.O. Box 283<br />
                    Powell, Ohio 43065-0283</p>
                  </Col>
                </Row>

                <iframe loading="lazy" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.756515149968!2d-83.0916999489891!3d40.147707079779565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838ed834428f12f%3A0x60b290bca2300d43!2s10344+Sawmill+Rd%2C+Powell%2C+OH+43065!5e0!3m2!1sen!2sus!4v1543114665169" 
                  width="100%" 
                  height="250" 
                  allowFullScreen
                  title="Google map of Cozy Cat Cottage"
                />
              </Col>
              <Col xs={12} md={8}>
                <h2>Ways to connect</h2>
                <p><strong>Due to high call volume we are unable to return messages.</strong>  Please email <a href="mailto:cozycatcottageadoption@gmail.com">cozycatcottageadoption@gmail.com</a> or post your question or comments on our <a href="https://www.facebook.com/groups/cozycat/" target="_blank" rel="noreferrer">Facebook page</a>. Our admins and our members are very active and re-spond quickly. You will need to request to join the Facebook group before you can post. You can also follow Cozy Cat Cottage on <a href="https://www.instagram.com/cozycatcottageac/" target="_blank" rel="noreferrer">Instagram</a>!</p>

                <h2>Follow up paperwork</h2>
                <p>As part of our adoption contract, we require adopted felines to be seen by a veterinarian of the owner&apos;s choosing <strong>within 5 business days of the adoption at the owner&apos;s expense</strong>. This ensures the establishment of the feline with a local veterinarian. <strong>Please email a copy of the check-up veterinary paperwork to <a href="mailto:followup@cozycatcottage.org">followup@cozycatcottage.org</a></strong> or fax to 614.336.8515 within <strong>10 days</strong>.</p>

                <h2>Join our email list</h2>
                <MailingList />

              </Col>
            </Row>
          </Container>
        </Stack>
      </main>
    </>
  )
}