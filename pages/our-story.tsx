import Head from 'next/head'
// import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function OurStory(props:any) {
  return (
    <>
      <Head>
        <title>{"Our Story | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Stack gap={3} id="our-story">
          <Image fluid src="/img/hero-image-ourstory.jpg" alt="Newspaper images of Cindi Clum with cats." />

          <Container fluid="md">
            <h1>The Cozy Cat Cottage story</h1>
            <Row xs={1} sm={2}>
              <Col sm={8} md={9} lg={10}>
                <h2>It all began with a cat named Gretchen</h2>
                <p>Cozy Cat Cottage Adoption Center opened its doors in October of 1998 in Powell, Ohio. Founder Cindi Clum and her husband Casey used a portion of their retirement savings to start the feline rescue. Cindi and Casey were volunteers at another area shelter when they saw animal welfare become less of a priority.</p>

                <p>The couple had planned to start their own shelter in a few years, but a special needs cat (they later named Gretchen) who was lacking in the care she needed, caused them to expedite their plans. Cindi and Casey took Gretchen and a few other cats and started Cozy Cat Cottage Adoption Center. Through love, attention, and the medication she needed, Gretchen recovered and found her forever home.</p>

                <p>Photo: Cindi and Gretchen, circa 1998</p>
              </Col>
              <Col sm={4} md={3} lg={2}>
                <Image fluid src="/img/our-story-gretchen-cindi.jpg" alt="Cindi Clum with Gretchen" />
              </Col>
            </Row>
          </Container>

          <Container fluid="lg">
            <Row sm={1} md={2}>
              <Col>
                <h2>Our mission</h2>
                <p>Cozy Cat Cottage Adoption Center is a non-profit, 501(c)(3), no-kill organization that provides refuge, aid and care for abandoned, injured and/or abused felines. We are committed to providing shelter and care for these felines while attempting to find permanent, responsible, loving homes.</p>

                <p>We are dedicated to promoting respect and compassion for all animals through humane education and vigorously promoting spay and neuter to reduce the overpopulation of felines in central Ohio.</p>
              </Col>
              <Col>
                <Image fluid src="/img/holding-cat.jpg" alt="Close up of a cat being held by a volunteer." />
              </Col>
            </Row>
          </Container>

          <Container fluid="lg">
            <Row sm={1} md={2}>
              <Col>
                <h2>Our impact</h2>
                <p>We work tirelessly every day to help the central Ohio homeless cat population. Since opening in 1998, we have found forever homes for over 12,000 cats and kittens. In addition to our rescue work, we also partner with individuals and local communities to trap, neuter and return feral cats (also referred to as the T-N-R program) with the intent to properly curb the cat overpopulation.</p>

                <p>Additionally, Cozy Cat Cottage regularly works with local schools, businesses, and youth programs to provide education on animal welfare, the issues with cat overpopulation, and how the public can help.</p>
              </Col>
              <Col>
                <Image fluid src="/img/farmers-market-event.jpg" alt="Cozy cat booth at a farmers' market." />
              </Col>
            </Row>
          </Container>
        </Stack>
      </main>
    </>
  )
}