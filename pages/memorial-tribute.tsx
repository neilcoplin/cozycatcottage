import Head from 'next/head'
import { useState } from 'react'
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import styles from '@/styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX, faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function MemorialTribute(props:any) {
  const [formData, setFormData] = useState({
    type: "in memory of",
    name: "",
    amount: "0",
    donationMethod: "Paypal",
    fromName: "",
    fromStreet: "",
    fromCity: "",
    fromState: "",
    fromZip: "",
    fromEmail: "",
    fromPhone: "",
    toName: "",
    toStreet: "",
    toCity: "",
    toState: "",
    toZip: "",
    toEmail: "",
    personalizedMessage: "",
    signatureText: "",
  });
  const [loadingState, setLoadingState] = useState("none");

  const handleChange = (event:any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({...values, [name]: value}));
  }

  const sendEmail = async (event:any) => {
    event.preventDefault();
    console.log(formData);
    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }

    // Set loading indicators
    setLoadingState("loading");

    fetch (event.target.action, reqOptions)
      .then(response => {
        if (response.ok) {
          setLoadingState("success");
          return response;
        }
        throw response;
      })
      .catch(error => {
        console.error("Submitting form: ", error);
        setLoadingState("error");
      });
  }

  // Control the loading div at the bottom of the form based on submission state
  let loadingMessage = "";
  let loadingIcon = <FontAwesomeIcon icon={faPaw} size="2xl" color='#ffffff' />;
  let loadingClass = styles.formUnsubmitted;
  switch (loadingState) {
    case "loading": {
      loadingMessage = " Sending your request...";
      loadingIcon = <FontAwesomeIcon icon={faSpinner} spin size="2xl" />;
      loadingClass = styles.formLoading;
      break;
    }
    case "success": {
      loadingMessage = " Your tribute has been submitted.  Please follow the instructions below for sending in your donation.";
      loadingIcon = <FontAwesomeIcon icon={faCheck} size="2xl" />;
      loadingClass = styles.formSuccess;
      break;
    }
    case "error": {
      loadingMessage = " An error occurred when trying to submit the form.";
      loadingIcon = <FontAwesomeIcon icon={faX} size="2xl" />;
      loadingClass = styles.formError;
      break;
    }
    case "none":
    default: {
      loadingMessage = "";
      loadingIcon = <FontAwesomeIcon icon={faPaw} size="2xl" color='#ffffff' />;
      loadingClass = styles.formUnsubmitted;
      break;
    }
  }

  return (
    <>
      <Head>
        <title>{"Memorial or Honor Tribute | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Form action="/api/sendmail"
        onSubmit={sendEmail}
        method="post"
        name="memorial-tribute-form"
        className={styles.validate}
        target="_blank">
          <Stack gap={3} id="memorial-tribute" className="top-padding">
            <Container fluid="lg">
              <h1 className="center">Memorial Tribute</h1>
              <p>To request a memorial tribute, please fill out the form below.  Instructions for sending in your donation are located below the form to complete your request.</p>
            </Container>
            <Container fluid="lg">
              <Stack gap={3} className="top-padding">
                <h2>Memorial information</h2>
                <Form.Group>
                  <Form.Label>This gift is</Form.Label>
                  <Form.Select id="type" name="type" onChange={handleChange}>
                    <option>in memory of</option>
                    <option>in honor of</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" id="name" name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>I would like to make a tribute gift of $</Form.Label>
                  <Form.Control type="text" id="amount" name="amount" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>I will send my donation via</Form.Label>
                  <Form.Select id="donationMethod" name="donationMethod" onChange={handleChange}>
                    <option>Paypal</option>
                    <option>Check</option>
                    <option>Cash</option>
                  </Form.Select>
                </Form.Group>
              </Stack>
            </Container>
            <Container fluid="lg">
              <Stack gap={3} className="top-padding">
                <h2>My contact information</h2>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" id="fromName" name="fromName" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Street</Form.Label>
                  <Form.Control type="text" id="fromStreet" name="fromStreet" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" id="fromCity" name="fromCity" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" id="fromState" name="fromState" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" id="fromZip" name="fromZip" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="phone" id="fromPhone" name="fromPhone" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email contact</Form.Label>
                  <Form.Control type="email" id="fromEmail" name="fromEmail" onChange={handleChange} />
                </Form.Group>
              </Stack>
            </Container>
            <Container fluid="lg">
              <Stack gap={3} className="top-padding">
                <h2>Honoree contact information</h2>
                <p>If you would like us to send an email or card to the person/pet you are honoring, please include their information for the card.</p>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" id="toName" name="toName" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Street</Form.Label>
                  <Form.Control type="text" id="toStreet" name="toStreet" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" id="toCity" name="toCity" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" id="toState" name="toState" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="phone" id="toZip" name="toZip" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email contact</Form.Label>
                  <Form.Control type="email" id="toEmail" name="toEmail" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Add personalized message (up to 60 characters)</Form.Label>
                  <Form.Control as="textarea" id="personalizedMessage" name="personalizedMessage" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Signature for card (up to 60 characters)</Form.Label>
                  <Form.Control as="textarea" id="signatureText" name="signatureText" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="submit" id="submit" value="Send" className="btn btn-secondary" />
                </Form.Group>
              </Stack>
            </Container>
            <Container id="loading-div" className={loadingClass}>
              {loadingIcon}
              {loadingMessage}
            </Container>
            <Container fluid="lg">
              <h2>Send in your donation</h2>
              <p>Donations should be sent in using the method you specified in the form above, via either cash, check or online with PayPal.  For cash or check donations, you may drop them off in person or send them to our post office box.  Checks should be made out to <b>&ldquo;Cozy Cat Cottage Adoption Center.&rdquo;</b></p>
            </Container>
            <Container fluid="lg">
              <Row xs={1} sm={3}>
                <Col xs={12} sm={4}>
                  <h3>In Person</h3>
                  <p>10344 Sawmill Road<br />
                  Powell, Ohio 43065</p>
                </Col>
                <Col xs={12} sm={4}>
                  <h2>By Mail</h2>
                  <p>Cozy Cat Cottage Adoption Center<br />
                  P.O. Box 283<br />
                  Powell, Ohio 43065-0283</p>
                </Col>
                <Col xs={12} sm={4}>
                  <h2>Online</h2>
                  <Button href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LRUGP6HJSNUKG" size="lg">Donate through Paypal</Button>
                </Col>
              </Row>
            </Container>
          </Stack>
        </Form>
      </main>
    </>
  )
}