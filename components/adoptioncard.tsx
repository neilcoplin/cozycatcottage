import Link from 'next/link'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import styles from '@/styles/Adopt.module.css'
import { ShelterManagerAnimal } from '@/types/sheltermanageranimal'

export default function AdoptionCard(props:{
    feline:ShelterManagerAnimal
}) {
  const baseImageUrl = "https://service.sheltermanager.com/asmservice?account=cozycatcottage&method=animal_image&animalid=";
  
  return (
    <Card className={styles.card}>
      <Link href={"/adopt?id=" + props.feline.ID}>
        <Card.Img 
          variant="top" 
          src={props.feline.WEBSITEIMAGECOUNT > 0 
            ? baseImageUrl + props.feline.ID 
            : "/img/adopt-default.jpg"
          } 
          alt={props.feline.WEBSITEIMAGECOUNT > 0 
            ? "Picture of " + props.feline.ANIMALNAME + ", a " + props.feline.BASECOLOURNAME.toLowerCase() + " " + props.feline.BREEDNAME.toLowerCase() + " " + props.feline.SEXNAME.toLowerCase() + " cat" 
            : "Picture not available"
          }
        />
      </Link>
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>
          <Link href={"/adopt?id=" + props.feline.ID}>
            {props.feline.ANIMALNAME}
          </Link>
          {props.feline.HASSPECIALNEEDS || props.feline.FLVRESULT != 1
            ? <span className={styles.heartIconAbs}>
                <FontAwesomeIcon icon={faHeart} size="xl" />
              </span>
            : <></>
          }
        </Card.Title>
        <Card.Text className='hidden'>
          {"Intake: " + new Date(props.feline.DATEBROUGHTIN).getMonth() + "/" + new Date(props.feline.DATEBROUGHTIN).getDate() + "/" + new Date(props.feline.DATEBROUGHTIN).getFullYear()}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}