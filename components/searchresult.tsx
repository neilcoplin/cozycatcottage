import React from 'react';
import Link from 'next/link'
import { Container } from "react-bootstrap";

import styles from '@/styles/Search.module.css'

export default function SearchResult(props:any) {
  return (
    <Container className={styles.result}>
      <h3><Link href={props.href}>{props.title}</Link></h3>
      <p>{props.description}</p>
    </Container>
  );
}