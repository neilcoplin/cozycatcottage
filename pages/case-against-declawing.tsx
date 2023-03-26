import Head from 'next/head'
import { Container, Stack } from "react-bootstrap";

export default function CaseAgainstDeclawing(props:any) {
  return (
    <>
      <Head>
        <title>{"The Case Against Declawing | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Stack gap={3} id="case-against-declawing" className="top-padding">
          <Container fluid="lg" className="center">
            <h1>The case against declawing</h1>
            <p>The American Society for the Prevention of Cruelty to Animals (ASPCA) and Cozy Cat Cottage Adoption Center encourage owners to seek alternatives to declawing their cats. It is a painful procedure that can have serious and lifelong physical and behavioral consequences for your pet. If you are thinking about having your pet declawed, please take a moment to consider the following information.</p>
          </Container>

          <Container fluid="lg">
            <h2>Claws are important to a cat</h2>
            <p>A cat&apos;s remarkable grace, agility and flawless sense of balance are due to a great extent to its retractable claws, which allow a cat to establish footing for walking, running, springing, climbing, or stretching. A cat&apos;s claws are also its best defense mechanism.</p>

            <h2>The need to scratch</h2>
            <p>When a cat scratches, it pulls off the old outer nail sheath and exposes sharp, smooth claws. Scratching is also a way of fulfilling the cat&apos;s strong, instinctive need to mark its territory. Not only does a cat mark an object visibly by scratching it, but the scratching deposits secretion from glands in the feet that can be smelled by other cats. Scratching may also serve psychological and physiological needs by providing comfort and expression by kneading and allowing valuable stretching and foot-muscle exercise.</p>

            <h2>The declawing operation</h2>
            <p>The standard declawing procedure calls for the removal of the claw and the last bone of the toe. The operation is usually performed on the front feet. It is actually an amputation, comparable to the removal of the fingers of the human hand at the last knuckle. The cat experiences considerable pain in the recovery and healing process and often will refuse to use the litter box. It could be a month later the cat decides the litter box is associated with pain. Laser surgery is the same procedure. There are also numerous medical, behavioral and safety risks to declawing.</p>

            <p>A cat or kitten should NEVER be declawed on all four paws.</p>

            <h2>Alternatives to declawing</h2>
            <p><strong>Introduce a scratching post:</strong> Buy or make a scratching post that is tall enough so the cat can stretch completely when scratching, and stable enough so it won&apos;t wobble when being used. It should be covered with a heavy, rough fiber like sisal or the back side of carpeting. Place the post in an accessible area. If you are trying to discourage the cat from scratching a particular piece of furniture, try placing the post in front of it, gradually moving the post aside as the cat begins to use it regularly.</p>

            <p><strong>Train with a dual approach:</strong> Discourage the cat from clawing the wrong things; encourage the cat to claw the right things. If the cat begins to scratch the furniture, call him by name, firmly tell him/her &ldquo;no,&rdquo; and entice him/her over to the scratching post with a ribbon or fresh catnip. Each time the cat goes on his/her own to the scratch post, praise, pet, and spend a minute playing at the post. Make it a fun place to be. At the same time, the favorite furniture scratching area can be made less attractive by contact paper sticky side out (held on with upholstery screws). Put inexpensive cardboard scratch pads or posts near all of the cat&apos;s favorite furniture.</p>

            <p><strong>Keep the cat&apos;s nails trimmed:</strong> Cutting the nails regularly may help a cat from scratching the furniture, or at least reduce the damage done by his/her scratching. Get your kitten used to having their nails clipped while they are young. With an older cat, it may help to begin by handling the cat&apos;s feet under pleasurable circumstances. Then, begin to introduce the clipping procedure by approaching the cat while he/she is relaxed or even napping; clip only a few nails per session. Praise your cat while you clip the nail and reward with a treat.</p>

            <p>If you&apos;re in doubt about what the proper nail length looks like, have your veterinarian trim the nails once. The only equipment necessary is a good pair of feline nail scissors. Before cutting, look for the pink &ldquo;quick&rdquo; that runs down the center of the nail. The scissors should cut about an eighth of an inch forward of the quick. Be extremely careful not to cut into the quick. If this happens, the cat will experience pain and bleeding is likely. The bleeding may stop without assistance or you may need to hold a soft cloth on the nail or apply a little styptic powder. If you trim a small amount of nail on a regular basis, the quick will actually tend to recede.</p>

            <p>If you have questions about declawing or about training your cat, please don&apos;t hesitate to contact Cozy Cat Cottage and we can offer guidance and support.</p>
          </Container>
        </Stack>
      </main>
    </>
  )
}