import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function PetResources(props:any) {
  return (
    <>
      <Head>
        <title>{"Pet Resources | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container fluid="true" id="pet-resources" className="top-padding">
          <Stack gap={3}>
            <Container fluid="md" className="center">
              <h1>Keep your pet happy, healthy and safe.</h1>
              <p>Whether you grew up with pets or are adopting your first one, it is important to educate yourself on animal care. Below is information that Cozy Cat Cottage believes is critical to know when owning a pet.</p>
            </Container>

            <Container fluid="xl">
              <Row xs={1} sm={2} md={3}>
                <Col className="bottom-padding">
                  <Image fluid src="/img/cat-feet.jpg" alt="Cat feet" />
                  <h2>The case against declawing</h2>
                  <p>Declawing is a painful procedure and can have serious and lifelong physical and behavioral consequences. <Link href="/case-against-declawing">Read why we oppose declawing.</Link></p>
                </Col>
                <Col className="bottom-padding">
                  <Image fluid src="/img/cat-with-collar.jpg" alt="Cat with collar" />
                  <h2>The importance of microchips</h2>
                  <p>Microchips and ID tags are critical for bringing your pet home safe if he or she gets lost. <Link href="/importance-of-microchips">Microchips bring lost pets home.</Link></p>
                </Col>
                <Col className="bottom-padding">
                  <Image fluid src="/img/introducing-cats.jpg" alt="Two cats sitting together" />
                  <h2>FIV and FeLV</h2>
                  <p>What are FIV and FeLV viruses and how do they affect felines? <Link href="/fiv-and-felv">What are FIV and FeLV?</Link></p>
                </Col>
                <Col className="bottom-padding">
                  <Image fluid src="/img/eartip-1.jpg" alt="Cat face with one ear tip clipped off" />
                  <h2>Trap-Neuter-Return (TNR)</h2>
                  <p>TNR has proven to be the most efficient way to control cat overpopulation. <Link href="/trap-neuter-return">Learn how you can help with TNR.</Link></p>
                </Col>
                <Col className="bottom-padding">
                  <Image fluid src="/img/introducing-cats-door.jpg" alt="Two cats looking at each other through a window in a door" />
                  <h2>Introducing pets</h2>
                  <p>Patience and a process are required for introducing pets. <Link href="/introducing-pets">Pet introduction tips.</Link></p>
                </Col>
                <Col className="bottom-padding">
                  <Image fluid src="/img/tortie.jpg" alt="Tortoise-shell cat" />
                  <h2>Safety in the home</h2>
                  <p>Make your home a safe space for all pets. <Link href="/safety-in-the-home">Learn about toxic foods, plants and other hazards.</Link></p>
                </Col>
              </Row>
            </Container>
          </Stack>
          <Container fluid="true" className="primary-notice center">
            <h2><strong>Ready to adopt?</strong></h2>
            <p><Link href="/adopt">Meet our felines looking for their forever homes.</Link></p>
          </Container>
        </Container>
      </main>
    </>
  )
}