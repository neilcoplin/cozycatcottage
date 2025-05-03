import Head from 'next/head'
import Link from 'next/link'
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function Donate(props:any) {
  return (
    <>
      <Head>
        <title>{"Donate | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container fluid="true" id="donate">
          <Stack gap={3}>
            <Image fluid src="/img/hero-image-other-ways-to-give.jpg" alt="Tabby cat sleeping on a blue shelf" />

            <Container fluid="md" className="center">
              <h1>Donate to Cozy Cat Cottage</h1>
              <h2>Let&apos;s save lives together</h2>
              <p>Cozy Cat Cottage continues to work hard to be a leading force and advocate for the Central Ohio homeless cat population. Here is your chance to help!</p>
            </Container>

            <Container  fluid="md">
              <Row xs={1} md={2}>
                <Col>
                  <h2>Financial Support</h2>
                  <p>Our costs preparing 200 cats and kittens for adoption in 2023.</p>
                  <ul>
                    <li>$300 - Rabies vaccinations</li>
                    <li>$700 - Microchips</li>
                    <li>$1,200 - Distemper &amp; 3 age-appropriate vaccinations</li>
                    <li>$1,300 - Leukemia vaccinations (Set of 2)</li>
                    <li>$3,200 - FeLV/FIV/Heartworm tests</li>
                    <li>$7,000 - Neuters for male cats or kittens ($35 per cat)</li>
                    <li>$13,000 - Spays for female cats or kittens ($65 per cat)</li>
                  </ul>

                  <p><Link href="/tribute">Make your donation a memorial gift</Link></p>
                </Col>
                <Col>
                  <Image fluid src="/img/donate-audry.jpg" alt="Close up of a tabby cat face." />
                </Col>
              </Row>
            </Container>

            <Container fluid="md" className="center top-padding">
              <Button href="https://www.paypal.com/us/fundraiser/charity/1803839" size="lg">Donate through Paypal</Button>
            </Container>

            <Container fluid="md">
              <h3>Kroger Community Rewards</h3>
              <p>Cozy Cat Cottage is proud to be a partner in the <a href="https://www.kroger.com/account/enrollCommunityRewardsNow/" target="_blank" rel="noreferrer">Kroger Community Rewards program</a>. We receive a donation each time you swipe your <strong>registered</strong> Kroger Plus Card at checkout. <Link href="/kroger-community-rewards">Learn how to sign up.</Link></p>
            </Container>

            <Container fluid="md">
              <h3>Donate supplies</h3>
              <p>Cozy Cat Cottage Adoption Center accepts donations of items from our <Link href="/our-wish-list">Wish List</Link> to help us provide the everyday necessities for our felines. Every time we receive donations like food, litter and cleaning supplies from our Wish List, it helps the monetary donations we receive go further in providing care and medical treatment for our kitties.</p>
            </Container>

            <Container fluid="md">
              <h3>Planned giving</h3>
              <p>Leave a legacy that changes the lives of abandoned, injured, and/or abused felines in the community by including Cozy Cat Cottage Adoption Center in your planned giving.</p>

              <p>A Will typically does not dispose of assets such as life insurance, retirement plans, and financial accounts which usually pass by &ldquo;beneficiary designation.&rdquo; A beneficiary designation is a contract between you and your insurance company, retirement plan or financial administrator to transfer the asset at your death to the person(s) or institution(s) you have designated.</p>

              <p>To designate Cozy Cat Cottage Adoption Center as a recipient of an asset with a designated beneficiary, you should contact your insurance company, plan administrator or financial advisor and request a &ldquo;change of beneficiary&rdquo; form. Should your circumstances change at any time; these designations can easily be changed.</p>

              <p>Legal name: Cozy Cat Cottage Adoption Center<br />
              Office address: 10344 Sawmill Road, Powell, Ohio 43065<br />
              Cozy Cat Cottage Adoption Center IRS tax ID: 31-1622554<br />
              We are a 501(c)(3) tax-exempt charitable organization.</p>

              <p>For questions on including Cozy Cat Cottage Adoption Center in your planned giving, please contact us at <a href="mailto:cozycatcottageadoption@gmail.com">cozycatcottageadoption@gmail.com</a>.</p>
            </Container>

            <Container fluid="md">
              <h2>Other ways to help</h2>
              <p>Below are some of the great ideas that we&apos;ve seen from our supporter community.</p>

              <h3>Sewing for catnip bags and kickers</h3>
              <p>Catnip bags and rectangle shaped &ldquo;kickers&rdquo; are some of our kitties favorite toys! Cozy Cat Cottage provides the catnip and our volunteers do the sewing. <a href="mailto:debbie.joan.wood@gmail.com">Email Debbie Wood to get started!</a></p>

              <h3>Dine to Donate Nights (Restaurant participation)</h3>
              <p>Many restaurants participate in Give Back nights for local charities. These are great ways to get your network of friends and family in the giving spirit over a tasty meal. Check our Facebook page for the latest announcements about Dine to Donate nights.</p>

              <h3>Host a school or personal fundraiser</h3>
              <p>Start with an idea that is meaningful and exciting to you such as hosting a bake sale, lemonade stand, or garage sale. Is your school looking for a way to give back? Your school can help kitties in the community through jeans days, penny wars, hat days, etc.</p>

              <h3>Wedding favors and donations</h3>
              <p>In place of party favors, couples can make a donation to Cozy Cat Cottage and/or include a donation jar on the gift table.</p>

              <h3>Donate your birthday on Facebook</h3>
              <p>Getting ready to celebrate a birthday? In place of gifts, ask your friends and family to make a monetary donation to Cozy Cat Cottage or bring an item from our <a href="https://www.amazon.com/gp/registry/wishlist/2CUSJYUAAK03C" target="_blank" rel="noreferrer">Amazon Wish List</a> to your party!</p>
            </Container>
          </Stack>
          <Container fluid="true" className="dark-notice center">
            <Container fluid="md">
              <p><Link href="/volunteer">Looking for our volunteer page?</Link></p>
            </Container>
          </Container>
        </Container>
      </main>
    </>
  )
}