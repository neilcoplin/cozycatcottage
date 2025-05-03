import React from 'react';
import styles from '@/styles/Header.module.css'
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" className={styles.header}>
      <Navbar.Brand href="/"><Image src="/img/ccc-logo.png" alt="Cozy Cat Cottage Adoption Center" width="250" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navToggler} />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown title="Adopt">
            <NavDropdown.Item href="/adopt">Adopt a Cat</NavDropdown.Item>
            <NavDropdown.Item href="/adoption-process">Adoption Process</NavDropdown.Item>
            <NavDropdown.Item href="/happy-tails">Happy Tails</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          <NavDropdown title="Ways to Give">
            <NavDropdown.Item href="/donate">Donate</NavDropdown.Item>
            <NavDropdown.Item href="/our-wish-list">Our Wish List</NavDropdown.Item>
            <NavDropdown.Item href="/kroger-community-rewards">Kroger Community Rewards</NavDropdown.Item>
            <NavDropdown.Item href="/memorial-tribute">Memorial or Honor Tribute</NavDropdown.Item>
            <NavDropdown.Item href="/coins-for-cats">Coins for Cats</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Get Involved">
            <NavDropdown.Item href="/volunteer">Volunteer</NavDropdown.Item>
            <NavDropdown.Item href="/foster">Foster</NavDropdown.Item>
            <NavDropdown.Item href="/book-buddies">Book Buddies</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Events">
            <NavDropdown.Item href="/holiday-marketplace">Holiday Marketplace Sale</NavDropdown.Item>
            <NavDropdown.Item href="/putting-for-paws">Putting for Paws</NavDropdown.Item>
            <NavDropdown.Item href="/fundraisers">Fundraisers</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="About">
            <NavDropdown.Item href="/our-story">Our Story</NavDropdown.Item>
            <NavDropdown.Item href="/meet-the-team">Meet the Team</NavDropdown.Item>
            <NavDropdown.Item href="/pet-education">Pet Education</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="https://www.paypal.com/us/fundraiser/charity/1803839" className="btn btn-secondary" target="_blank" rel="noreferrer">Donate</Nav.Link>
          {/*<Nav.Link href="/search">Search</Nav.Link>*/}
        </Navbar.Collapse>
      </Navbar>
    );
}