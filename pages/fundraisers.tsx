import Head from 'next/head'
import Link from 'next/link'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import MailingList from '../components/mailinglist';

export default function Fundraisers(props:any) {
  return (
    <>
      <Head>
        <title>{"Fundraisers | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container fluid="true" id="fundraisers">
          <Stack gap={3} className="top-padding">
            <Container fluid="md" className="center">
              <h1>Cozy Cat Cottage events and fundraisers</h1>
              <p>Your attendance and support help us continue our mission to save lives and protect the journeys of felines throughout Central Ohio. Stay up to date with the latest events and fundraisers by joining our email list or by following us on <a href="https://www.facebook.com/groups/cozycat/?ref=bookmarks" target="_blank" rel="noreferrer">Facebook</a> or <a href="https://www.instagram.com/cozycatcottageac/" target="_blank" rel="noreferrer">Instagram</a>.</p>

              <MailingList />
            </Container>

            <Container fluid="lg">
              <Row xs={1} sm={2}>
                <Col sm={12} md={8}>
                  <h2>Putting for Paws</h2>
                  <p>Calling all golfers to attend our <a href="https://www.cozycatgolf.org/" target="_blank" rel="noreferrer">annual golf outing virtually or in-person</a>.</p>

                  <h2>Kitten Showers</h2>
                  <p>Traditionally held in the spring at the beginning of &ldquo;kitten season&rdquo;, Kitten Showers raise much-needed funds and supplies necessary to care for our neonatal kittens and critically sick or injured kittens and mama cats. Refreshments are served and you might catch a glimpse of newborn kittens! Check our <a href="https://www.facebook.com/groups/cozycat/?ref=bookmarks" target="_blank" rel="noreferrer">Facebook page</a> or make sure you&apos;re on our email list to stay up to date on dates for the next Kitten Shower.</p>
                  <p>Looking for another way to help kittens? <Link href="/foster">Learn more about our fostering program</Link>.</p>

                  <h2>Pet Photos with the Easter Bunny</h2>
                  <p>Just like Santa, the Easter Bunny is ready to pose with your pet. Prints and digital files are available for immediate purchase and 100% of all proceeds benefit Cozy Cat Cottage. Check out our <a href="https://www.facebook.com/groups/cozycat/?ref=bookmarks" target="_blank" rel="noreferrer">Facebook page</a> or join our email list to keep up with the Easter Bunny&apos;s schedule. All pets are welcome.</p>

                  <h2>Festivals, Halloween, Valentine&apos;s Day parties and more</h2>
                  <p>Cozy Cat Cottage exhibits at local festivals and hosts a variety of other parties at the shelter. Check out our <a href="https://www.facebook.com/groups/cozycat/?ref=bookmarks" target="_blank" rel="noreferrer">Facebook page</a> or join our email list to keep up-to-date!</p>
                </Col>
                <Col sm={12} md={4}>
                  <figure>
                    <Image fluid src="/img/fundraisers-golf.jpg" alt="Group of four golfers on a golf course" />
                  </figure>

                  <figure>
                    <Image fluid src="/img/fundraisers-silentauction.jpg" alt="A couple spinning the prize wheel at the silent auction" />
                  </figure>

                  <figure>
                    <Image fluid src="/img/fundraisers-kittenshower.jpg" alt="Group of 3 kids with donations for kittens" />
                  </figure>
                </Col>
              </Row>
            </Container>
          </Stack>
            
            <Container fluid="true" className="dark-notice center">
              <p><strong>Your financial support saves lives.</strong> <Link href="https://www.paypal.com/us/fundraiser/charity/1803839" target="_blank" rel="noreferrer">Donate through PayPal</Link></p>
            </Container>
        </Container>
      </main>
    </>
  )
}