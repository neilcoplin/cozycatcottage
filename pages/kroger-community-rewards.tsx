import Head from 'next/head'
import { Container, Image, Stack } from "react-bootstrap";

export default function KrogerCommunityRewards(props:any) {
  return (
    <>
      <Head>
        <title>{"Kroger Community Rewards | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container id="kroger-community-rewards" fluid="true">
          <Image fluid src="/img/hero-image-kroger-community-rewards.jpg" alt="Grey cat sniffing the floor" />

          <Stack gap={3} className="top-padding">
            <Container fluid="lg" className="center">
              <h1>Kroger Community Rewards</h1>
              <p>Cozy Cat Cottage is proud to be a partner in the <a href="https://www.kroger.com/account/enrollCommunityRewardsNow/" target="_blank" rel="noreferrer">Kroger Community Rewards program</a>. We receive a donation each time you swipe your <b>registered</b> Kroger Plus Card at checkout.</p>
            </Container>

            <Container fluid="lg">
              <h2>Register online at <a href="https://www.kroger.com/account/enrollCommunityRewardsNow/" target="_blank" rel="noreferrer">krogercommunityrewards.com</a></h2>
              <p>Please note: Kroger Community Rewards require yearly renewal that will be prompted through an email from Kroger.</p>

              <h3>New customers</h3>
              <ol>
                <li>Go to <a href="https://www.kroger.com/account/enrollCommunityRewardsNow/" target="_blank" rel="noreferrer">krogercommunityrewards.com</a> and click &ldquo;Create an Account&rdquo;.</li>
                <li>Enter your ZIP code and select your store.</li>
                <li>Follow the prompts to enter your personal information.</li>
                <li>Open your email inbox and click on the verification link within the body of the email to activate your account.</li>
                <li>Click on &ldquo;My account&rdquo; to log into your account if necessary.</li>
                <li>Click on &ldquo;Community Rewards&rdquo; found In the left side navigation bar.</li>
                <li>In the field titled &ldquo;Find an Organization&rdquo;, enter <b>82075</b> or Cozy Cat Cottage Adoption Center and click &ldquo;Search&rdquo;.</li>
                <li>Click &ldquo;Enroll&rdquo;. The page will display a verification that you are now enrolled.</li>
              </ol>

              <h3>Existing customers</h3>
              <ol>
                <li>Go to <a href="https://www.kroger.com/account/enrollCommunityRewardsNow/" target="_blank" rel="noreferrer">krogercommunityrewards.com</a> and sign in to your account.</li>
                <li>Click on &ldquo;Community Rewards&rdquo; found In the left side navigation bar.</li>
                <li>In the field titled &ldquo;Find an Organization&rdquo;, enter <b>82075</b> or Cozy Cat Cottage Adoption Center and click &ldquo;Search&rdquo;.</li>
                <li>Click &ldquo;Enroll&rdquo;. The page will display a verification that you are now enrolled.</li>
              </ol>
            </Container>
          </Stack>
        </Container>
      </main>
    </>
  )
}