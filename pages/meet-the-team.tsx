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
                {/*<Image fluid src="/img/board-amy-smerecky.jpg" alt="Photo of Amy Smerecky" />*/}
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Amy Smerecky</h2>
                <p className="subtitle">Executive Director</p>
                <p></p>
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
                {/*<Image fluid src="/img/board-beth-hinkle.jpg" alt="Photo of Beth Hinkle" />*/}
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Beth Hinkle</h2>
                <p className="subtitle">Secretary</p>
                <p>Beth serves as Secretary and as an adoption counselor on Saturdays and Thursdays. She is also one of the Grant writers for Cozy Cat Cottage. She, most recently moved here from Pittsburgh, PA in 2013 and since then she has lived in the Columbus area. She has 4 cats, all from CCC. When not at the shelter, she spends her time crafting for her LLC, friends and CCC.</p>
              </Col>
            </Row>
          </Container>
            
            <Container fluid="md">
              <Row xs={1} md={2}>
                <Col sm={4} md={3} xl={2}>
                  <Image fluid src="/img/board-becky-sprang.jpg" alt="Photo of Becky Sprang" />
                </Col>
                <Col sm={8} md={9} xl={10}>
                  <h2>Becky Sprang</h2>
                  <p className="subtitle">Treasurer</p>
                  <p></p>
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
                <Image fluid src="/img/board-tiffany-kinzer.jpg" alt="Photo of Tiffany Kinzer" />
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Tiffany Kinzer</h2>
                <p className="subtitle">Trustee</p>
                <p>Tiffany works as acting Director on Monday nights, makes follow-up calls to adopters and serves as a Trustee of the board. Originally from Lima, she moved to Columbus in 1998 and has twelve cats: Toby (FIV +), Frankie, Roman, Memphis, Paris, Stormy, Gus, Ellie (FIV +), CeCe, Henry, Niko and Mary. Tiffany also works full time for St. Jude Children&apos;s Research Hospital as a Philanthropic Advisor.</p>
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
                  <li>Madison Bell</li>
                  <li>Tracy Craine</li>
                  <li>Meryl Lu</li>
                  <li>Emma Waldron</li>
                  <li>Kassidy Williams</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Stack>
      </main>
    </>
  )
}