import Head from 'next/head'
import { Col, Container, Row, Stack } from "react-bootstrap";

export default function IntroducingPets(props:any) {
  return (
    <>
      <Head>
        <title>{"Introducing Pets | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container fluid="lg" id="introducing-pets" className="top-padding">
          <Stack gap={3}>
            <Container fluid="lg" className="center">
              <h1>Introducing pets</h1>
              <p>Bringing home a new pet can be a source of stress to resident pets. Use the tips below to take timely</p>
            </Container>

            <Row xs={1} md={2}>
              <Col>
                <h2 className="top-padding">Introducing cats to dogs</h2>
                <ol className="paragraph">
                  <li><strong>Confine your new cat to one medium-sized room with its litter box, food, water, a blanket, and a bed.</strong><br />
                  Feed the resident dog and the newcomer near either side of the door to this room. After the animals have become comfortable eating on either side of the door and have been exposed to each other&apos;s scent, you can attempt a face to face introduction in a controlled environment.</li>
                  <li><strong>Put a leash on your dog and practice the commands listed above using food tidbits.</strong><br />
                  Have another family member enter the room and quietly sit down with the cat on his or her lap. The cat should also be offered some treats. At first, the cat and dog should be on opposite sides of the room. Repeat this step on several occasions until both the cat and dog are tolerating each other without fear, aggression or other uncontrolled behavior.</li>
                  <li><strong>Next, move the animals a little closer together with the dog still on a leash and the cat gently held in a lap.</strong><br />
                  If the cat does not like to be held, you can use a wire crate or a carrier instead. If the dog gets up from his &ldquo;stay&rdquo; position, he/she should be firmly repositioned. Praise and reward your dog for obeying the &ldquo;stay&rdquo; command. If the cat becomes frightened, increase the distance between the animals and progress more slowly. Eventually, the animals should be brought close enough to allow them to investigate each other.</li>
                </ol>
                <p>While your dog must learn that chasing or that being rough with the cat is unacceptable, your dog must also be encouraged on how to behave appropriately and be rewarded for doing so (ex: sitting on command, coming when called, or lying down for a treat). If your dog is always punished whenever the cat is around and never has &ldquo;good things&rdquo; happen in the cat&apos;s presence, your dog may redirect aggression towards the cat.</p>
                <p>For several days during the introduction process, it is a good idea to keep your dog on a leash and secured when the cat is free in the house. Be sure your cat has an escape route and a place to hide. Keep your dog and cat separated when you aren&apos;t home until you are certain the cat will be safe.</p>

                <h3>Precautions</h3>
                <p>Dogs like to eat cat food because of the taste. You should store the cat food out of the dog&apos;s reach, such as in a closet or on a high shelf. Cat food is not a healthy diet for dogs because it is too high in protein (which cats need).</p>

                <p>Dogs eating cat feces is a relatively common behavior as well. Although there are no health hazards, it is usually distasteful to the owners. Attempts to “booby trap” the litter box to keep the dog out will keep the cat away as well. Punishment after the fact will NOT change the dog&apos;s behavior. The best solution is to place the litter box where the dog cannot access it, such as behind a baby gate or in a closet with the door anchored open from both sides. If you encounter problems, please contact an animal behavior professional before the problem worsens.</p>
              </Col>
              <Col>
                <h2 className="top-padding">Introducing cats</h2>
                <ol className="paragraph">
                  <li><strong>Confine your new cat to one medium-sized room with its litter box, food, water, a blanket, and a bed.</strong><br />
                  Feed the present cat(s) and the newcomer near either side of the door to this room. Do not put the food so close to the door the cats are too upset by each other to eat. This approach will help start the introduction process out on the right paw by associating something enjoyable (eating) with each other&apos;s presence. Gradually move the dishes closer to the door until the cats can eat calmly. Next, use two doorstops to prop open the door just enough to allow the cats to see each other, and repeat this a couple of times.</li>
                  <li><strong>Switch sleeping blankets between the new cat and the resident cat(s) so they have the chance to become accustomed to each other&apos;s scent.</strong><br />
                  Additionally, put the scented blankets underneath food dishes.</li>
                  <li><strong>Once the new cat is using the litter box and eating regularly while confined, let it have free time in the house while confining the other cat(s).</strong><br />
                  This switch provides another way for the cats to have experience with each other&apos;s scent without a face to face meeting and also allows the newcomer cat to become familiar with its new surroundings without being frightened by the other animals.</li>
                  <li><strong>Once the cats become familiar with each other&apos;s scents, it is time to fully introduce them.</strong><br />
                  Monitor their face to face interaction to ensure the transition is smooth. If any alarming behavior occurs, separate the cats and repeat the steps above.</li>
                </ol>

                <h3>Precautions</h3>
                <p>You&apos;ll need to add another litter box and probably clean all of the boxes more frequently. Make sure none of the cats are being ambushed by others while using the litter box. Try to keep the resident cat(s) schedule as close as possible to what it was before the newcomer&apos;s appearance.</p>

                <p>Cats can make lots of noise, pull each other&apos;s fur and roll around quite dramatically without being injured. If small spats do occur between the cats, you should not attempt to intervene directly. Instead, make a loud noise, toss a pillow, or throw some water on the cats in order to separate them. You can expect mild forms of these behaviors, but don&apos;t give them the opportunity to intensify.</p>

                <p>Avoid any interactions between the cats which result in either fearful or aggressive behavior. If these responses are allowed to become a habit, they can be difficult to change. It is better to introduce the animals to each other so gradually neither cat becomes afraid or aggressive. If either cat becomes fearful or aggressive, separate them and continue the introduction process in a series of gradual steps as outlined above.</p>
              </Col>
            </Row>
          </Stack>
        </Container>
      </main>
    </>
  )
}