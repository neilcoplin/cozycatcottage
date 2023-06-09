import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Button, Card, Container, Image, Row, Stack } from "react-bootstrap";

export default function Home(props:any) {
  return (
    <>
      <Head>
        <title>{props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container fluid="true" id="homepage">
          <Stack gap={3}>
            {/* <Container className="highlight-notice" fluid="true">
                <Container fluid="lg">
                <p>Visitors must use our hand sanitizer upon entering the shelter. We reserve the right to limit the number of visitors at any given time. <strong>General questions?</strong> Email <a href="mailto:cozycatcottageadoption@gmail.com">cozycatcottageadoption@gmail.com</a></p>
              </Container>
            </Container> */}

            <Container fluid="md" className="center top-padding">
              <h1>Finding forever homes since 1998</h1>
              <p>Cozy Cat Cottage Adoption Center is a non-profit, 501(c)(3), no-kill organization that provides refuge, aid, and care for abandoned, injured, abused or lost cats and kittens in Central Ohio, while finding them permanent, responsible, loving homes.</p>
            </Container>

            <Container fluid="md" className="highlight-notice center">
              <p>We are currently at full capacity. We still honor our policy of accepting any feline <strong>originally adopted from us</strong> with an appointment and all medical records.</p>
            </Container>

            <Container fluid="lg">
              <Row xs={1} sm={2}>
                <Card className={styles.card}>
                  <Link href="/adopt" className={styles.cardButton}>
                    <Card.Img variant="top" src="/img/meet-our-cats.jpg" alt="Black and white cat" />
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Meet our cats</Card.Title>
                    </Card.Body>
                  </Link>
                </Card>
                <Card className={styles.card}>
                  <Link href="/volunteer" className={styles.cardButton}>
                    <Card.Img variant="top" src="/img/volunteer.jpg" alt="Volunteer brushing a cat" />
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Volunteer</Card.Title>
                    </Card.Body>
                  </Link>
                </Card>
              </Row>
            </Container>

            <Container fluid="lg" className="center">
              <h2 className={styles.bold}>Recommended times to call</h2>
              <p>We are available to answer calls in the evenings Monday through Friday from 5:30pm to 7:30pm, Saturday from 11:00am to 3:00pm and Sunday from 1:30pm to 4:30pm.</p>
              
              <Button href="/contact-us" size="lg">Contact us</Button>
            </Container>
          </Stack>
          <Container fluid="true" className="dark-notice center">
            <p><strong>Lost a cat or found one?</strong> Quick action brings the best results for a successful reunion. Visit <a href="https://petfbi.org/" target="_blank" rel="noreferrer">petfbi.org</a> to post a report or search for a lost pet.</p>
          </Container>
        </Container>
      </main>
    </>
  )
}