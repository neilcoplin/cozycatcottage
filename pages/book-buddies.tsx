import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function BookBuddies(props:any) {
  return (
    <>
      <Head>
        <title>{"Book Buddies | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container fluid="true" id="book-buddies">
          <Image fluid src="/img/hero-image-book-buddies.jpg" alt="Two children reading to cats" />
          <Stack gap={3} className="top-padding">
            <Container fluid="lg" className="center">
              <h1>Book Buddies Reading Program Tuesday Evenings Only</h1>
              <p>The Book Buddies Program is a great way for kids to practice their reading, while also showing some love to the felines waiting for their forever home.</p>

              <p>Two reading times with one child/one adult: 6:00-6:30pm and 6:30-7:00pm. You must reserve a time by emailing: <a href="mailto:bookbuddies@cozycatcottage.org">bookbuddies@cozycatcottage.org</a>. You will receive a confirmation by email.</p>

              <p>We invite you to share the CCC Book Buddies program with your friends on social media! <strong>#CozyCatBB</strong></p>
            </Container>
          </Stack>
          <Container fluid="true" className="dark-notice center">
            <p><strong>Have more time to give?</strong> <Link href="/volunteer">Learn about volunteering at the shelter.</Link></p>
          </Container>
        </Container>
      </main>
    </>
  )
}