import Head from 'next/head'
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

export default function MemorialTribute(props:any) {
  return (
    <>
      <Head>
        <title>{"Memorial Tribute | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Form>
          <Stack gap={3} id="memorial-tribute" className="top-padding">
            <Container fluid="lg">
              <h1 className="center">Memorial Tribute</h1>
              <p>To request a memorial tribute, please fill out the form below.  Instructions for sending in your donation are located below the form to complete your request.</p>
            </Container>
            <Container fluid="lg">
              <h2>Memorial information</h2>
              <Form.Group>
                <Form.Label>This gift is</Form.Label>
                <Form.Select id="memorial-type">
                  <option>in memory of</option>
                  <option>in honor of</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" id="memorial-name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>I would like to make a tribute gift of $</Form.Label>
                <Form.Control type="text" id="memorial-amount" />
              </Form.Group>
              <Form.Group>
                <Form.Label>I will send my donation via</Form.Label>
                <Form.Select id="memorial-method">
                  <option>Paypal</option>
                  <option>Check</option>
                  <option>Cash</option>
                </Form.Select>
              </Form.Group>
            </Container>
            <Container fluid="lg">
              <h2>My contact information</h2>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" id="from-name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Street</Form.Label>
                <Form.Control type="text" id="from-street" />
              </Form.Group>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" id="from-city" />
              </Form.Group>
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control type="text" id="from-state" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" id="from-zip" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" id="from-phone" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email contact</Form.Label>
                <Form.Control type="email" id="from-email" />
              </Form.Group>
            </Container>
            <Container fluid="lg">
              <h2>Honoree contact information</h2>
              <p>If you would like us to send an email or card to the person/pet you are honoring, please include their information for the card.</p>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" id="to-name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Street</Form.Label>
                <Form.Control type="text" id="to-street" />
              </Form.Group>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" id="to-city" />
              </Form.Group>
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control type="text" id="to-state" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Zip</Form.Label>
                <Form.Control type="phone" id="to-zip" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email contact</Form.Label>
                <Form.Control type="email" id="to-email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Add personalized message (up to 60 characters)</Form.Label>
                <Form.Control as="textarea" id="personalized-message" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Signature for card (up to 60 characters)</Form.Label>
                <Form.Control as="textarea" id="signature-text" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="submit" id="submit" value="Send" className="btn btn-secondary" />
              </Form.Group>
            </Container>
            <Container fluid="lg">
              <h2>Send in your donation</h2>
              <p>Donations should be sent in using the method you specified in the form above, via either cash, check or online with PayPal.  For cash or check donations, you may drop them off in person or send them to our post office box.  Checks should be made out to <b>&ldquo;Cozy Cat Cottage Adoption Center.&rdquo;</b></p>
            </Container>
            <Container fluid="lg">
              <Row xs={1} sm={3}>
                <Col xs={12} sm={4}>
                  <h3>In Person</h3>
                  <p>10344 Sawmill Road<br />
                  Powell, Ohio 43065</p>
                </Col>
                <Col xs={12} sm={4}>
                  <h2>By Mail</h2>
                  <p>Cozy Cat Cottage Adoption Center<br />
                  P.O. Box 283<br />
                  Powell, Ohio 43065-0283</p>
                </Col>
                <Col xs={12} sm={4}>
                  <h2>Online</h2>
                  <Button href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LRUGP6HJSNUKG" size="lg">Donate through Paypal</Button>
                </Col>
              </Row>
            </Container>
          </Stack>
        </Form>
      </main>
    </>
  )
}