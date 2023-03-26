import Head from 'next/head'
// import Image from 'next/image'
import SearchResult from '../components/searchresult'
import { Container, Form, Stack } from "react-bootstrap";

export default function Search(props:any) {
  return (
    <>
      <Head>
        <title>{"Search | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Stack gap={3} id="search" className="top-padding">
          <Container fluid="lg" className="center">
            <h1>Search this site</h1>
          </Container>

          <Container fluid="lg">
            <Form>
              <Form.Group>
                <Form.Label className="sr-only">Search</Form.Label>
                <Form.Control type="text" id="term" placeholder="Your search term" />
              </Form.Group>
              <Form.Control type="submit" className="btn btn-secondary" id="search-submit" value="Search" />
            </Form>
          </Container>

          <Container fluid="lg">
            <h2>Search results</h2>
            <SearchResult
              title="Test title one"
              href="/adopt"
              description="description goes here"
            />
            <SearchResult
              title="Test title two"
              href="/adopt"
              description="description goes here"
            />
            <SearchResult
              title="Test title three"
              href="/adopt"
              description="description goes here"
            />
          </Container>
        </Stack>
      </main>
    </>
  )
}