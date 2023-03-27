import Head from 'next/head'
import { Container, Image, Stack } from "react-bootstrap";
import { useState, useEffect} from 'react'

export default function Custom404(props:any) {
  const [catSrc, setCatSrc] = useState("loading.gif");


  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw response;
      })
      .then(responseBody => {
        return JSON.parse(responseBody);
      })
      .then(data => {
        console.log(data);
        setCatSrc(data[0].url);
      })
      .catch(error => {
        console.error("Error in fetching a random cat picture: ", error);
      });
  }, [])

  return (
    <>
      <Head>
        <title>{"Not Found | " + props.siteTitle}</title>
      </Head>
      <main>
        <Container fluid="true" id="not-found">
          <Stack gap={3}>
            <Container fluid="md" className='top-padding center'>
              <h1>Page Not Found</h1>
              <p>The page you requested could not be found, so here is a  random picture of a cat instead.</p>
 
              <Container className="contain">
                <Image src={catSrc} alt="A random cat picture from the internet" fluid />
              </Container>
            </Container>
          </Stack>
        </Container>
      </main>
    </>
  )
}