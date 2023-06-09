function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://www.cozycatcottage.org/</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/adopt</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/adoption-process</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/book-buddies</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/case-against-declawing</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/coins-for-cats</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/contact-us</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/donate</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/fiv-and-felv</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/foster</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/fundraisers</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/happy-tails</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/holiday-marketplace</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/importance-of-microchips</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/introducing-pets</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/kroger-community-rewards</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/meet-the-team</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/memorial-tribute</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/our-story</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/our-wish-list</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/pet-education</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/putting-for-paws</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/safety-in-the-home</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/trap-neuter-return</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
  <url>
    <loc>http://www.cozycatcottage.org/volunteer</loc>
    <lastmod>2023-05-08</lastmod>
  </url>
</urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'application/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;