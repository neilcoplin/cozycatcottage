import Head from 'next/head'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function PuttingForPaws(props:any) {
  return (
    <>
      <Head>
        <title>{"Putting for Paws | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container fluid="true" id="putting-for-paws">
          <Stack gap={3}>
            <Image fluid src="/img/hero-putting-for-paws.jpg" alt="A group of golfers with golf carts" />

            <Container fluid="md" className="center">
              <h1><strong>Putting for Paws: Our 2022 Business Sponsors</strong></h1>
            </Container>

            <Container fluid="md">
              <Row xs={1} sm={2} md={3}>
                <Col sm={6} md={4}>
                  <h2>Rick Wright - RE/MAX Affiliates</h2>
                  <p><a href="tel:+16143278081">614-327-8081</a><br />
                  7239 Sawmill Rd., Suite 210<br />
                  Dublin OH 43016<br />
                  <a href="mailto:rickwright@remax.net">rickwright@remax.net</a><br />
                  Rick will donate $500 to CCC for every home bought or sold through him in 2022 when clients mention CCC <em>at first contact</em>.</p>

                  <p><a href="http://www.rickwright1.com" target="_blank" rel="noreferrer">www.rickwright1.com</a></p>

                  <Image fluid src="/img/remax-logo.png" alt="RE/MAX logo" />
                </Col>
                <Col sm={6} md={4}>
                  <h2>Custom Woodwork &amp; Residential Renovations</h2>
                  <p>Matthew Benjamin Woodcraft<br />
                  Connect on <a href="https://www.facebook.com/profile.php?id=100063769231919" target="_blank" rel="noreferrer">Facebook</a><br />
                  <a href="tel:+16142885005">614-288-5005</a></p>

                  <h2>Financial Services</h2>
                  <p>Fullen Financial Group<br />
                  <a href="http://www.fullenfinancial.com/" target="_blank" rel="noreferrer">fullenfinancial.com/</a></p>
                  <p>Mariner Wealth Advisors<br />
                  <a href="http://www.marinerwealthadvisors.com/" target="_blank" rel="noreferrer">marinerwealthadvisors.com/</a></p>

                  <h2>Food and Coffee</h2>
                  <p>Aladdin&apos;s Eatery - Powell<br />
                  <a href="http://www.aladdins.com/" target="_blank" rel="noreferrer">aladdins.com/</a></p>
                  <p>Highline Coffee Co. - Worthington<br />
                  <a href="http://www.highlinecoffeeco.com/" target="_blank" rel="noreferrer">highlinecoffeeco.com/</a></p>
                  <p>Yabo&apos;s Tacos - Powell<br />
                  <a href="http://www.myyabos.com/" target="_blank" rel="noreferrer">myyabos.com/</a></p>

                  <h2>Jewelry</h2>
                  <p>Kimberly&apos;s Diamond Corner - Powell<br />
                  <a href="http://www.kimberlysdiamondcorner.com/" target="_blank" rel="noreferrer">kimberlysdiamondcorner.com/</a></p>

                  <h2>Life Care Management</h2>
                  <p>iKor Columbus<br />
                  <a href="http://www.ikorcolumbus.com/" target="_blank" rel="noreferrer">ikorcolumbus.com/</a></p>

                  <h2>Pet &amp; Equine Cremation Services</h2>
                  <p>Pet Cremation Services, Inc.<br />
                  <a href="http://www.petcremationcolumbus.com/" target="_blank" rel="noreferrer">petcremationcolumbus.com/</a></p>

                  <h2>Pet Sitting Services</h2>
                  <p>Char&apos;s Cat Sitting<br />
                  <a href="mailto:sit4pet@me.com">sit4pet@me.com</a></p>

                  <h2>Science &amp; Consulting</h2>
                  <p>Jay Hobgood Hurricane Information &amp; Consultation<br />
                  <a href="http://www.jayhobgood.com/" target="_blank" rel="noreferrer">jayhobgood.com/</a></p>

                  <h2>Veterinary Services</h2>
                  <p>Animal Care Unlimited<br />
                  <a href="http://www.animalcareunlimited.com/" target="_blank" rel="noreferrer">animalcareunlimited.com/</a></p>
                  <p>Best Friends Veterinary Hospital<br />
                  <a href="http://www.bestfriendsvethospital.com/" target="_blank" rel="noreferrer">bestfriendsvethospital.com/</a></p>
                  <p>The Cat Doctor<br />
                  <a href="http://www.catdoctorcolumbus.com/" target="_blank" rel="noreferrer">catdoctorcolumbus.com/</a></p>
                  <p>Healthy Pets of Wedgewood, Inc.<br />
                  <a href="http://www.healthypetsofohio.com/" target="_blank" rel="noreferrer">healthypetsofohio.com/</a></p>
                  <p>OSU Veterinary Frank Stanton Spectrum of Primary Care Clinic<br />
                  <a href="https://vet.osu.edu/vmc/primarycare" target="_blank" rel="noreferrer">vet.osu.edu/vmc/primarycare</a></p>
                  <p>Riverside Drive Animal Care Center<br />
                  <a href="http://www.riversideanimalcare.com/" target="_blank" rel="noreferrer">riversideanimalcare.com/</a></p>

                </Col>
                <Col sm={6} md={4}>
                  <Image fluid src="/img/putting-for-paws-logo.jpg" alt="A logo of a cat shaped like a golf ball and tee" />
                </Col>
              </Row>
            </Container>
          </Stack>
          <Container fluid="true" className="dark-notice center">
            <Container fluid="md">
              <h2><strong>Interested in being a sponsor?</strong></h2>
              <p>Email <a href="mailto:cccp4p@gmail.com?subject=Sponsor%20for%20Putting%20for%20Paws">cccp4p@gmail.com</a> with &ldquo;Sponsor for Putting for Paws&rdquo; in the subject line.</p>
            </Container>
          </Container>
        </Container>
      </main>
    </>
  )
}