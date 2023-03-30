import Head from 'next/head'
import Link from 'next/link'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function HappyTails(props:any) {
  return (
    <>
      <Head>
        <title>{"Happy Tails | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Stack gap={3} id="happy-tails" className="top-padding">
          <Container fluid="md" className="center">
            <h1>Happy tails</h1>
            <h2>Happy new beginnings for special needs cats</h2>
            <p>Cozy Cat Cottage believes all cats deserve a chance, especially the ones in the direst of situations, our special needs cats. We hope you will be inspired to open your heart to a special needs cat. Below are some of our special needs cat success stories.</p>
          </Container>

          <Container fluid="xl">
            <Stack gap={3}>
              <Row xs={1} md={2}>
                <Col md={7} xl={8}>
                  <h2>Francis &amp; Bosco: FIV+ tomboys turned besties</h2>
                  <p>Conan (now Francis) was part of a colony of cats who were being fed by a Cozy Cat Cottage volunteer and he was one of the last cats to be trapped. He was treated for body wounds, ear mites, worms, and an upper respiratory infection. He also tested positive for Feline Immunodeficiency Virus (FIV). He was so sick that staff feared he would not survive, but with medical intervention and the care and attention from staff and volunteers he was nursed back to health. Conan was adopted by a couple who were looking for a special needs cat and who fell in love with him when they saw his story featured on the Cozy Cat Cottage Facebook page. Francis is the orange cat in the photo.</p>

                  <p>Hulk Hogan (now Bosco) was also previously part of a feral colony who was trapped when he was on the brink of death and nursed back to health by Cozy Cat Cottage. In addition to testing positive for FIV, he suffered a bad wound on his tail that required him to have part of his tail amputated. His fur was so dirty and ragged it was difficult to tell if he was actually a white cat (he was). The same couple who adopted Francis was looking to adopt a second cat and after meeting Hulk, knew he would be the perfect addition to their family. Bosco and Francis took several months to warm up to each other, but with the help of calming collars and lots of love from their owners, they are now the best of friends. Bosco is the white and black cat in the photo.</p>

                  <p>Both cats were estimated to be between the adult and senior age range at the time of their respective rescues, meaning that it is likely they had been living with FIV for many years.</p>

                  <Link href="/fiv-and-felv">Learn more about Feline Immunodeficiency Virus (FIV)</Link>

                </Col>
                <Col md={5} xl={4}>
                  <Image fluid src="/img/francis-bosco.jpg" alt="Francis and Bosco" />
                </Col>
              </Row>

              <Row xs={1} md={2}>
                <Col md={7} xl={8}>
                  <h2>Toby, an FIV+ gentle soul</h2>
                  <p>Toby was living a rough life on the streets when he encountered a kind woman who started feeding him. The two became best friends and Toby would jump through the window of her apartment every night for dinner and cuddles. When his surrogate mom was told she was getting evicted from her apartment, she wanted to make sure Toby wasn&apos;t left behind without food. Cozy Cat Cottage came to the rescue and took him in. When Toby arrived at Cozy Cat, he was neutered and unfortunately tested positive for FIV.  Cozy Cat Cottage works hard on educating the public on FIV and research has shown that FIV kitties can live a long and happy life. Toby was adopted into a home with other FIV and non-FIV cats. He is a gentle soul and loves to cuddle. He also loves canned food and hunting his toy mice.</p>

                  <Link href="/fiv-and-felv">Learn more about Feline Immunodeficiency Virus (FIV)</Link>
                </Col>
                <Col md={5} xl={4}>
                  <Image fluid src="/img/toby.jpg" alt="Toby" />
                </Col>
              </Row>

              <Row xs={1} md={2}>
                <Col md={7} xl={8}>
                  <h2>Giselle, an FELV+ beauty beating the odds</h2>
                  <p>Giselle, her three siblings, and mama were rescued from a neighborhood in Hilliard and Cozy Cat Cottage took them in. Giselle&apos;s mama and siblings went into a foster home and when they were big enough they went back to Cozy Cat Cottage to get spayed and neutered. They were almost ready to go up for adoption when their FIV/FELV test came back positive. Sadly, Giselle, her brother, and her mom all tested positive for Feline Leukemia Virus (FeLV). Giselle and her brother were adopted into the same home and their mom was adopted by another family. While Giselle&apos;s brother passed away at eight years old, Giselle continues to thrive in her home and will turn nine this year. In the past FELV was considered a death sentence, but the truth is some FeLV kittens can live for many years. Giselle is living proof that every cat deserves a chance.</p>

                  <Link href="/fiv-and-felv">Learn more about Feline Immunodeficiency Virus (FIV)</Link>
                </Col>
                <Col md={5} xl={4}>
                  <Image fluid src="/img/giselle.jpg" alt="Giselle" />
                </Col>
              </Row>

              <Row xs={1} md={2}>
                <Col md={7} xl={8}>
                  <h2>Tiger Lily, the Millennium Miracle Cat</h2>
                  <p>On December 11, 1999, Lily, a Tortishell kitten suffered paralysis and a coma after experiencing a severe allergic reaction to medication. She was kept alive by diligent and courageous efforts by Cozy Cat Cottage owners Cindi and Casey Clum, who administered around the clock medication, tube feedings and basic care with the help of local veterinarians. As volunteers left the shelter on December 23, the situation appeared very hopeless, however, Cindi and Casey were determined to continue to care for Lily and hope and pray for a miracle. To everyone&apos;s surprise, on New Year&apos;s Eve, a miracle was delivered as little Lily opened her eyes and came out of the coma just in time to celebrate the New Millenium. Lilly earned a new name, Tiger Lily, for fighting back from paralysis and her 3-week coma. She appeared to have suffered no permanent damage and was adopted several weeks later.</p>

                  <Image fluid src="/img/miracle-cat-happy-tails.jpg" alt="Cindi Clum with Tiger Lily" />
                </Col>
                <Col md={5} xl={4}>
                  <Image fluid src="/img/tiger-lily.jpg" alt="Tiger Lily" />
                </Col>
              </Row>
            </Stack>
          </Container>
        </Stack>
      </main>
    </>
  )
}