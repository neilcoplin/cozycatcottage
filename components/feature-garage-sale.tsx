import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import styles from '@/styles/Feature.module.css'

export default function FeatureGarageSale() {
  
  return (
    <Container className={styles.GarageSale} fluid="true">
      <Container fluid="md">
      <Row xs={1} md={2}>
        <Col className={styles.center} xs={12} md={8}>
          <h2>Cozy Cat Cottage Garage Sale</h2>
          <p><strong>When: Saturday, June 3, 2023 from 9:00am to 3:00pm</strong></p>
          <p>The garage sale will take place behind the adoption center in the parking lot. This is event is successful thanks to the many items donated by Cozy Cat supporters. We can sell a wide variety of items including collectibles, antiques, home d&eacute;cor, housewares, electronics, DVD's, games, toys, tools, lawn equipment, etc. (no clothing or extra-large furniture, please). We ask that items be in working order and in good condition.</p>
        </Col>
        <Col xs={12} md={4}>
          {/*<Image fluid src="/img/feature-garage-sale.png" alt="Brown cat on a sidewalk with a sign attached reading: Garage sale! Follow me!" />*/}
          <h3>We need your stuff!</h3>
          <p>Drop items off at Cozy Cat Cottage on:</p>
          <ul>
            <li>Wednesday, May 24</li>
            <li>Saturday, May 27</li>
            <li>Sunday, May 28</li>
            <li>Wednesday, May 31</li>
          </ul>
        </Col>
      </Row>
      </Container>
    </Container>
  )
}