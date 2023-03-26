import Head from 'next/head'
import { Container, Stack } from "react-bootstrap";

export default function Custom404(props:any) {
  return (
    <>
      <Head>
        <title>{"Not Found | " + props.siteTitle}</title>
      </Head>
      <main>
        <Container fluid="true" id="not-found">
          <Stack gap={3}>
            <Container fluid="md">
              <h1>404</h1>
              <p>We&apos;re sorry, but the page you were looking for doesn&apos;t exist.</p>
            </Container>
          </Stack>
        </Container>
      </main>
    </>
  )
}