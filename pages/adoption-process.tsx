import Head from 'next/head'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function AdoptionProcess(props:any) {
  return (
    <>
      <Head>
        <title>{"Adoption Process | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
      <Container fluid="true" id="adoption-process">
        <Stack gap={3}>
          <Image fluid src="/img/hero-adoption-process.jpg" alt="Newspaper images of Cindi Clum with cats." />

          <Container fluid="md" className="center">
            <h1><strong>Adoption process</strong></h1>
            <p>When you find the feline you want to welcome into your home, it is a special moment. You are saying “yes” to a journey ahead full of unconditional love, play, training (for both cat and human alike), happy tears and sometimes sad ones too. At Cozy Cat Cottage, we believe wherever the journey takes us, our pets make us better people. Our adoption screening process is designed to ensure that each animal is placed in a responsible, loving home and with an adopter who is prepared to make a lifelong commitment.</p>
          </Container>

          <Container fluid="md">
            <Row xs={1} md={2}>
              <Col md={7} lg={8}>
                <h2>It&apos;s a simple process:</h2>
                <h3>Fill out an application in person, at the shelter (required). Adopters must be 21 or older.</h3>
                <p>This document provides us with general information about you and other pets you have in your home. The application review process may be completed same-day or within up to 72 hours. We require applications to be filled out in person, at the shelter.</p>

                <h3>Complete an interview with one of our adoption counselors.</h3>
                <p>This can take place same-day. The adoption counselor will review the information on your application with you and discuss any questions he/she or you may have. It is imperative that all parent/guardian/roommates in the home are present so we can ensure the pet is a good fit for everyone.</p>

                <h3>Receive the sign-off from the Executive Director.</h3>
                <p>This step won&apos;t apply to all cases; however, there are instances where a feline may require approval from our Executive Director before being officially adopted.</p>

                <h3>Make a Deposit</h3>
                <p>If approval is granted by either the Managing Director on staff or our Executive Director, you have the option to complete the adoption then or place a deposit on the feline for a short period of time. The deposit is half of the adoption fee and allows new owners the opportunity to gather supplies for their new family member.</p>

                <h3>Pay Adoption Fees</h3>
                <p>The adoption fee covers the cost of spaying/neutering, two physicals by a vet, FELV/FIV tests, age-appropriate vaccinations (including FRCP, FELV, and Rabies), and treatment for fleas and worms (if needed). Additionally, a $10 microchip registration fee applies to all adoptions.</p>

                <ul>
                  <li>Kittens &amp; Teenagers up to One Year: $120.00</li>
                  <li>Cats Over One Year: $90.00</li>
                </ul>

                <p><strong>We accept payment for adoption fees in cash or check.</strong></p>

                <h3>Welcome home!</h3>
                <p>Congratulations! Please be sure to bring a pet carrier with you to our adoption center. We will meet with you briefly to complete the adoption paperwork. This includes an adoption waiver, adoption contract, a resource packet and the remainder of or payment in full of the adoption fee.</p>

                <p><strong>As part of our adoption contract, we require adopted felines to be seen by a veterinarian of the owner&apos;s choosing within 5 business days of the adoption at the owner&apos;s expense.</strong> This ensures the establishment of the feline with a local veterinarian. We ask for a copy of the check-up paperwork to be faxed to us at 614.336.8515 within 10 days.</p>

                <p><i>Please understand that while Cozy Cat Cottage reserves the right to refuse an adoption at any time, adoption applications are considered with the best interests of the animal in mind and should not be construed as any type of reflection upon the applicant.</i></p>
              </Col>
              <Col md={5} lg={4}>
                <Stack gap={3}>
                  <Image fluid src="/img/cat-carrier.jpg" alt="A cat carrier" />

                  <Container fluid="sm" className="primary-notice">
                    <h2>What to bring on adoption day</h2>
                      <ul>
                        <li>A carrier appropriate for transporting felines. We recommend putting a blanket, towel, or small pet bed inside the carrier so that your cat will feel safe and secure during transportation. <strong>Adopted felines will not be allowed to leave without first being put in a carrier.</strong></li>
                        <li>Your driver&apos;s license or government issued ID.</li>
                        <li>Cash or check for payment</li>
                      </ul>
                  </Container>

                  <Image fluid src="/img/adopted.jpg" alt="Two young women each holding a cat and an adopted sign" />
                  <Image fluid src="/img/adopted2.jpg" alt="A young man and young woman holding a cat and adopted sign" />
                  <Image fluid src="/img/adopted3.jpg" alt="An older copule holding a cat and an adopted sign" />
                </Stack>
              </Col>
            </Row>
          </Container>
        </Stack>
        <Container fluid="true" className="dark-notice center">
          <Container fluid="md">
            <h2><strong>We support our adopters long after their new kitty comes home.</strong></h2>
            <p>&ldquo;The staff and volunteers at Cozy Cat Cottage are exceptional. They made sure that I felt comfortable as a first-time cat owner taking home 2 kittens. My adoption counselor gave me her number and I was endlessly texting her those first weeks - she was an amazing resource. I am so glad that we found Cozy Cat Cottage. I can&apos;t imagine having adopted our boys anywhere else.&rdquo;</p>
            <p>- Andrea T.</p>
          </Container>
        </Container>
      </Container>
      </main>
    </>
  )
}