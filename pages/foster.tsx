import Head from 'next/head'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function Foster(props:any) {
  return (
    <>
      <Head>
        <title>{"Foster | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container id="foster" fluid="true">
          <Image fluid src="/img/hero-image-foster.jpg" alt="Collage of kitten pictures" />

          <Stack gap={3} className="top-padding">
            <Container fluid="lg" className="center">
              <h1>Become a foster parent</h1>
              <p>Foster families help by caring for felines in their own homes until they are ready to begin their journey at our adoption center. Foster parents can choose between having kittens born in your home or welcoming a mama and her babies shortly after birth. They commit to caring for mom and her kittens for 8 to 10 weeks after the babies are born.</p>
            </Container>

            <Container fluid="lg">
              <Row xs={1} md={3}>
                <Col>
                  <h2>You provide:</h2>
                  <ul>
                    <li>A single room in their home for a mama cat and her kittens.</li>
                    <li>The basic comforts of home with blankets/towels, food and water dishes, and litter pans.</li>
                    <li>Attention, interaction, and love which gives mama cat and her babies the best chance to thrive.</li>
                  </ul>
                </Col>
                <Col>
                  <h2>We provide:</h2>
                  <ul>
                    <li>A supply of food and litter for mom and her babies.</li>
                    <li>Advice and support available 24/7 for the duration of foster care.</li>
                    <li>Medical attention as needed.</li>
                  </ul>
                </Col>
                <Col>
                  <Stack gap={3}>
                    <Image fluid src="/img/foster-kittens.jpg" alt="Kittens nursing with a mother cat" />
                    <Image fluid src="/img/sleeping-cat.jpg" alt="Grey cat sleeping on a serving tray" />
                  </Stack>
                </Col>
              </Row>
            </Container>
          </Stack>
          <Container fluid="true" className="primary-notice center">
            <h2>Ready to foster?</h2>
            <p>Contact us at <a href="mailto:cozycatcottageadoption@gmail.com">cozycatcottageadoption@gmail.com</a> with the subject line &ldquo;Foster Program&rdquo;. All applicants will go through our screening process.</p>
          </Container>
        </Container>
      </main>
    </>
  )
}