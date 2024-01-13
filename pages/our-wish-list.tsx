import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function OurWishList(props:any) {
  return (
    <>
      <Head>
        <title>{"Our Wish List | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container id="our-wish-list" fluid="true">
          <Image fluid src="/img/hero-image-wishlist.jpg" alt="Stacked bags of cat food" />

          <Stack gap={3} className="top-padding">
            <Container fluid="lg" className="center">
              <h1>Our donation wish list</h1>
              <p>Cozy Cat Cottage Adoption Center operates solely on donations, adoptions, fundraisers and a dedicated team of volunteers. Additionally, items purchased from our <a href="https://www.amazon.com/gp/registry/wishlist/2CUSJYUAAK03C" target="_blank" rel="noreferrer">Amazon wish list</a> and our <a href="https://www.chewy.com/g/cozy-cat-cottage-adoption-center_b65806677#wish-list&wishlistsortby=DEFAULT/" target="_blank">Chewy Wish List</a> will be shipped directly to us. Thank you for your generosity.</p>
            </Container>

            <Container fluid="lg">
              <Row xs={1} sm={2} md={3}>
                <Col sm={6} md={4}>
                  <h2>Cleaning Supplies</h2>
                  <ul>
                    <li>Paper towels</li>
                    <li>33 gallon or larger trash bags</li>
                    <li>HE (high-efficiency) laundry soap packets</li>
                    <li>Clorox bleach, <strong>unscented only</strong> and must say <strong>99% disinfectant</strong></li>
                    <li>Mr. Clean (yellow) antibacterial cleaner</li>
                  </ul>
                </Col>
                <Col sm={6} md={4}>
                  <h2>Food &amp; litter</h2>
                  <ul>
                    <li>Dry: Purina Pro Plan, Purina Complete (blue bag), Purina Kitten Chow (yellow bag) and Purina Kitten Chow Naturals</li>
                    <li>Gerber strained chicken baby food (for sick kittens)</li>
                    <li>KMR liquid nursing formula</li>
                    <li>Litter: Tidy Cat or Fresh Step (scooping) and any brand of <strong>non-clumping</strong> clay litter</li>
                  </ul>
                </Col>
                <Col sm={6} md={4}>
                  <h2>Misc</h2>
                  <ul>
                    <li>Aluminum cans for recycling</li>
                    <li>Gift Cards: Pet Supplies Plus, Target, Walmart, Meijers, PetSmart, Petco, Krogers, Giant Eagle</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Stack>
          <Container fluid="true" className="dark-notice center">
            <p><strong>Your financial support saves lives.</strong> <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=LRUGP6HJSNUKG" target="_blank" rel="noreferrer">Donate through PayPal</Link></p>
          </Container>
        </Container>
      </main>
    </>
  )
}