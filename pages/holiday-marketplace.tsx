import Head from 'next/head'
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

export default function HolidayMarketplace(props:any) {
  return (
    <>
      <Head>
        <title>{"Holiday Marketplace Sale | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Stack gap={3} id="holiday-marketplace">
          <Image fluid src="/img/hero-holiday-marketplace.jpg" alt="Collage of cat and Christmas themed items" />

          <Container fluid="md" className="center">
            <h1><strong>Many thanks to the generous sponsors of our 2021 Online Holiday Marketplace Sale</strong></h1>
            <p>Please show them your appreciation by your patronage.</p>
          </Container>

          <Container fluid="md">
            <Row xs={1} lg={3}>
              <Col xs={10} lg={4}>
                <p>Sally and Danny Agresta</p>
                <p><a href="https://www.aladdins.com/" target="_blank" rel="noreferrer">Aladdin&apos;s Eatery - Powell</a></p>
                <p><a href="https://www.animalcareunlimited.com/" target="_blank" rel="noreferrer">Animal Care Unlimited</a></p>
                <p><a href="https://anneskitchenpowell.com/" target="_blank" rel="noreferrer">Anne&apos;s Kitchen</a></p>
                <p><a href="https://www.aqua-tots.com/powell/" target="_blank" rel="noreferrer">Aqua-Tots Swim School - Powell</a></p>
                <p><a href="https://ataincolumbus.com/" target="_blank" rel="noreferrer">ATA Black Belt - Powell</a></p>
                <p><a href="https://bsmfunding.mymortgage-online.com/charliesindeldecker.html/" target="_blank" rel="noreferrer">Bayshore Mortgage Funding, Charlie Sindeldecker</a></p>
                <p><a href="https://www.facebook.com/Matthew-Benjamin-Woodcraft-1370090529698812/" target="_blank" rel="noreferrer">Matthew Benjamin Woodcraft</a></p>
                <p><a href="https://www.befitcafe.com/" target="_blank" rel="noreferrer">Be Fit Cafe</a></p>
                <p>Steve Bigley</p>
                <p><a href="https://hirefrederick.com/the-blowdry-cafe-powell/" target="_blank" rel="noreferrer">Blow Dry Caf&eacute;, Powell</a></p>
                <p><a href="https://www.bogeyinn.com/" target="_blank" rel="noreferrer">Bogey Inn</a></p>
                <p>Rebecca Brickner, Scioto Music Lessons</p>
                <p>Cheryl Brown</p>
                <p>Scott Brown</p>
                <p>Rebecca Bryant</p>
                <p>Marsha Campbell</p>
                <p><a href="https://catsonlyvc.com/" target="_blank" rel="noreferrer">Cats Only Veterinary Clinic</a></p>
                <p><a href="https://www.catdoctorcolumbus.com/" target="_blank" rel="noreferrer">The Cat Doctor</a></p>
                <p>Diane Chakalis</p>
                <p>Chasing Perfection Bakery</p>
                <p>Michele Childs (for Norman Childs)</p>
                <p><a href="https://www.citybbq.com/" target="_blank" rel="noreferrer">City BBQ – Powell</a></p>
                <p>Cindi Clum</p>
                <p>Michelle Corlis</p>
                <p><a href="https://www.costco.com/warehouse-locations/columbus-oh-%20632.html/Delaware/" target="_blank" rel="noreferrer">Costco Polaris</a></p>
                <p><a href="https://www.culvers.com/restaurants/powell/" target="_blank" rel="noreferrer">Culver&apos;s - Powell</a></p>
                <p><a href="https://www.cyclebar.com/location/powell/" target="_blank" rel="noreferrer">CycleBar of Powell</a></p>
                <p><a href="https://www.delawaregolfclub.com/" target="_blank" rel="noreferrer">Delaware Golf Club</a></p>
                <p><a href="https://www.dellsicecream.com/location/powell/" target="_blank" rel="noreferrer">Dell&apos;s Homemade Ice Cream</a></p>
                <p>Emily Denholm</p>
                <p><a href="https://www.lauradershawskincare.com/" target="_blank" rel="noreferrer">Laura Dershaw Skincare</a></p>
                <p><a href="https://www.dublincleaners.com/" target="_blank" rel="noreferrer">Dublin Cleaners - Dublin</a></p>
                <p>Shar Duffy</p>
                <p>Embellish Your Attitude</p>
                <p>Cindy Ferrara</p>
              </Col>
              <Col xs={10} lg={4}>
                <p>Paul Fuhr, That Coaster Guy</p>
                <p><a href="https://www.fullenfinancial.com/" target="_blank" rel="noreferrer">Fullen Financial Group</a></p>
                <p><a href="http://www.gallostaproom.com/powell-tap-room" target="_blank" rel="noreferrer">Gallo&apos;s Taproom - Powell</a></p>
                <p><a href="http://www.gianteagle.com/stores/OH/Powell/Powell-Giant-Eagle/6527" target="_blank" rel="noreferrer">Giant Eagle - Powell</a></p>
                <p>Earl Goldhammer</p>
                <p><a href="http://www.graeters.com/stores/retail-stores/columbus/powell" target="_blank" rel="noreferrer">Graeter&apos;s - Powell</a></p>
                <p><a href="http://greekexpressfamily.com/" target="_blank" rel="noreferrer">Greek Express - Powell</a></p>
                <p>Barbara Greever</p>
                <p><a href="http://www.salonlofts.com/crystal_bramer" target="_blank" rel="noreferrer">Hair by Crystal Bramer - Salon Lofts in Dublin</a></p>
                <p><a href="http://www.healthypetsofohio.com/" target="_blank" rel="noreferrer">Healthy Pets of Wedgewood, Inc.</a></p>
                <p><a href="http://www.highlinecoffeeco.com/" target="_blank" rel="noreferrer">Highline Coffee Co.</a></p>
                <p><a href="http://www.jayhobgood.com/" target="_blank" rel="noreferrer">Jay Hobgood Hurricane Information &amp; Consultation</a></p>
                <p><a href="http://www.homedepot.com/services/l/oh/powell" target="_blank" rel="noreferrer">Home Depot</a></p>
                <p>Kate Hoyt</p>
                <p><a href="http://www.illmanneredbeer.com/" target="_blank" rel="noreferrer">Ill-Mannered Brewing Co.</a></p>
                <p>Itsy Bitsy Bird</p>
                <p><a href="http://www.jerseymikes.com/2022/powell-oh" target="_blank" rel="noreferrer">Jersey Mike&apos;s Powell </a></p>
                <p>JK NewLife Properties, LLC</p>
                <p>Karen Keenan</p>
                <p><a href="http://www.kimberlysdiamondcorner.com/" target="_blank" rel="noreferrer">Kimberly&apos;s Diamond Corner</a></p>
                <p>Ann Kline</p>
                <p><a href="http://www.koblegrill.com/" target="_blank" rel="noreferrer">Koble Greek Italian Grill - Powell Corner</a></p>
                <p><a href="http://www.lafontainearchitecture.com/" target="_blank" rel="noreferrer">LaFontaine Architecture &amp; Design, Inc</a></p>
                <p><a href="http://stores.hallmark.com/oh/powell/lairs-hallmark-shopcurbside-pick-up-available-powell-oh-003363.html" target="_blank" rel="noreferrer">Lair&apos;s Hallmark, Powell</a></p>
                <p>Leaping Tiger Jewelry</p>
                <p><a href="http://www.ccreations.com/linswok/" target="_blank" rel="noreferrer">Lin&apos;s Wok</a></p>
                <p><a href="http://www.nadachannel.com/" target="_blank" rel="noreferrer">Nada Maibach</a></p>
                <p><a href="http://www.marinerwealthadvisors.com/" target="_blank" rel="noreferrer">Mariner Wealth Advisors</a></p>
                <p>Marybeth McDonald</p>
                <p><a href="http://www.meijer.com/shopping/store-locator/143.html/" target="_blank" rel="noreferrer">Meijer&apos;s Lewis Center</a></p>
                <p>Jo Milliner</p>
                <p>Kristy Milliner</p>
                <p><a href="http://www.morganhse.com/" target="_blank" rel="noreferrer">Morgan House, Shawnee Hills</a></p>
                <p><a href="http://www.facebook.com/mr.bean.coffee.powell/" target="_blank" rel="noreferrer">Mr. Bean Coffee</a></p>
                <p><a href="http://www.mvgc.org/" target="_blank" rel="noreferrer">Muirfield Village Golf Club</a></p>
              </Col>
              <Col xs={10} lg={4}>
                <p><a href="http://www.muttsandco.com/" target="_blank" rel="noreferrer">Mutts and Co.</a></p>
                <p><a href="http://nocterrabrewing.com/" target="_blank" rel="noreferrer">Nocterra Brewing Co</a></p>
                <p><a href="http://www.ohiocryo.com/" target="_blank" rel="noreferrer">Ohio Cryo</a></p>
                <p><a href="https://vet.osu.edu/vmc/primarycare" target="_blank" rel="noreferrer">The Ohio State University Veterinary Medical Center - The Frank Stanton Veterinary Spectrum of Care (SOC) Clinic</a></p>
                <p><a href="http://www.pabloshavanacafe.com/" target="_blank" rel="noreferrer">Pablo&apos;s Havana Caf&eacute;</a></p>
                <p><a href="http://www.pargolfdiscount.com/" target="_blank" rel="noreferrer">Par Golf of Columbus</a></p>
                <p><a href="http://www.petcremationcolumbus.com/" target="_blank" rel="noreferrer">Pet Cremation Services</a></p>
                <p><a href="https://www.petsuppliesplus.com/" target="_blank" rel="noreferrer">Pet Supplies Plus Powell</a></p>
                <p><a href="http://www.theartofevangelia.net/" target="_blank" rel="noreferrer">Evangelia Philippides </a></p>
                <p>Susan Pilcher</p>
                <p><a href="http://www.pizzacottagepowell.com/" target="_blank" rel="noreferrer">Pizza Cottage in Powell</a></p>
                <p>Cindy Phillips &amp; Anne O&apos;Connell-Null</p>
                <p><a href="http://www.powellvillagewinery.com/" target="_blank" rel="noreferrer">Powell Village Winery</a></p>
                <p><a href="http://www.raisingcanes.com/location/750" target="_blank" rel="noreferrer">Raising Cane&apos;s</a></p>
                <p><a href="http://www.come2columbusohio.com/" target="_blank" rel="noreferrer">RE/MAX, Rick Wright</a></p>
                <p><a href="http://www.riversideanimalcare.com/" target="_blank" rel="noreferrer">Riverside Drive Animal Care Center</a></p>
                <p>Becky Roeder</p>
                <p><a href="http://www.roostersmgc.com/locations/oh/powell/liberty-crossing-haircuts-13153.html" target="_blank" rel="noreferrer">Rooster&apos;s Men&apos;s Grooming Center</a></p>
                <p>Diane Ruck</p>
                <p><a href="http://www.scramblersrestaurants.com/locations/1006-powell-oh/" target="_blank" rel="noreferrer">Scramblers</a></p>
                <p><a href="http://www.skylinechili.com/" target="_blank" rel="noreferrer">Skyline Chili - Powell</a></p>
                <p>Becky Sprang</p>
                <p><a href="http://www.starbucks.com/" target="_blank" rel="noreferrer">Starbucks - Powell</a></p>
                <p><a href="http://www.facebook.com/stradersshawnee/" target="_blank" rel="noreferrer">Straders - Shawnill Hills</a></p>
                <p>Risa Teare</p>
                <p><a href="http://tidecleaners.com/en-us/location/3446" target="_blank" rel="noreferrer">Tide Cleaners - Powell</a></p>
                <p><a href="http://locations.tropicalsmoothiecafe.com/oh/powell/9733-sawmill-parkway" target="_blank" rel="noreferrer">Tropical Smoothie Caf&eacute; - Powell</a></p>
                <p><a href="http://www.vittoriacolumbus.com/" target="_blank" rel="noreferrer">Vittoria - Powell</a></p>
                <p>Ray and Carol Ward</p>
                <p>Scott White</p>
                <p><a href="http://whitscustard.com/locations/tag/Powell" target="_blank" rel="noreferrer">Whit&apos;s Frozen Custard-Powell</a></p>
                <p><a href="http://columbusoh.wbu.com/" target="_blank" rel="noreferrer">Wildbirds Unlimited Sawmill</a></p>
                <p>Jeff Wood</p>
                <p><a href="http://www.myyabos.com/" target="_blank" rel="noreferrer">Yabo&apos;s Tacos - Powell</a></p>
              </Col>
            </Row>
          </Container>
        </Stack>
      </main>
    </>
  )
}