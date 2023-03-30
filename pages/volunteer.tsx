import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function Volunteer(props:any) {
  return (
    <>
      <Head>
        <title>{"Volunteer | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container id="volunteer" fluid="true">
          <Image fluid src="/img/hero-image-volunteer.jpg" alt="Cat face being brushed" />

          <Stack gap={3} className="top-padding">
            <Container fluid="lg" className="center">
              <h1>Volunteer opportunities</h1>
              <p>We welcome volunteers age 13 and older to put their individual talents, skills, and ideas to work. Below are some of the ways our wonderful volunteers assist at the shelter.</p>
            </Container>

            <Container fluid="lg">
              <Row xs={1} sm={2}>
                <Col sm={12} md={8}>
                  <h2>Adoption center care takers</h2>
                  <p>Every single day these volunteers ensure our kitties thrive in a healthy and clean environment while they await their forever homes. These volunteers distribute food and water, scoop litter boxes, and assist with dishes and laundry. We have two shifts: mornings (Monday - Sunday, 8:30am - noon) and evenings (Monday - Friday, 5:30pm - 7:30pm).</p>

                  <h2>Adoption counselors</h2>
                  <p>These volunteers assist with the adoption process of our kitties both at Cozy Cat Cottage and partner retailers like Pet Supplies Plus, PetSmart and Petco. All adoption counselors must complete our adoption counselor training in addition to general volunteer training.</p>

                  <h2>Fundraiser and event champions</h2>
                  <p>These individuals help organize, promote, and execute fundraising events for Cozy Cat Cottage. They help set up booths at events like craft shows, assist with mailings, hang up flyers and more.</p>

                  <h2>Maintenance</h2>
                  <p>These volunteers donate their time and talents to help us resolve maintenance issues (appliances, etc.) as they arise at our facility. We often post on our Facebook page when these opportunities occur.</p>

                  <h2>Runners</h2>
                  <p>Opportunities arise throughout the year where we need help picking up bulk donations of food or supplies. These volunteers help us retrieve the donations and deliver them to the shelter.</p>

                  <h2>Recycling</h2>
                  <p>We receive donations of aluminum cans throughout the year. Our recycling volunteers help us deliver the cans to a local recycling center where we receive dollars for the cans.</p>
                </Col>
                <Col sm={12} md={4}>
                  <Stack gap={3}>
                    <Image fluid src="/img/volunteer-group-1.jpg" alt="Group of female volunteers" />
                    <Image fluid src="/img/volunteer-cleaning-cages.jpg" alt="Volunteer cleaning cages" />
                    <Image fluid src="/img/volunteer-stacey-cat.jpg" alt="Stacey Nichols with a cat" />
                  </Stack>
                </Col>
              </Row>
            </Container>
            <Container fluid="lg">
              <h1>Volunteer orientation &amp; refresher training</h1>
              <p>Orientations are held twice a month (excluding holidays) on the first and third Saturday of each month at 10am BY <span className={styles.uppercase}>appointment only</span>. Volunteers must complete orientation before beginning service. Please contact Jeanie at <a href="mailto:volunteersforcozycatcottage@gmail.com">volunteersforcozycatcottage@gmail.com</a> to sign up.</p>

              <p>Please download and bring the completed volunteer form with you to orientation.</p>

              <Container className="center">
              <Button href="/files/Volunteer-Forms-08-10-20.doc" size="lg">Download form</Button></Container>
            </Container>
          </Stack>
          <Container fluid="true" className="primary-notice center">
            <Container fluid="md">
              <p><strong>Have more time to give?</strong> <Link href="/foster">Fostering is a great way to volunteer and spend extra time with our kitties!</Link></p>
            </Container>
          </Container>
          <Container fluid="true" className="dark-notice center">
            <Container fluid="md">
              <h2>We love our volunteers!</h2>
              <p>&ldquo;I learned so much. It was one of the most rewarding and educational experiences of my life, and I made lifelong friends. CCC has an incredible community of kind, compassionate people, and I&apos;m so thankful I could be a part of it!&rdquo;</p>
              <p>– Katja M., CCC volunteer</p>
            </Container>
          </Container>
        </Container>
      </main>
    </>
  )
}