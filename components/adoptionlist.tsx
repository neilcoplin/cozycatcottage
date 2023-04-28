import React from 'react'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import AdoptionGrid from './adoptiongrid'
import AdoptionGridFilters from './adoptiongridfilters'
import styles from '@/styles/Adopt.module.css'

import { AdoptionListControls } from '@/types/adoptionlistcontrols'
import { ShelterManagerAnimal } from '@/types/sheltermanageranimal'

export default function AdoptionList(props:{
  felines:Array<ShelterManagerAnimal>|null;
  setFelines:any;
  allFelines:Array<ShelterManagerAnimal>|null;
  filterState:AdoptionListControls;
  setFilterState:any;
  filterFelines:any;
  isLoading:boolean;
}) {
  let gridString;
  let controlString;
  let sexOptions: string[] = [];
  let colorOptions: string[] = [];
  let ageOptions: string[] = [];

  if (props.isLoading) {
    gridString = <Row><p>Wrangling the adoptable cats...</p></Row>
  } else if (!props.felines || !props.allFelines) {
    gridString = <Row><p>An error occurred while fetching the cats.</p></Row>
  } else {

    for (let f = 0; f < props.allFelines.length; f++) {
      if (!sexOptions.includes(props.allFelines[f].SEXNAME)) {
        sexOptions.push(props.allFelines[f].SEXNAME);
      }
      if (!ageOptions.includes(props.allFelines[f].AGEGROUP)) {
        ageOptions.push(props.allFelines[f].AGEGROUP);
      }
      const colors = props.allFelines[f].BASECOLOURNAME.split("/");
      for(let a=0; a < colors.length; a++) {
        if (!colorOptions.includes(colors[a].trim())) {
          colorOptions.push(colors[a].trim());
        }  
      }
    }
    sexOptions.sort();
    ageOptions.sort();
    colorOptions.sort();

    gridString = <AdoptionGrid 
      allFelines={props.allFelines}
      felines={props.felines}
      setFelines={props.setFelines}
      filterFelines={props.filterFelines}
      filterState={props.filterState}
      setFilterState={props.setFilterState}
    />

    controlString = <AdoptionGridFilters
      allFelines={props.allFelines}
      setFelines={props.setFelines}
      filterFelines={props.filterFelines}
      filterState={props.filterState}
      setFilterState={props.setFilterState}
      ageOptions={ageOptions}
      colorOptions={colorOptions}
      sexOptions={sexOptions}
    />
  }
  return (
    <>
      <Container fluid="lg" className='center'>
        <h1>Adopt a cat</h1>
        <Row sm={1} md={2}>
          <Col sm={12} md={8}>
            <h2>Meet your new best friend.</h2>
            <p>We recommend visiting or contacting us to confirm the availability of a particular cat or kitten.</p>

            <p className={styles.readyToAdopt}><strong>Ready to adopt?</strong> You must have a carrier. Cash or check only. <Link href="/adoption-process">Learn about our adoption process.</Link></p>
          </Col>
          <Col sm={12} md={4} className='left'>
            {controlString}
          </Col>
        </Row>
      </Container>

      <Container fluid="lg">
        {gridString}
      </Container>
    </>
  );
}
