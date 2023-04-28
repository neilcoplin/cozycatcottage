import React, { BaseSyntheticEvent } from 'react';
import { Form, InputGroup, Stack } from "react-bootstrap";
import styles from '@/styles/Home.module.css'

import { AdoptionListControls } from '@/types/adoptionlistcontrols'
import { ShelterManagerAnimal } from '@/types/sheltermanageranimal'

export default function AdoptionGridFilters(props:{
    allFelines:ShelterManagerAnimal[];
    setFelines:any;
    filterFelines:any;
    filterState:AdoptionListControls;
    setFilterState:any;
    ageOptions:Array<string>;
    colorOptions:Array<string>;
    sexOptions:Array<string>;
}) {
  function handleFilterChange (filterState:AdoptionListControls) {
    props.setFilterState(filterState);
    const visibleFelines = props.filterFelines(
        props.allFelines.slice(),
        filterState
    )
    props.setFelines(visibleFelines);
  }

  return (
    <Form className={styles.filterForm}>
      <Stack gap={1} direction='vertical'>
        <h3>Sort and Filter</h3>
        <InputGroup>
          <InputGroup.Text>Sort order</InputGroup.Text>
          <Form.Select 
              aria-label="Sort order"
              id='sort'
              name="sort"
              onChange={function (event:BaseSyntheticEvent) {
                handleFilterChange({
                    ...props.filterState,
                    sort: event.target.value
                });
              }}
          >
            <option value='Name'>Name</option>
            <option value='Date Posted'>Date Posted</option>
          </Form.Select>
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Sex</InputGroup.Text>
          <Form.Select 
              aria-label="Filter by sex"
              id='sex'
              name="sex"
              onChange={function (event:BaseSyntheticEvent) {
                handleFilterChange({
                    ...props.filterState,
                    sex: event.target.value
                });
              }}
          >
            <option value='All'>All</option>
            {props.sexOptions.map((sex:any) => 
              <option key={"sex-"+sex} value={sex}>{sex}</option>
            )}
          </Form.Select>
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Age</InputGroup.Text>
          <Form.Select 
              aria-label="Filter by age"
              id='age'
              name="age"
              onChange={function (event:BaseSyntheticEvent) {
                handleFilterChange({
                    ...props.filterState,
                    age: event.target.value
                });
              }}
          >
            <option value='All'>All</option>
            {props.ageOptions.map((age:any) => 
              <option key={"age-"+age} value={age}>{age}</option>
            )}
          </Form.Select>
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Declawed</InputGroup.Text>
          <Form.Select 
              aria-label="Filter by declawed"
              id='age'
              name="declawed"
              onChange={function (event:BaseSyntheticEvent) {
                handleFilterChange({
                    ...props.filterState,
                    declawed: event.target.value
                });
              }}
          >
            <option value='Both'>Both</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </Form.Select>
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Special Needs</InputGroup.Text>
          <Form.Select 
              aria-label="Filter by special needs"
              id='age'
              name="specialneeds"
              onChange={function (event:BaseSyntheticEvent) {
                handleFilterChange({
                    ...props.filterState,
                    specialneeds: event.target.value
                });
              }}
          >
            <option value='Both'>Both</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </Form.Select>
        </InputGroup>
        {/*<InputGroup>
          <InputGroup.Text>Color</InputGroup.Text>
          <Form.Select 
              aria-label="Filter by color"
              id='color'
              name="color"
              onChange={function (event:BaseSyntheticEvent) {
                handleFilterChange({
                    ...props.filterState,
                    color: event.target.value
                });
              }}
          >
            <option value='Any'>Any</option>
            {props.colorOptions.map((color:any) => 
              <option key={"color-"+color} value={color}>{color}</option>
            )}
          </Form.Select>
        </InputGroup>*/}
      </Stack>
    </Form>
  );
}