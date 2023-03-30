import Head from 'next/head'
import styles from '@/styles/Marketplace.module.css'
import { Card, Container, Image, Row, Stack } from "react-bootstrap";

type MarketplaceSponsor = {
  name:string;
  url:string|null;
}

export default function HolidayMarketplace(props:any) {
  const sponsors:MarketplaceSponsor[] = [
    {name: "Aladdin's Eatery - Powell", url: "https://www.aladdins.com/"},
    {name: "AMF Sawmill Lanes", url: "https://www.amf.com/location/amf-sawmill-lanes"},
    {name: "Ange's Pizza - Powell", url: "https://angespizzaonline.com/"},
    {name: "Annex Barbershop", url: "https://www.theannexbarbershop.com/"},
    {name: "Anthony Thomas", url: "https://www.anthony-thomas.com//"},
    {name: "Aveda Institute Columbus - Bethel Road", url: "https://avedafi.edu/columbus/cosmetology-school?utm_source=google&utm_medium=organic&utm_campaign=gmb"},
    {name: "Be Fit Cafe", url: "https://www.befitcafe.com/"},
    {name: "Sharon Binkley", url: null},
    {name: "Blarney Stone Tavern", url: "https://www.blarneystonetavern.com/drink-menu"},
    {name: "Blowdry Cafe - Powell", url: "https://www.blowdrycafe.com/locations"},
    {name: "Bonefish Grill - Dublin", url: "https://locations.bonefishgrill.com/ohio/dublin/5712-frantz-road"},
    {name: "Borgata Pizza Cafe", url: "https://borgatapizzacafe.com"},
    {name: "Rebecca Brickner - Music Instruction, 614-214-1083", url: null},
    {name: "Rebecca Bryant", url: null},
    {name: "Brueggers Bagels", url: "https://locations.brueggers.com/us/oh/dublin/4425-w-dublin-granville-rd"},
    {name: "Cameron Mitchell - American Bistro", url: "https://cameronsamericanbistro.com"},
    {name: "Cindy Capizzi", url: null},
    {name: "Cats Only Veterinary Clinic", url: "https://catsonlyvc.com"},
    {name: "Chili Verde Cafe - Sawmill Road", url: "https://www.chileverdecafe.com"},
    {name: "Chili's Grill and Bar - Hamilton Road", url: "https://www.chilis.com/locations/us/ohio/columbus/hamilton-quarters?utm_source=google&utm_medium=local&utm_campaign=Chilis"},
    {name: "Chiller Rink - Dublin", url: "https://www.thechiller.com/index.cfm?utm_source=GMBlisting&utm_medium=Organic"},
    {name: "City BBQ - Powell", url: "https://www.citybbq.com/location"},
    {name: "City Egg - Bethel Center", url: "https://cityeggrestaurants.com"},
    {name: "Coaches Bar & Grill", url: "https://www.coachesbarandgrill.com"},
    {name: "Columbus SCUBA", url: "https://columbusscuba.com/register/"},
    {name: "Allison & John Congemi", url: null},
    {name: "Connells Maple Lee Flowers", url: "https://www.cmlflowers.com/"},
    {name: "Costco Polaris", url: "https://www.costco.com/warehouse-locations/columbus-oh-%20632.html/Delaware/"},
    {name: "Sue Cox", url: null},
    {name: "Cross My Heart (Cross Stitch)", url: "https://www.facebook.com/CrossMyHeartColumbus/"},
    {name: "Dave & Busters", url: "https://www.daveandbusters.com/sports-bar-and-restaurant"},
    {name: "Delaware Golf Club", url: "https://www.delawaregolfclub.com"},
    {name: "Dublin Rocks & Minerals", url: "https://www.dublinrocksandminerals.com"},
    {name: "Envy Skin Gallery", url: "https://envyskingallery.com/"},
    {name: "Filling Station Bar & Grill", url: "https://envyskingallery.com"},
    {name: "Gallo's Taproom - Powell ", url: "http://www.gallostaproom.com/powell-tap-room"},
    {name: "Giant Eagle - Powell ", url: "http://www.gianteagle.com/stores/OH/Powell/Powell-Giant-Eagle/6527"},
    {name: "Graeter's - Powell ", url: "http://www.graeters.com/stores/retail-stores/columbus/powell"},
    {name: "Grandfather Clock Company", url: "http://uptownwesterville.us/grandfatherclockcompany/"},
    {name: "Groovy Plants Ranch", url: "https://www.groovyplantsranch.com"},
    {name: "Mary Haessig", url: null},
    {name: "The Hills Jewelry", url: "https://www.thehillsjewelry.com"},
    {name: "Beth Hinkle", url: null},
    {name: "Home Depot", url: "http://www.homedepot.com/services/l/oh/powell/"},
    {name: "Ill-Mannered Brewing Co.", url: "http://www.illmanneredbeer.com"},
    {name: "Laura Dershaw Skincare Services ", url: "https://www.lauradershawskincare.com/"},
    {name: "Lili Huard", url: null},
    {name: "Barbara Hulse, L.M.T. - Massage Mi Powell", url: "https://destinyforserenity.com"},
    {name: "Itsy Bitsy Bird Wood", url: "https://www.facebook.com/Itsy-Bitsy-Bird-101356725031271/"},
    {name: "Jersey Mike's - Powell", url: "https://www.jerseymikes.com/2022/powell-oh"},
    {name: "JT's Pizza, Pub & Patio", url: "https://jtspizzacolumbus.com/"},
    {name: "Karen Keenan", url: null},
    {name: "Kimberly's Diamond Corner ", url: "http://www.kimberlysdiamondcorner.com/"},
    {name: "Koble Greek Italian Grill - Powell Corner", url: "http://www.koblegrill.com"},
    {name: "Lair's Hallmark, Powell", url: "http://stores.hallmark.com/oh/powell/lairs-hallmark-shopcurbside-pick-up-available-powell-oh-003363.html"},
    {name: "The Laughing Ogre Comics", url: "https://www.facebook.com/LaughingOgreOhio"},
    {name: "Becky McGeary", url: null},
    {name: "Karen Maase", url: null},
    {name: "Matthew Benjamin Woodcraft", url: "https://www.facebook.com/people/Matthew-Benjamin-Woodcraft/100063769231919/"},
    {name: "MCL Restaurant & Bakery - Kingsdale Center", url: "https://www.mclhomemade.com"},
    {name: "Meijer's Lewis Center", url: "http://www.meijer.com/shopping/store-locator/143.html/"},
    {name: "Morgan House, Shawnee Hills", url: "http://www.morganhse.com"},
    {name: "Mozart's Cafe & Event Space", url: "https://mozartscafe.com/bakery-cafe/restaurant/"},
    {name: "Muirfield Village Golf Club", url: "http://www.mvgc.org"},
    {name: "Music Go Round", url: "https://www.musicgoround.com/locations/columbus-oh"},
    {name: "Natasha Faye Photography", url: "https://www.facebook.com/people/Natasha-Faye-Photography/100063529631744/"},
    {name: "Natural Spa Cafe", url: "https://www.thenaturalnailspa.com"},
    {name: "Helen Newkold", url: null},
    {name: "Ninja City Adventure Park", url: "https://www.ninjaciticolumbusoh.com"},
    {name: "Oakland Nursery - Dublin", url: "https://www.oaklandnursery.com/page/garden-centers/dublin"},
    {name: "Papa Giorgio's - Bethel Road", url: "https://papagiorgiosohio.com"},
    {name: "Jennifer Parker", url: null},
    {name: "Marcia Perry", url: null},
    {name: "Evangelia Philippidis - Artist", url: "https://www.theartofevangelia.net"},
    {name: "Phoenix Theaters", url: "https://www.phoenixtheatres.com"},
    {name: "Pierceology", url: "https://www.piercology.com"},
    {name: "Susan Pilcher", url: null},
    {name: "Raising Cane's Powell", url: "http://www.raisingcanes.com/location/750"},
    {name: "Marne Rapp", url: null},
    {name: "Char Riedinger", url: null},
    {name: "Becky Roeder", url: null},
    {name: "Romeo's Pizza - Bethel Road", url: "https://romeospizza.com"},
    {name: "Diane Ruck", url: null},
    {name: "Salon Centric ", url: "https://stores.saloncentric.com/oh/columbus/2623"},
    {name: "Scene 75 Entertainment Center", url: "https://www.scene75.com/columbus/"},
    {name: "Scrambler's Powell", url: "https://scramblersrestaurants.com"},
    {name: "Skyline Chili - Powell", url: "https://www.skylinechili.com"},
    {name: "Becky and Cheryll Sprang", url: null},
    {name: "Starbucks - Powell", url: "http://www.starbucks.com"},
    {name: "Take Flight Ohio", url: "https://takeflightohio.com"},
    {name: "Tomatillos", url: "https://www.tomatillosrestaurant.com"},
    {name: "The Train Station", url: "http://www.trainstationohio.com"},
    {name: "Tropical Smoothie Caf&eacute; - Powell", url: "http://locations.tropicalsmoothiecafe.com/oh/powell/9733-sawmill-parkway"},
    {name: "Tropical Trends", url: "https://tropicaltrends.biz"},
    {name: "Virtue Vegan Salon", url: "https://www.virtuevegansalon.com"},
    {name: "Vittoria - Powell", url: "http://www.vittoriacolumbus.com"},
    {name: "Kay Walker", url: null},
    {name: "Whit's Frozen Custard - Powell", url: "http://whitscustard.com/locations/tag/Powell"},
    {name: "Wildbirds Unlimited Sawmill", url: "http://columbusoh.wbu.com"},
    {name: "Yabo's Tacos - Powell", url: "http://www.myyabos.com"}
  ];


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
            <h1>2022 Holiday Marketplace</h1>
            <p>Cozy Cat Cottage extends its deep appreciation to these businesses and individuals that donated items to its Third Annual Holiday Marketplace Sale. Please support these businesses and let them know you chose them for their support of Cozy Cat Cottage. Thank you!</p>
          </Container>

          <Container fluid="md">
            <Row xs={1} md={2} xl={3}>
                {sponsors.map((sponsor:MarketplaceSponsor) => 
                  sponsor.url === null
                  ?
                    <Card key={sponsor.name} className={styles.card}>
                      <Card.Text>{sponsor.name}</Card.Text>
                    </Card>
                  :
                    <Card key={sponsor.name} className={styles.card}>
                      <Card.Text><a href={sponsor.url} target="_blank" rel="noreferrer">{sponsor.name}</a></Card.Text>
                    </Card>
                )}
            </Row>
          </Container>
        </Stack>
      </main>
    </>
  )
}