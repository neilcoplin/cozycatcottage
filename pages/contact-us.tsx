import Head from 'next/head'
// import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";

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
            <h1 className="center">Visit Cozy Cat Cottage Adoption Center</h1>
          </Container>
          <Container fluid="lg">
            <Row xs={1} md={2}>
              <Col xs={12} md={4}>
                <p>10344 Sawmill Road<br />
                Powell, Ohio 43065<br />
                <a href="tel:+16143368510">614.336.8510</a><br />
                <a href="mailto:cozycatcottageadoption@gmail.com">Email us</a></p>

                <p><strong>Monday:</strong> 10am - 2pm, 5:30pm - 7:30pm<br />
                <strong>Tuesday:</strong> 10am - 2pm, Book Buddies Reading Program evenings only<br />
                <strong>Wednesday:</strong> 10am - 2pm, 5:30pm - 7:30pm<br />
                <strong>Thursday:</strong> 10am - 2pm, 5:30pm - 7:30pm<br />
                <strong>Friday:</strong> 10am - 2pm,  5:30pm - 7:30pm<br />
                <strong>Saturday:</strong> 11:00am - 3:00pm<br />
                <strong>Sunday:</strong> 1:30pm - 4:30pm</p>
              </Col>
              <Col xs={12} md={8}>
                <h2>Recommended times to call</h2>
                <p><strong>We are available to answer calls in the evenings Monday through Friday from 5:30pm to 7:30pm, Saturday from 11:00am to 3:00pm and Sunday from 1:30pm to 4:30pm.</strong></p>

                <p>As an alternative to calling, please consider joining our <a href="https://www.facebook.com/groups/cozycat/?ref=bookmarks" target="_blank" rel="noreferrer">Facebook page</a> and posting your questions or comments there. Our admins and our members are very active and usually respond quickly. You will need to request to join the Facebook group before you can post. You can also follow Cozy Cat Cottage on <a href="https://www.instagram.com/cozycatcottageac/" target="_blank" rel="noreferrer">Instagram</a>!</p>
              </Col>
            </Row>
          </Container>
        </Stack>
      </main>
    </>
  )
}