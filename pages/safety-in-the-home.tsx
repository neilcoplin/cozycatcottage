import Head from 'next/head'
import { Col, Container, Row, Stack } from "react-bootstrap";

export default function SafetyInTheHome(props:any) {
  return (
    <>
      <Head>
        <title>{"Safety in the Home | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container fluid="lg" id="safety-in-the-home" className="top-padding">
          <Stack gap={3}>
            <Container fluid="lg" className="center">
              <h1>Safety in the home</h1>
              <p>Did you know many substances commonly found in and around your home can be potentially dangerous to your animal companions? These are some items to watch for as you poison-proof your pet&apos;s home.</p>
            </Container>

            <Row xs={1} md={3}>
              <Col>
                <h2 className="top-padding">Medication precautions</h2>
                <p>Keep all prescriptions and over-the-counter drugs out of reach of your pets, preferably in closed cabinets.</p>
                <p>Remind guests to store their medications safely as well.</p>
                <p>Pain killers, cold medicines, anti-cancer drugs, antidepressants, vitamins and diet pills are common examples of human medications that could be potentially lethal to your pet, even in small doses.</p>
                <p><strong>One regular-strength ibuprofen tablet (200 mg) can cause stomach ulcers in a 10-pound dog.</strong></p>
              </Col>
              <Col>
                <h2 className="top-padding">Foods to avoid when feeding pets</h2>
                <ul>
                  <li>Alcoholic beverages</li>
                  <li>Avocado</li>
                  <li>Chocolate (all forms)</li>
                  <li>Coffee (all forms)</li>
                  <li>Fatty foods</li>
                  <li>Macadamia nuts</li>
                  <li>Garlic</li>
                  <li>Onions and onion powder</li>
                  <li>Raisins and grapes</li>
                  <li>Salt</li>
                  <li>Yeast dough</li>
                </ul>
              </Col>
              <Col>
                <h2 className="top-padding">Plants</h2>
                <p>While not a complete list, the following plants and their relatives can cause everything from mild gastric distress to death. For a complete list of dangerous plants, visit <a href="http://www.aspca.org" target="_blank" rel="noreferrer">www.aspca.org</a>.</p>
                <ul>
                  <li>Aloe Vera</li>
                  <li>Amaryllis</li>
                  <li>Members of the lily family</li>
                  <li>Asparagus fern</li>
                  <li>Azalea</li>
                  <li>Corn plant</li>
                  <li>Dieffenbachia</li>
                  <li>Dumb cane</li>
                  <li>Many ivies</li>
                  <li>Philodendron</li>
                  <li>Holly</li>
                  <li>Mistletoe</li>
                </ul>
              </Col>
            </Row>
          </Stack>
        </Container>
      </main>
    </>
  )
}