import Head from 'next/head'
import styles from '@/styles/Marketplace.module.css'
import { Card, Container, Image, Row, Stack } from "react-bootstrap";

type MarketplaceSponsor = {
  name:string;
  url:string|null;
}

export default function HolidayMarketplace(props:any) {
  const businessSponsors:MarketplaceSponsor[] = [
    {name: "Another Broken Egg, Powell", url: "https://www.anotherbrokenegg.com/locations/powell-oh/"},
    {name: "BeFit Café", url: "https://www.befitcafe.com/"},
    {name: "Bibibop Asian Grill", url: "https://bibibop.com/locations/bibibop-powell-oh-galloway-drive/"},
    {name: "Cabin Fever Glass", url: "https://www.facebook.com/stephanie.hoonspeight"},
    {name: "City BBQ", url: "https://www.citybbq.com/location"},
    {name: "Five Guys", url: "https://www.fiveguys.com/"},
    {name: "The Hills Market", url: "http://thehillsmarket.com/"},
    {name: "Barbara Hulse, L.M.T.", url: "https://barbhulse.glossgenius.com/"},
    {name: "Barringer Cleaning Services", url: "https://www.facebook.com/BarringerCleaning/"},
    {name: "Borgata Pizza Cafe", url: "https://borgatapizzacafe.com/"},
    {name: "Cindy France - FestiveFabricArts", url: "etsy.com/shop/festivefabricarts"},
    {name: "Hidden Valley Golf Course", url: "https://www.delawareohio.net/government/departments/parks-recreation/hidden-valley-golf-course"},
    {name: "Hollywood Feed", url: "https://locations.hollywoodfeed.com/ohio/powell/4010-w-powell-rd/"},
    {name: "Home Depot", url: "https://www.homedepot.com/l/Orange-Township/OH/Powell/43065/3836"},
    {name: "Jersey Mike's", url: "https://www.jerseymikes.com/2022/powell-oh"},
    {name: "Koble's Greek / Italian Grill", url: "https://koblegrill.com/"},
    {name: "The Lambright Team of Realtors", url: "https://www.facebook.com/TheLambrightTeam/"},
    {name: "Lin's Wok, Powell", url: "https://linswok.com/"},
    {name: "Local Roots, Powell", url: "https://www.localrootspowell.com/"},
    {name: "Meijer, Inc.", url: "meijer.com/shopping/home.html"},
    {name: "The Morgan House", url: "https://www.morganhse.com/"},
    {name: "NAPA Auto & Truck Parts", url: "https://www.napaonline.com/en/oh/columbus/store/28080?sdref=footer"},
    {name: "Raising Cane's Chicken", url: "https://www.raisingcanes.com/"},
    {name: "Shawnee Station Taproom & Kitchen", url: "https://shawneestationtaproom.com/"},
    {name: "Skyline Chili - Powell", url: "https://skylinechili.com/"},
    {name: "Skyline Chil - Lewis Center", url: "https://locations.skylinechili.com/skyline-chili-270a350531a7?y_source=1_OTMxNjAzOC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"},
    {name: "Starbucks, Powell", url: "https://www.starbucks.com/"},
    {name: "Tomatillo's", url: "https://www.tomatillosrestaurant.com/"},
    {name: "Trader Joe's", url: "https://locations.traderjoes.com/oh/dublin/672/"},
    {name: "Tropical Smoothie Café", url: "https://locations.tropicalsmoothiecafe.com/oh/powell/9733-sawmill-parkway"},
    {name: "Two Rivers Restaurant", url: "https://www.tworiverscolumbus.com/"},
    {name: "Vittoria Restaurant", url: "https://www.vittoriacolumbus.com/"},
    {name: "Whit's Frozen Custard", url: "https://www.whitsfrozencustard.com/"},
    {name: "Wild Birds Unlimited", url: "https://columbusoh.wbu.com/"}
  ];

  const individualSponsors:MarketplaceSponsor[] = [
    {name: "Rebecca Blood", url: null},
    {name: "Zia Boswell", url: null},
    {name: "Cheryl Brown", url: null},
    {name: "Rebecca Bryant", url: null},
    {name: "Jodi Lynn Foertmyer", url: null},
    {name: "Arianne Gabele", url: null},
    {name: "Drina Gentry", url: null},
    {name: "Jean Godby", url: null},
    {name: "Mary Haessig", url: null},
    {name: "Cindy Hall", url: null},
    {name: "Karen Keenan", url: null},
    {name: "Sheryl Kirchhofer", url: null},
    {name: "Karen Maase", url: null},
    {name: "Susan Nighbert", url: null},
    {name: "Carley Petch", url: null},
    {name: "Marne Rapp", url: null},
    {name: "Becky Roeder", url: null},
    {name: "Janet Ruggles", url: null},
    {name: "Sarah Schaaf", url: null},
    {name: "Debbie Shaw", url: null},
    {name: "Stephanie Hoon-Speight", url: null},
    {name: "Becky & Cheryll Sprang", url: null},
    {name: "Linda Stanek", url: null},
    {name: "Kathy Tagliaferri", url: null},
    {name: "Jenny Toves", url: null},
    {name: "Sheila Zirkle", url: null},
    {name: "Lillian Webb", url: null}
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
            <h1>2025 Holiday Marketplace</h1>
            <p>Cozy Cat Cottage extends its deep appreciation to these businesses and individuals that donated items to its Third Annual Holiday Marketplace Sale. Please support these businesses and let them know you chose them for their support of Cozy Cat Cottage. Thank you!</p>
          </Container>

          <Container fluid="md">
            <h2>Business Donors for 2025 Holiday Sale</h2>
            <Row xs={1} md={2} xl={3}>
                {businessSponsors.map((sponsor:MarketplaceSponsor) => 
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

          <Container fluid="md">
            <h2>Individual Donors for 2025 Holiday Sale</h2>
            <Row xs={1} md={2} xl={3}>
                {individualSponsors.map((sponsor:MarketplaceSponsor) => 
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