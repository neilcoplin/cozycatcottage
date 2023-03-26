import Head from 'next/head'
import { Container, Stack } from "react-bootstrap";

export default function ImportanceOfMicrochips(props:any) {
  return (
    <>
      <Head>
        <title>{"The Importance of Microchips | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Stack gap={3} id="importance-of-microchips" className="top-padding">
          <Container fluid="lg" className="center">
            <h1>The importance of microchips</h1>
            <p>We microchip all our kittens and cats prior to adoption. Upon adoption, the adopter&apos;s contact information is added to the <a href="https://www.foundanimals.org/" target="_blank" rel="noreferrer">microchip registration</a>. We recommend adopters purchase an ID Tag as an additional layer of identification for your cat.</p>
          </Container>

          <Container fluid="lg">
            <h2>Why microchips tags are critical</h2>
            <p>Every year 1 in 3 pets become lost and 90% of them never return home without an ID.<sup>1</sup> Animals who are microchipped or wearing a tag are usually found quickly. The other two have owners willing to spend hours, days, or weeks advertising and personally visiting local shelters in search of their lost felines. Many owners search long and hard, never to find their pets at all. Cozy Cat Cottage uses <a href="https://www.foundanimals.org/" target="_blank" rel="noreferrer">Michelson Found Pets</a> to register each feline&apos;s microchip.</p>

            <h2>Tag your cat even if you never let it outside</h2>
            <p>Don&apos;t take the chance of losing your cat forever. Put an identification tag on your cat with your name, address, and phone number on the tag. Be sure to keep the information current on both the tag and the microchip. Cats can easily slip through an open door and quickly become lost in the unfamiliar surroundings of the neighborhood.</p>

            <p>Cozy Cat Cottage insists that all of our adopted cats must live indoors. Automobiles, poisoning or trapping by unhappy neighbors, sadistic treatment, dogs, coyotes, other cats, viruses and getting lost or stolen, all make the great outdoors anything but great for your domestic cat. If you do let your cat outside, collars are made especially for cats with a short piece of elastic sewn in them. These collars can be buckled snugly around the neck but will stretch and let the cat escape if he/she should get hung up on a tree limb or fence. Far more cats have died because they got lost and their owners could not find them than ever have been hurt wearing a collar.</p>

            <h2>Tips for putting a collar on your cat</h2>
            <p>The first time you put a collar on your cat, give him/her a catnip toy. The toy will distract the cat&apos;s attention from the new feeling of wearing a collar. By the time your cat finishes playing with the toy, he/she may have forgotten about the collar entirely.</p>

            <p>Source: <a href="http://www.foundanimals.org" target="_blank" rel="noreferrer">www.foundanimals.org</a><br />
            <sup>1</sup>Department of Animal Services</p>
          </Container>
        </Stack>
      </main>
    </>
  )
}