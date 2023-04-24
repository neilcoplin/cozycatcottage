import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Button, Carousel, Col, Container, Image, Row, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { ShelterManagerAnimal } from '@/types/sheltermanageranimal';

export default function AdoptionProfile(props:{
  felines:Array<ShelterManagerAnimal>|null;
  isLoading:boolean;
  id:any;
}) {
  const baseImageUrl = "https://service.sheltermanager.com/asmservice?account=cozycatcottage&method=animal_image&animalid=";
  
  if (props.isLoading) {
    // Loading...
    return <p>Bringing the cat out to play...</p>
  }
  
  if (!props.felines) {
    // Could not contact Shelter Manager or bad data was returned
    return (
        <Container fluid="lg">
        <p>An error occurred while fetching the cats.</p>
        <Link href="/adopt">Back to adoptable cats list.</Link>
      </Container>
    );
  }

  // Find the cat in the pre-loaded cats array.
  let feline:ShelterManagerAnimal|undefined = props.felines.find(
    (item: { ID: number }) => item.ID == props.id
  );

  if (!feline) {
    // Could not find the cat ID in the requested array.
    return (
      <Container fluid="lg">
        <p>The cat you requested could not be found.</p>
        <Link href="/adopt">Back to adoptable cats list.</Link>
      </Container>
    );
  }

  // We have a cat loaded now, so everything past here assumes feline exists.
  let sponsorCare = <></>;
  let imageString;
  // Determine number of images for carousel display
  if (feline.WEBSITEIMAGECOUNT == 0) {
    // No image, display a placeholder
    imageString = <Container fluid="xs">
      <Image src="/img/adopt-default.jpg" alt="No image available" className={styles.profileimage} />
      <p className="bg-light center">No image available.</p>
    </Container>
  } else if (feline.WEBSITEIMAGECOUNT == 1) {
    // One image, display just the image
    imageString = <Image src={baseImageUrl + feline.ID} alt={"Picture of " + feline.ANIMALNAME} className={styles.profileimage} />;
  } else if (feline.WEBSITEIMAGECOUNT > 1) {
    // More than one image, display a carousel
    // Construct a sequence number array that we can map over
    let images = [];
    for (let i = 1; i <= feline.WEBSITEIMAGECOUNT; i++) {
      images.push(
        <Carousel.Item key={'profile-image-'+i}>
          <Image src={baseImageUrl + feline.ID + "&seq=" + i} alt={"Picture of " + feline.ANIMALNAME} />
        </Carousel.Item>
    );
    }

    imageString = <Container fluid="xs">
        <Carousel
            className={styles.profileimage}
            interval={null}
            pause='hover'
          >
          {images}
        </Carousel>
        <p className="bg-light center">{feline.WEBSITEIMAGECOUNT} images available. Use the controls in the image viewer to select another image.</p>
      </Container>;
  }
  
  if (feline.HASSPECIALNEEDS == 1) {
    sponsorCare = <Container fluid="md" className="center top-padding">
      <Button href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LRUGP6HJSNUKG" size="lg" className='btn btn-secondary'>Sponsor My Care</Button>
    </Container>
  }

  const birthDate = new Date(feline.DATEOFBIRTH)
  const intakeDate = new Date(feline.DATEBROUGHTIN)

  return (
    <Container fluid="lg">
      <Stack gap={3}>
        <Row xs={1} lg={2}>
          <Col className={styles.contain} xs={12} lg={8}>
            {imageString}
          </Col>
          <Col lg={4}>
            <h1>About {feline.ANIMALNAME}</h1>
            <dl className={styles.profileList}>
              <dt>Age Group:</dt>
              <dd>{feline.AGEGROUP}</dd>
              <dt>Sex:</dt>
              <dd>{feline.SEXNAME}</dd>
              <dt>Breed:</dt>
              <dd>{feline.BREEDNAME}</dd>
              <dt>Color:</dt>
              <dd>{feline.BASECOLOURNAME}</dd>
              <dt>Birthday:</dt>
              <dd>{birthDate.getMonth() + "/" + birthDate.getDate() + "/" + birthDate.getFullYear()}</dd>
              <dt>{feline.ANIMALTYPEID == 11 ? 'Returned to shelter on' : 'Shelter intake date'}:</dt>
              <dd>{intakeDate.getMonth() + "/" + intakeDate.getDate() + "/" + intakeDate.getFullYear()}</dd>
              <dt>Declawed:</dt>
              <dd>{feline.DECLAWED == 1 ? 'Yes' : 'No'}</dd>
              {feline.HASSPECIALNEEDS || feline.FLVRESULT != 1
                ? <><dt>Special Needs:</dt>
                <dd className="contain">Yes <span className={styles.heartIconFloat}>
                    <FontAwesomeIcon icon={faHeart} size="xl" />
                  </span></dd></>
                : <></>
              }
            </dl>
            {sponsorCare}
          </Col>
        </Row>
        <Row xs={1}>
          <Col>
            <p dangerouslySetInnerHTML={{__html: feline.WEBSITEMEDIANOTES }} />
          </Col>
        </Row>
        <Row>
          <Col className="center">
            <p><Link href="/adopt">&lt;&lt;&lt; Back to adoptable cats</Link></p>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
}