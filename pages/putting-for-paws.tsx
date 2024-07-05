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
              <h1><strong>2024 Putting for Paws Business Sponsors</strong> <Image className={styles.p4pLogo} fluid src="/img/putting-for-paws-logo.jpg" alt="" role="presentation" /></h1>
            </Container>

            <Container fluid="md">
              <Stack gap={3}>
                <Row xs={1} sm={2} className={styles.mainSponsors}>
                  <Col sm={6}>
                    <h2>Event Sponsor</h2>
                    <p><Image fluid src="/img/osu-vmc-logo.png" alt="The Ohio State University Veterinary Medical Center" /></p>

                    <p><b>Hummel Trueman Hospital for Companion Animals (Specialty Care)</b><br />
                    Internal Medicine, Neurology, Cardiology, Ophthalmology, Integrated Oncology, Dermatology, Emergency Critical Care<br />
                    601 Vernon L Tharp Street, Columbus, OH 43210<br />
                    <a href="https://vmc.vet.osu.edu/companion" target="_blank" rel="noreferrer">vmc.vet.osu.edu/companion</a><br />
                    <a href="tel:+16142923551">614-292-3551</a><br />
                    8am - Midnight every day, including major holidays</p>
                    
                    <p><b>Frank Stanton Spectrum of Care Clinic (Primary Care)</b><br />
                    Providing state-of-the-art care for cats and dogs<br />
                    655 Vernon L Tharp Street, Columbus, OH 43210<br />
                    <a href="https://vmc.vet.osu.edu/primarycare" target="_blank" rel="noreferrer">vmc.vet.osu.edu/primarycare</a><br />
                    <a href="tel:+16142921573">614-292-1573</a><br />
                    Monday-Friday: 8am - 6pm; Saturday/Sunday: Closed</p>
                    
                    <p><b>Veterinary Medical Center at Dublin</b><br />
                    Urgent Care, Orthopedic and Ophthalmology Services<br />
                    5020 Bradenton Avenue, Dublin, OH 43017<br />
                    <a href="https://vmc.vet.osu.edu/dublin" target="_blank" rel="noreferrer">vmc.vet.osu.edu/dublin</a><br />
                    <a href="tel:+16148898070">614-889-8070</a><br />
                    Monday-Friday: 3pm - 10pm; Saturday/Sunday/Major Holidays: 9am - 10pm</p>
                  </Col>
                  <Col sm={6}>
                    <h2>Dinner Sponsor</h2>
                    <p><Image fluid src="/img/healthy-pets-of-ohio-logo.webp" alt="Healthy Pets of Ohio" /></p>

                    <p><b>Healthy Pets of Wedgewood</b><br />
                    Full-service veterinary hospital<br />
                    4041 Attucks Drive, Powell, OH 43065<br />
                    <a href="https://www.healthypetsofohio.com" target="_blank" rel="noreferrer">healthypetsofohio.com</a><br />
                    <a href="tel:+16149321000">614-932-1000</a>
                    </p>
                  </Col>
                </Row>
                <Row xs={1} sm={2} className={styles.sponsorList}>
                  <Col sm={12} className={styles.sponsorCategory}>
                    <h2>Eagle and Birdie Sponsors</h2>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h3>Acupuncture &amp; Wellness</h3>
                    <p>Thrive Acupuncture &amp; Wellness<br />
                    <a href="https://www.thriveacu.com/" target="_blank" rel="noreferrer">thriveacu.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h3>Compounding Pharmacy</h3>
                    <p>Central Ohio Compounding Pharmacy<br />
                    <a href="https://www.centralohcompoundingpharmacy.com/" target="_blank" rel="noreferrer">centralohcompoundingpharmacy.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h3>Finance and Banking Services</h3>
                    <p>Avior Wealth Management<br />
                    <a href="https://avior.com/locations/wealth-management-columbus-oh/" target="_blank" rel="noreferrer">avior.com/locations/wealth-management-columbus-oh/</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h3>Hurricane Consulting</h3>
                    <p>Jay Hobgood Hurricane Information &amp; Consultation<br />
                    <a href="http://www.jayhobgood.com" target="_blank" rel="noreferrer">jayhobgood.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h3>Jewelry</h3>
                    <p>Kimberly&apos;s Diamond Corner - Powell<br />
                    <a href="http://www.kimberlysdiamondcorner.com" target="_blank" rel="noreferrer">kimberlysdiamondcorner.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h3>Legal Services</h3>
                    <p>Wolfe &amp; Mote Law Group, LLC<br />
                    <a href="https://www.wvwlegal.com/?utm_source=google-local&utm_medium=organic&utm_campaign=402" target="_blank" rel="noreferrer">wvwlegal.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h3>Life Care Management</h3>
                    <p>iKOR Columbus<br />
                    <a href="https://ikorcolumbus.com/" target="_blank" rel="noreferrer">ikorcolumbus.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h3>Pet Euthanasia &amp; Cremation Services</h3>
                    <p>PCS - Pet Cremation Services<br />
                    <a href="https://petcremationcolumbus.com/" target="_blank" rel="noreferrer">petcremationcolumbus.com</a></p>
                    <p>Kona&apos;s Loving Paws<br />
                    <a href="https://www.konaslovingpaws.com/" target="_blank" rel="noreferrer">konaslovingpaws.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h3>Pet Sitting Services</h3>
                    <p>Char&apos;s Cat Sitting<br />
                    <a href="http://www.sit4pet.com/" target="_blank" rel="noreferrer">sit4pet.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h3>Petfood and Supplies</h3>
                    <p>Hollywood Feed<br />
                    <a href="https://www.hollywoodfeed.com/" target="_blank" rel="noreferrer">hollywoodfeed.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h3>Realtors</h3>
                    <p>Best Corporate Real Estate<br />
                    <a href="https://www.bestcorporaterealestate.com/" target="_blank" rel="noreferrer">bestcorporaterealestate.com</a></p>
                    <p>Rick Wright RE/MAX Affiliates<br />
                    <a href="https://www.rickwright1.com/" target="_blank" rel="noreferrer">rickwright1.com</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <h3>Veterinary Services</h3>
                    <p>Animal Care Unlimited<br />
                    <a href="https://www.animalcareunlimited.com/" target="_blank" rel="noreferrer">animalcareunlimited.com</a></p>
                    <p>Animal Hospital of Shawnee Hills<br />
                    <a href="https://shawneehillsvet.com/" target="_blank" rel="noreferrer">shawneehillsvet.com</a></p>
                    <p>Best Friends Veterinary Hospital<br />
                    <a href="https://bestfriendsvethospital.com/" target="_blank" rel="noreferrer">bestfriendsvethospital.com</a></p>
                    <p>The Cat Doctor<br />
                    <a href="http://www.catdoctorcolumbus.com/" target="_blank" rel="noreferrer">catdoctorcolumbus.com</a></p>
                    <p>Faithful Friends Veterinary Clinic<br />
                    <a href="https://faithfulfriendsvetclinic.com/" target="_blank" rel="noreferrer">faithfulfriendsvetclinic.com</a></p>
                    <p>Good Life Veterinary Care<br />
                    <a href="https://goodlifevetcare.com/" target="_blank" rel="noreferrer">goodlifevetcare.com</a></p>
                    <p>Linworth Animal Hospital<br />
                    <a href="https://www.linworthanimalhospital.com/" target="_blank" rel="noreferrer">linworthanimalhospital.com</a></p>
                    <p>Riverside Drive Animal Care Center<br />
                    <a href="https://www.thrivepetcare.com/locations/ohio/dublin/riverside-drive-animal-care-center" target="_blank" rel="noreferrer">thrivepetcare.com/locations/ohio/dublin/riverside-drive-animal-care-center</a></p>
                    <p>VCA Sawmill Animal Hospital<br />
                    <a href="https://vcahospitals.com/sawmill" target="_blank" rel="noreferrer">vcahospitals.com/sawmill</a></p>
                    <p>Veterinary Specialty Emergency Hospital (COVE) <br />
                    <a href="https://covepetcare.com/" target="_blank" rel="noreferrer">covepetcare.com</a></p>
                  </Col>

                </Row>
                <Row xs={1} sm={2} className={styles.sponsorList}>
                  <Col sm={12} className={styles.sponsorCategory}>
                    <h2>Door Prize &amp; Swag Bag Sponsors</h2>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <p>Aladdin&apos;s Eatery - Powell<br />
                    <a href="http://www.aladdins.com" target="_blank" rel="noreferrer">aladdins.com</a></p>
                    <p>Central Ohio Compounding Pharmacy<br/>
                    <a href="https://www.centralohcompoundingpharmacy.com/" target="_blank" rel="noreferrer">centralohcompoundingpharmacy.com</a></p>
                    <p>Chewy<br />
                    <a href="http://www.chewy.com" target="_blank" rel="noreferrer">chewy.com</a></p>
                    <p>Delaware Golf Club<br />
                    <a href="http://www.delawaregolfclub.com" target="_blank" rel="noreferrer">delawaregolfclub.com</a></p>
                    <p>Golf Galaxy<br />
                    <a href="https://stores.golfgalaxy.com/oh/dublin/3009" target="_blank" rel="noreferrer">stores.golfgalaxy.com/oh/dublin/3009</a></p>
                    <p>Golf Center at SportsOhio<br />
                    <a href="https://sportsohio.org/campus/the-park/the-golf-center/" target="_blank" rel="noreferrer">sportsohio.org/campus/the-park/the-golf-center/</a></p>
                    <p>Great Clips Worthington<br />
                    <a href="https://salons.greatclips.com/us/oh/columbus/7850-olentangy-river-rd" target="_blank" rel="noreferrer">salons.greatclips.com/us/oh/columbus/7850-olentangy-river-rd</a></p>
                    <p>JT&apos;s Pizza Palace<br />
                    <a href="https://jtspizzacolumbus.com/" target="_blank" rel="noreferrer">jtspizzacolumbus.com</a></p>
                    <p>Papa Giorgios<br />
                    <a href="https://papagiorgiosohio.com/" target="_blank" rel="noreferrer">papagiorgiosohio.com</a></p>
                    <p>PGA Tour Superstore<br />
                    <a href="https://www.pgatoursuperstore.com/stores/columbus-ohio/1223.html" target="_blank" rel="noreferrer">pgatoursuperstore.com/stores/columbus-ohio/1223.html</a></p>
                  </Col>
                  <Col sm={6} className={styles.sponsorCategory}>
                    <p>Par Golf Discount<br />
                    <a href="https://www.pargolfdiscount.com/" target="_blank" rel="noreferrer">pargolfdiscount.com</a></p>
                    <p>PNC Bank Powell<br />
                    <a href="https://apps.pnc.com/locator/location-details/ohio/powell/43065/00290070/powell-road" target="_blank" rel="noreferrer">apps.pnc.com/locator/location-details/ohio/powell/43065/00290070/powell-road</a></p>
                    <p>Raising Cane&apos;s<br />
                    <a href="https://locations.raisingcanes.com/oh/dublin/6410-sawmill-rd" target="_blank" rel="noreferrer">locations.raisingcanes.com/oh/dublin/6410-sawmill-rd</a></p>
                    <p>Rodos Greek Tavern<br />
                    <a href="https://rodos614.com/" target="_blank" rel="noreferrer">rodos614.com</a></p>
                    <p>Rusty Bucket<br />
                    <a href="https://www.myrustybucket.com/" target="_blank" rel="noreferrer">myrustybucket.com</a></p>
                    <p>Texas Roadhouse Polaris<br />
                    <a href="https://www.texasroadhouse.com/locations/168-polarisoh" target="_blank" rel="noreferrer">texasroadhouse.com/locations/168-polarisoh</a></p>
                    <p>Tomatillos Authentic Mexican<br />
                    <a href="https://tomatillosrestaurant.com/" target="_blank" rel="noreferrer">tomatillosrestaurant.com</a></p>
                    <p>Topgolf<br />
                    <a href="https://topgolf.com/us/columbus/" target="_blank" rel="noreferrer">topgolf.com/us/columbus/</a></p>
                    <p>Westerville Golf Center<br />
                    <a href="http://www.westervillegolf.com" target="_blank" rel="noreferrer">westervillegolf.com</a></p>
                    <p>X-Golf Powell<br />
                    <a href="https://linktr.ee/xgolfpowell" target="_blank" rel="noreferrer">linktr.ee/xgolfpowell</a></p>
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