import AdoptionCard from './adoptioncard'
import AdoptionGridFilters from './adoptiongridfilters'
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
  ageOptions:Array<string>;
  colorOptions:Array<string>;
  sexOptions:Array<string>;
}) {
  return (
    <>
      <Row>
        <AdoptionGridFilters
          allFelines={props.allFelines}
          setFelines={props.setFelines}
          filterFelines={props.filterFelines}
          filterState={props.filterState}
          setFilterState={props.setFilterState}
          ageOptions={props.ageOptions}
          colorOptions={props.colorOptions}
          sexOptions={props.sexOptions}
        />
      </Row>
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