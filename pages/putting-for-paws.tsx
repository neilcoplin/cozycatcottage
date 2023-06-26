import Head from 'next/head'
import styles from '@/styles/PuttingForPaws.module.css'
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
              <h1><strong>2023 Putting for Paws Business Sponsors</strong> <Image className={styles.p4pLogo} fluid src="/img/putting-for-paws-logo.jpg" alt="" role='presentation' /></h1>
            </Container>

            <Container fluid="md">
              <Stack gap={3}>
                <Row xs={1} sm={2} className={styles.mainSponsors}>
                  <Col sm={6}>
                    <h2>Event Sponsor</h2>
                    <p><Image fluid src="/img/healthy-pets-of-ohio-logo.webp" alt="Healthy Pets of Ohio" /></p>

                    <p><b>Healthy Pets of Wedgewood</b><br />
                    4041 Attucks Drive<br />
                    Powell, OH 43065<br />
                    <a href="https://www.healthypetsofohio.com" target="_blank" rel="noreferrer">healthypetsofohio.com</a><br />
                    <a href="tel:+16149321000">614-932-1000</a>
                    </p>
                  </Col>
                  <Col sm={6}>
                    <h2>Dinner Sponsors</h2>
                    <p><Image fluid src="/img/osu-vmc-logo.png" alt="The Ohio State University Veterinary Medical Center" /></p>
                    
                    <p><b>Frank Stanton Spectrum of Care Clinic (Primary Care)</b><br />
                    655 Vernon L Tharp Street<br />
                    Columbus, OH 43210<br />
                    <a href="http://vet.osu.edu/vmc/primarycare" target="_blank" rel="noreferrer">vet.osu.edu/vmc/primarycare</a><br />
                    <a href="tel:+16142921573">614-292-1573</a></p>
                    
                    <p><b>Ohio State Veterinary Urgent Care Medical Center in Dublin</b><br />
                    5020 Bradenton Avenue<br />
                    Dublin, OH 43017<br />
                    <a href="tel:+16148898070">614-889-8070</a></p>
                  </Col>
                </Row>
                <Row xs={1} sm={2} className={styles.sponsorList}>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h2>Custom Woodwork &amp; Residential Renovations</h2>
                    <p>Matthew Benjamin Woodcraft<br />
                    Connect on <a href="https://www.facebook.com/profile.php?id=100063769231919" target="_blank" rel="noreferrer">Facebook</a><br />
                    <a href="tel:+16142885005">614-288-5005</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h2>Financial Services</h2>
                    <p>Fullen Financial Group<br />
                    <a href="http://www.fullenfinancial.com" target="_blank" rel="noreferrer">fullenfinancial.com</a></p>
                    <p>Mariner Wealth Advisors<br />
                    <a href="http://www.marinerwealthadvisors.com" target="_blank" rel="noreferrer">marinerwealthadvisors.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h2>Food and Coffee</h2>
                    <p>Aladdin&apos;s Eatery - Powell<br />
                    <a href="http://www.aladdins.com" target="_blank" rel="noreferrer">aladdins.com</a></p>
                    <p>Le Vieux Lyon French Bakery &amp; Market<br />
                    <a href="http://www.levieuxlyonfrenchbakerycafe.com" target="_blank" rel="noreferrer">levieuxlyonfrenchbakerycafe.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h2>Jewelry</h2>
                    <p>Kimberly&apos;s Diamond Corner - Powell<br />
                    <a href="http://www.kimberlysdiamondcorner.com" target="_blank" rel="noreferrer">kimberlysdiamondcorner.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h2>Life Care Management</h2>
                    <p>iKor Columbus<br />
                    <a href="http://www.ikorcolumbus.com" target="_blank" rel="noreferrer">ikorcolumbus.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h2>Pet &amp; Equine Cremation Services</h2>
                    <p>Pet Cremation Services, Inc.<br />
                    <a href="http://www.petcremationcolumbus.com" target="_blank" rel="noreferrer">petcremationcolumbus.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h2>Pet Food &amp; Supplies</h2>
                    <p>Hollywood Feed<br />
                    <a href="http://www.hollywoodfeed.com" target="_blank" rel="noreferrer">hollywoodfeed.com</a></p>
                  </Col>
                  <Col sm={6}>
                    <h2>Pet Sitting Services</h2>
                    <p>Char&apos;s Cat Sitting<br />
                    <a href="mailto:sit4pet@me.com">sit4pet@me.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h2>Realtors</h2>
                    <p>Aaron Lacy, Keller Williams<br />
                    <a href="mailto:aaronlacy@kw.com">aaronlacy@kw.com</a></p>
                    <p>Rick Wright, RE/MAX Affiliates<br />
                    <a href="http://www.rickwright1.com" target="_blank" rel="noreferrer">rickwright1.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h2>Science Consulting</h2>
                    <p>Jay Hobgood Hurricane Information &amp; Consultation<br />
                    <a href="http://www.jayhobgood.com" target="_blank" rel="noreferrer">jayhobgood.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h2>Veterinary Services</h2>
                    <p>Animal Care Unlimited<br />
                    <a href="http://www.animalcareunlimited.com" target="_blank" rel="noreferrer">animalcareunlimited.com</a></p>
                    <p>Best Friends Veterinary Hospital<br />
                    <a href="http://www.bestfriendsvethospital.com/" target="_blank" rel="noreferrer">bestfriendsvethospital.com/</a></p>
                    <p>The Cat Doctor<br />
                    <a href="http://www.catdoctorcolumbus.com/" target="_blank" rel="noreferrer">catdoctorcolumbus.com/</a></p>
                    <p>Healthy Pets of Wedgewood<br />
                    <a href="http://www.healthypetsofohio.com" target="_blank" rel="noreferrer">healthypetsofohio.com</a></p>
                    <p>OSU Veterinary Frank Stanton Spectrum of Primary Care Clinic<br />
                    <a href="https://vet.osu.edu/vmc/primarycare" target="_blank" rel="noreferrer">vet.osu.edu/vmc/primarycare</a></p>
                    <p>Riverside Drive Animal Care Center<br />
                    <a href="http://www.riversideanimalcare.com" target="_blank" rel="noreferrer">riversideanimalcare.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h2>Raffle Donors</h2>
                    <p>Aladdin&apos;s Eatery - Powell<br />
                    <a href="http://www.aladdins.com" target="_blank" rel="noreferrer">aladdins.com</a></p>
                    <p>Cameron Mitchell Restaurants<br />
                    <a href="http://www.cameronmitchell.com" target="_blank" rel="noreferrer">cameronmitchell.com</a></p>
                    <p>Chewy<br />
                    <a href="http://www.chewy.com" target="_blank" rel="noreferrer">chewy.com</a></p>
                    <p>The Clippers<br />
                    <a href="http://www.milb.com/columbus" target="_blank" rel="noreferrer">milb.com/columbus</a></p>
                    <p>Delaware Golf Club<br />
                    <a href="http://www.delawaregolfclub.com" target="_blank" rel="noreferrer">delawaregolfclub.com</a></p>
                    <p>Golf Galaxy<br />
                    <a href="https://stores.golfgalaxy.com/oh/dublin/3009" target="_blank" rel="noreferrer">stores.golfgalaxy.com/oh/dublin/3009</a></p>
                    <p>PGA Tour Superstore<br />
                    <a href="https://www.pgatoursuperstore.com/stores/columbus-ohio/1223.html" target="_blank" rel="noreferrer">pgatoursuperstore.com/stores/columbus-ohio/1223.html</a></p>
                    <p>Westerville Golf Center<br />
                    <a href="http://www.westervillegolf.com" target="_blank" rel="noreferrer">westervillegolf.com</a></p>
                  </Col>
                </Row>
              </Stack>
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