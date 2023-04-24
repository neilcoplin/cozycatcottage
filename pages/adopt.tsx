import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Stack } from "react-bootstrap";
import AdoptionList from '../components/adoptionlist'
import AdoptionProfile from '../components/adoptionprofile'
import { useState, useEffect} from 'react'

import { AdoptionListControls } from '@/types/adoptionlistcontrols';
import { ShelterManagerAnimal } from '@/types/sheltermanageranimal'

export default function Adopt(props:any) {
    const initialFilterState : AdoptionListControls = {
      age: 'All',
      color: 'Any',
      declawed: 'Both',
      sex: 'All',
      sort: 'Name',
      specialneeds: 'Both'
    };
    const [filterState, setFilterState] = useState(initialFilterState);
    const [felines, setFelines] = useState(null);
    const [allFelines, setAllFelines] = useState(null);
    const [isLoading, setLoading] = useState(false);
    let displayString;

    const router = useRouter();
    const { id } = router.query;
  
    useEffect(() => {
      setLoading(true)
      fetch("https://service.sheltermanager.com/asmservice?account=cozycatcottage&method=animal_view_adoptable_js")
        .then(response => {
          if (response.ok) {
            return response.text();
          }
          throw response;
        })
        .then(responseBody => {
          const start = responseBody.search(/\[\{/);
          const end = responseBody.search(/\}\]/) + 2;
          let data = responseBody.substring(start, end);
          return JSON.parse(data);
        })
        .then((data) => {
          setAllFelines(data);
          data = filterFelines(data, {
            age: 'All',
            color: 'Any',
            declawed: 'Both',
            sex: 'All',
            sort: 'Name',
            specialneeds: 'Both'
          })
          setFelines(data);
          console.log(data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error in fetching cats: ", error);
        });
    }, [])

    if (id) {
      displayString = <AdoptionProfile
        felines={felines}
        isLoading={isLoading}
        id={id}
      />
    } else {
      displayString = <AdoptionList
        felines={felines}
        setFelines={setFelines}
        allFelines={allFelines}
        filterState={filterState}
        setFilterState={setFilterState}
        filterFelines={filterFelines}
        isLoading={isLoading}
      />
    }
  return (
    <>
      <Head>
        <title>{"Adopt a Cat | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Container fluid="true" id="adopt">
          <Stack gap={3} className="top-padding">
            {displayString}
          </Stack>
          <Container fluid="true" className="primary-notice center">
            <p><strong>Not ready to adopt?</strong> <Link href="/foster">Learn about our fostering program!</Link></p>
          </Container>
        </Container>
      </main>
    </>
  )
}

function filterFelines (felines:ShelterManagerAnimal[], filterState:any) {
  // Find the cat in the pre-loaded cats array.
  if (filterState.sex !== 'All') {
    felines = felines.filter(
      (item: { SEXNAME: string }) => item.SEXNAME == filterState.sex
    );
  }
  if (filterState.age !== 'All') {
    felines = felines.filter(
      (item: { AGEGROUP: string }) => item.AGEGROUP == filterState.age
    );
  }
  if (filterState.color !== 'Any') {
    felines = felines.filter(
      (item: { BASECOLOURNAME: string }) => filterState.color.includes(item.BASECOLOURNAME)
    );
  }
  if (filterState.declawed === 'Yes') {
    // DECLAWED is true
    felines = felines.filter(
      (item: { DECLAWED: number }) => item.DECLAWED
    );
  } else if (filterState.declawed === 'No') {
    // DECLAWED is not true
    felines = felines.filter(
      (item: { DECLAWED: number }) => !item.DECLAWED
    );
  }
  if (filterState.specialneeds === 'Yes') {
    // Either HASSPECIALNEEDS is true or FLVRESULT is not negative (i.e. != 1)
    felines = felines.filter(
      (item: { HASSPECIALNEEDS: number; FLVRESULT: number }) => item.HASSPECIALNEEDS || item.FLVRESULT != 1
    );
  } else if (filterState.specialneeds === 'No') {
    // Both HASSPECIALNEEDS is false and FLVRESULT is negative (i.e. = 1)
    felines = felines.filter(
      (item: { HASSPECIALNEEDS: number; FLVRESULT: number }) => !item.HASSPECIALNEEDS && item.FLVRESULT == 1
    );
  }
  switch (filterState.sort) {
    case 'Date Posted': {
      felines.sort(function (a:any, b:any) {
        return a.DATEBROUGHTIN >= b.DATEBROUGHTIN ? -1 : 1;
      });
      break;
    }
    case 'ID': {
      felines.sort(function (a:any, b:any) {
        return a.ID < b.ID ? -1 : 1;
      });
      break;
    }
    case 'Name':
    default: {
      felines.sort(function (a:any, b:any) {
        return a.ANIMALNAME < b.ANIMALNAME ? -1 : 1;
      });
      break;
    }
  }
  
  return felines;
}