import AdoptionCard from './adoptioncard'
import { Row } from 'react-bootstrap'
import { AdoptionListControls } from '@/types/adoptionlistcontrols'
import { ShelterManagerAnimal } from '@/types/sheltermanageranimal'

export default function AdoptionGrid(props:{
  allFelines:ShelterManagerAnimal[];
  felines:ShelterManagerAnimal[];
  setFelines:any;
  filterFelines:any;
  filterState:AdoptionListControls;
  setFilterState:any;
}) {
  return (
    <>
      <h3>Available Cats</h3>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="center" id="adoption-grid">
        {props.felines.map((feline:ShelterManagerAnimal) => 
          <AdoptionCard 
            key={'smid-'+feline.ID}
            feline={feline}
          />
        )}
      </Row>
      <Row>
        <p>Displaying {props.felines.length} of {props.allFelines.length} cats.</p>
      </Row>
    </>
  )
}