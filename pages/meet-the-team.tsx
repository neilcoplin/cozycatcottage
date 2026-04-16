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
                <p>Amy has been affiliated with Cozy Cat Cottage for over 15 years.  Amy began volunteering in October 2010 after she moved to Ohio from Georgia.  A lifelong lover of cats, she knew she had found her happy place immediately.  In 2011 she became a member of the medical team and fostered hundreds of cats and kittens.  A few years later, she became the medical team lead, foster home coordinator, and supervised the placement of cats into 3 partner pet stores.  February 1, 2025 Amy became the Executive Director of Cozy Cat Cottage.  Amy resides in New Albany with her husband Joe and their 8 cats Anna, Sam, Holleigh, Owen, Jupiter, Finnegan, Balboa, and Willow who is totally blind.  In her spare time, Amy enjoys watching football, binging TV series, travelling, and going to concerts.</p>
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
                <p className="subtitle">President</p>
                <p>Tiffany works as acting Director on Monday nights.  Originally from Lima, she moved to Columbus in 1998 and has ten cats: Toby (FIV+), Frankie, Roman, Paris, Stormy, Gus, CeCe, Henry, Niko, Henry, Mary and Tommy. Tiffany also works full time for St. Jude Children&apos;s Research Hospital as a Philanthropic Advisor.</p>
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
                <p className="subtitle">Vice President</p>
                <p>Beth serves as Secretary and as an adoption counselor on Saturdays and Thursdays. She is also one of the Grant writers for Cozy Cat Cottage. She, most recently moved here from Pittsburgh, PA in 2013 and since then she has lived in the Columbus area. She has 4 cats, all from CCC. When not at the shelter, she spends her time crafting for her LLC, friends and CCC.</p>
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
                <p className="subtitle">Secretary</p>
                <p>Jeannie serves as a Trustee and works with the medical team on Tuesdays, Wednesday, Fridays and Sundays. Originally from Dallas, Texas, she currently resides in Worthington with 8 cats. George, Sebastian, Scarlett Grace and Hope (hospice foster) are from CCC, Boots, Mickey and Levi were strays and Chloe Belle is from CHA.</p>
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
                {/* <Image fluid src="/img/board-ali-galbraith.jpg" alt="Photo of Ali Galbraith" /> */}
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Ali Galbraith</h2>
                <p className="subtitle">Trustee</p>
                <p>Ali started volunteering at Cozy Cat Cottage in 2014. She is a Trustee and works as an adoption counselor on Sundays. She also helps with events and other fundraising efforts. When she&apos;s not working as an adoption counselor, she enjoys spending time with the shelter&apos;s resident cats, taking pictures of them, and applying her design skills to various endeavors around the shelter.  At home, she lives with 2 cats, both grumpy old men, one of which was adopted from Cozy Cat. She enjoys watching true crime and crafting with them in her personal time.</p>
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


          <Container fluid="md">
            <Row xs={1} md={2}>
              <Col sm={4} md={3} xl={2}>
                <Image fluid src="/img/board-marla-leblanc.jpg" alt="Photo of Marla Leblanc" />
              </Col>
              <Col sm={8} md={9} xl={10}>
                <h2>Marla Leblanc</h2>
                <p className="subtitle">In Memorium</p>
                <p>Marla dedicated her life to the rescue, care, and protection of cats throughout Central Ohio. Prior to becoming President of Cozy Cat Cottage in 1998, she worked with Save A Pet and spent decades helping animals in need. Over the years, Marla gave countless hours of her time to the thousands of cats and kittens who came through our doors. She served on numerous committees, led major fundraising efforts, and helped shape Cozy Cat Cottage into the organization it is today.</p>
                
                <p>Marla&apos;s love for cats was evident in everything she did. She had a special place in her heart for tabbies, and her home was affectionately known as &ldquo;Tabby Township.&rdquo;</p>

                <p>Many knew Marla as &ldquo;the chicken lady&rdquo; because of the weekly chicken treats she lovingly prepared for the cats at Cozy Cat. She also had a gift for caring for the most fragile residents, often making special goat milkshakes for cats and kittens needing extra nourishment and comfort.</p>

                <p>Marla&apos;s compassion, dedication, and tireless work changed the lives of thousands of animals and touched the hearts of everyone who knew her. Her legacy will live on through the mission of Cozy Cat Cottage and in every cat that finds safety, love, and a forever home.</p>

                <p>Though our hearts are broken, we find comfort in knowing Marla is now reunited with all the cats who went before her.</p>

                <p>Her memory will forever remain a part of Cozy Cat Cottage.</p>
              </Col>
            </Row>
          </Container>

        </Stack>
      </main>
    </>
  )
}