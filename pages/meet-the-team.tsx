import Head from 'next/head'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function MeetTheTeam(props:any) {
  return (
    <>
      <Head>
        <title>{"Meet the Team | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Stack gap={3} id="meet-the-team">
          <Container fluid="md" className="top-padding">
            <h1>Meet the Team</h1>
            <h2>Board of Directors</h2>
            <p>The Cozy Cat Cottage Board of Directors is comprised of an Executive Director and six volunteers who are driven by their passion for animals welfare. Its members are involved in all facets of the organization from day-to-day cleaning to running off-site events. The Board meets quarterly to discuss the direction and management of the organization&apos;s mission.</p>
          </Container>
            
          <Container fluid="md">
            <Row xs={1} sm={2}>
              <Col sm={4} md={3} xl={2}>
                <Image fluid src="/img/board-cindi-clum.jpg" alt="Photo of Cindi Clum" />
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Cynthia (Cindi) Clum-Oppenheimer</h2>
                <p className="subtitle">Co-Founder, Executive Director</p>
                <p>Cindi co-founded Cozy Cat Cottage (CCC) in 1998 has dedicated her life to serving as the Executive Director. She lives in Powell with eight cats, all adopted from CCC (Briar, Aires, Aristotle, Apollo, Aphrodite, Athena, Xena and Cochise) and one very large dog named Titan who spends his time with her at the shelter.</p>
              </Col>
            </Row>
          </Container>
            
          <Container fluid="md">
            <Row xs={1} md={2}>
              <Col sm={4} md={3} xl={2}>
                <Image fluid src="/img/board-marla-leblanc.jpg" alt="Photo of Marla Leblanc" />
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Marla Leblanc</h2>
                <p className="subtitle">President</p>
                <p>Marla helped Cindi establish Cozy Cat Cottage and currently serves as President. She resides in Columbus with her 4 cats, 3 of whom are from CCC. When she&apos;s not at the shelter, Marla enjoys cooking and spending time with family and friends.</p>
              </Col>
            </Row>
          </Container>
            
          <Container fluid="md">
            <Row xs={1} md={2}>
              <Col sm={4} md={3} xl={2}>
                <Image fluid src="/img/board-ann-kline.jpg" alt="Photo of Ann Kline" />
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Ann Kline</h2>
                <p className="subtitle">Vice President</p>
                <p>Ann serves as Vice President and lives in Powell with her 4 FIV+ cats, all adopted from CCC. When she is not working tirelessly at the shelter, she enjoys playing golf and spending time with her grandsons.</p>
              </Col>
            </Row>
          </Container>
            
          <Container fluid="md">
            <Row xs={1} md={2}>
              <Col sm={4} md={3} xl={2}>
                <Image fluid src="/img/board-barb-hulse.jpg" alt="Photo of Barb Hulse" />
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Barb Hulse</h2>
                <p className="subtitle">Director, Secretary</p>
                <p>Barb simultaneously serves as Director and Board Secretary. Originally from Cincinnati, she now lives in Marion and works as a licensed massage therapist. Barb has adopted 4 cats from CCC and also has 2 Quarter Horses, Super and Paris whom she shows at local Quarter Horse shows.</p>
              </Col>
            </Row>
          </Container>
            
          <Container fluid="md">
            <Row xs={1} md={2}>
              <Col sm={4} md={3} xl={2}>
                <Image fluid src="/img/board-jeannie-beyer-loynes.jpg" alt="Photo of Jeannie Beyer Loynes" />
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Jeannie Beyer Loynes</h2>
                <p className="subtitle">Trustee</p>
                <p>Jeannie serves as a Trustee and works with the medical team on Tuesdays, Wednesday, Fridays and Sundays. Originally from Dallas, Texas, she currently resides in Worthington with 8 cats. George, Sebastian, Scarlett Grace and Hope (hospice foster) are from CCC, Boots, Mickey and Levi were strays and Chloe Belle is from CHA.</p>
              </Col>
            </Row>
          </Container>
            
          <Container fluid="md">
            <Row xs={1} md={2}>
              <Col sm={4} md={3} xl={2}>
                <Image fluid src="/img/board-sandy-chiaramonte.jpg" alt="Photo of Sandy Chiaramonte" />
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Sandy Chiaramonte</h2>
                <p className="subtitle">Trustee</p>
                <p>Sandy serves as a Trustee and does follow-up vet calls and assists with community programming for Cozy Cat Cottage. She resides in Powell and has four cats (two from CCC) and one dog. Sandy also spends time managing her property in southeastern Ohio for the purpose of wildlife habitat and nature appreciation.</p>
              </Col>
            </Row>
          </Container>
            
          <Container fluid="md">
            <Row xs={1} md={2}>
              <Col sm={4} md={3} xl={2}>
                <Image fluid src="/img/board-tiffany-kinzer.jpg" alt="Photo of Tiffany Kinzer" />
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Tiffany Kinzer</h2>
                <p className="subtitle">Trustee</p>
                <p>Tiffany works as acting Director on Monday nights, makes follow-up calls to adopters and serves as a Trustee of the board. Originally from Lima, she moved to Columbus in 1998 and has ten cats: Giselle, Charlie, Toby (FIV+), Paris, Stormy, Gus, Roman, Memphis, Frankie and Jaycee. Tiffany also works full time for St. Jude Children&apos;s Research Hospital as a Philanthropic Advisor.</p>
              </Col>
            </Row>
          </Container>

          <Container fluid="md">
            <Row xs={1} md={2}>
              <Col sm={4} md={3} xl={2}>
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Medical Team</h2>
                <ul>
                  <li>Amy Smerecky</li>
                  <li>Kathy Hyatt</li>
                  <li>Renene Penwell</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Stack>
      </main>
    </>
  )
}