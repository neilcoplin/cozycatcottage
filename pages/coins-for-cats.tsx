import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function CoinsForCats(props:any) {
  return (
    <>
      <Head>
        <title>{"Coins For Cats | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container fluid="true" id="coins-for-cats">
          <Stack gap={3} className="top-padding">
            <Container fluid="md" className="center">
              <h1>Coins for Cats</h1>
              <p>Fill one medicine bottle with quarters and help a sick kitty!</p>
            </Container>

            <Container fluid="xl">
              <Stack gap={3}>
                <Row xs={1} md={2}>
                  <Col md={7} xl={8}>
                    <p>One full medicine bottle buys a bottle of antibiotics to treat one cat or kitten suffering from a cold or upper respiratory infection.</p>

                    <p>Are you looking for a community service project for your Girl Scout/Boy Scout Troop, sports team, yoga studio, book club, fraternity, sorority or other group? It&apos;s simple! Tell us how many medicine bottles you need and we&apos;ll provide them. Every quarter makes a difference.</p>
                  </Col>
                  <Col md={5} xl={4}>
                    <Image fluid src="/img/coins-for-cats.jpg" alt="Pill bottles for collecting coins" />
                  </Col>
                </Row>
              </Stack>
            </Container>
          </Stack>
            
          <Container fluid="true" className="dark-notice center">
            <p><strong>Your financial support saves lives.</strong> <Link href="/donate">Donate today</Link></p>
          </Container>
        </Container>
      </main>
    </>
  )
}