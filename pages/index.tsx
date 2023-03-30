import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Button, Card, Col, Container, Image, Row, Stack } from "react-bootstrap";

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
            <Container className="highlight-notice" fluid="true">
                <Container fluid="lg">
                <p>Visitors must use our hand sanitizer upon entering the shelter. We reserve the right to limit the number of visitors at any given time. <strong>General questions?</strong> Email <a href="mailto:cozycatcottageadoption@gmail.com">cozycatcottageadoption@gmail.com</a></p>
              </Container>
            </Container>

            <Container fluid="md" className="center">
              <h1>Finding forever homes since 1998</h1>
              <p>Cozy Cat Cottage Adoption Center is a non-profit, 501(c)(3), no-kill organization that provides refuge, aid, and care for abandoned, injured, abused or lost cats and kittens in Central Ohio, while finding them permanent, responsible, loving homes.</p>
            </Container>

            <Container fluid="md" className={styles.feature}>
              <Row xs={1} md={2} className="center">
                <Col xs={12} md={8} lg={9}>
                  <h2>Cozy Cat t-shirts, tanks and sweatshirts on sale until April 3!</h2>
                  <p>We will only be selling logo&apos;ed merchandise once a year!  Items can be shipped to you or Cozy Cat for pick up.</p>
                  <Button href="https://modeltees.com/cozy_cat_cottage/shop/home" size="lg" className="btn btn-secondary" target="_blank">Go to Apparel Store</Button>
                </Col>
                <Col xs={12} md={4} lg={3} className="contain">
                    <Image src="/img/feature-apparel.jpg" alt="Cozy Cat Cottage apparel for order: t-shirt, sweatshirt, ladies tank top, and zippered hoodie." fluid />
                </Col>
              </Row>
            </Container>

            <Container fluid="md" className="highlight-notice center">
              <p>We are currently at full capacity. We still honor our policy of accepting any feline <strong>originally adopted from us</strong> with an appointment and all medical records.</p>
            </Container>

            <Container fluid="lg">
              <Row xs={1} sm={2}>
                <Card className={styles.card}>
                  <Link href="/adopt">
                    <Card.Img variant="top" src="/img/meet-our-cats.jpg" alt="Black and white cat" />
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Meet our cats</Card.Title>
                    </Card.Body>
                  </Link>
                </Card>
                <Card className={styles.card}>
                  <Link href="/volunteer">
                    <Card.Img variant="top" src="/img/volunteer.jpg" alt="Volunteer brushing a cat" />
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>Volunteer</Card.Title>
                    </Card.Body>
                  </Link>
                </Card>
              </Row>
            </Container>

            <Container fluid="lg" className="center">
              <Row xs={1} md={3}>
                <Col xs={12} md={3} className="contain">
                    <Image src="/img/2022-best-of-columbus.jpg" alt="2022 Best of Columbus Award" fluid />
                </Col>
                <Col xs={12} md={6}>
                  <h2 className={styles.bold}>Recommended times to call</h2>
                  <p>We are available to answer calls in the evenings Monday through Friday from 5:30pm to 7:30pm, Saturday from 11:00am to 3:00pm and Sunday from 1:30pm to 4:30pm.</p>
                  
                  <Button href="/contact-us" size="lg">Contact us</Button>
                </Col>
                <Col xs={12} md={3} className="contain">
                    <Image src="/img/2022-great-non-profits.png" alt="Great Non-Profits 2022 Top-Rated Non-profit" fluid />
                </Col>
              </Row>
            </Container>
          </Stack>
          <Container fluid="true" className="dark-notice center">
            <p>Lost or found a cat? Act fast and visit <a href="https://petfbi.org/" target="_blank" rel="noreferrer">petfbi.org</a>.</p>
          </Container>
        </Container>
      </main>
    </>
  )
}