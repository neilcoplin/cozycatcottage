import Head from 'next/head'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function TrapNeuterReturn(props:any) {
  return (
    <>
      <Head>
        <title>{"Trap-Neuter-Return (TNR) | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Stack gap={3} id="trap-neuter-return" className="top-padding">
          <Container fluid="lg" className="center">
            <h1>Trap-Neuter-Return (TNR)</h1>
            <p>TNR has proven to be the most effective method in reducing the cat overpopulation. It is humane, ethical and more effective than relocation because it does not leave a void for a new colony of cats to fill. Cozy Cat Cottage can offer trap rental and advice for getting started with TNR.</p>
          </Container>

          <Container fluid="lg">
            <Row xs={1} sm={2}>
              <Col sm={12} md={8}>
                <h2>What is TNR?</h2>
                <p>Trap-Neuter-Return, or &ldquo;TNR,&rdquo; is the most humane and effective method known for managing feral and stray cats and reducing their numbers. The cats, who typically live together in a group called a colony, are trapped and brought to a veterinary clinic. They&apos;re then spayed or neutered, vaccinated for rabies where appropriate and eartipped. After they&apos;ve recovered from their surgeries, most cats are returned back to their original territory where they provide excellent rodent control while a caretaker provides regular food and shelter. Young kittens and friendly adults are placed for adoption.</p>

                <h2>Why it works</h2>
                <p>Because the cats can no longer reproduce, the colony has the potential to decline in size over time. Like all methods, TNR is most effective when performed well. On a colony level, this means achieving and maintaining a sterilization rate as close to 100% as possible and being diligent about the cats&apos; long-term care. On a community level, TNR best reduces cat populations and nuisance complaints when resources, including trappers, spay/neuter surgeries and outreach, are targeted at sections of the community with high cat populations.</p>

                <h2>Eartipping and ear notches</h2>
                <p>Eartipping is the universal sign of an altered feral cat. 1/4 inch is removed from the tip of the left ear in a straight line cut. Sometimes the cat receives an ear notch which is where a triangular notch is clipped from the ear. Eartips are readily visible from a distance, making it easy for caretakers, trappers and animal control personnel to immediately identify a cat as spayed or neutered. This saves the cat the stress of being unnecessarily trapped again. The procedure is performed under sterile conditions while the cat is anesthetized, is relatively painless, involves little to no bleeding and does not significantly alter the cat&apos;s appearance. No other means of identification has proven as safe or effective.</p>

                <p>Source: <a href="http://www.neighborhoodcats.org" target="_blank" rel="noreferrer">www.neighborhoodcats.org</a></p>
              </Col>
              <Col sm={12} md={4}>
                <figure>
                  <Image fluid src="/img/eartip-shallow.jpg" alt="Cat with a shallow eartip" />
                  <figcaption>Shallow eartip</figcaption>
                </figure>

                <figure>
                  <Image fluid src="/img/eartip-deep.jpg" alt="Cat with a deep eartip" />
                  <figcaption>Deep eartip</figcaption>
                </figure>

                <figure>
                  <Image fluid src="/img/ear-notch.jpg" alt="Cat with an ear notch" />
                  <figcaption>Ear notch</figcaption>
                </figure>
              </Col>
            </Row>
          </Container>
        </Stack>
      </main>
    </>
  )
}