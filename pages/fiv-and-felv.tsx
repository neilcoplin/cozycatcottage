import Head from 'next/head'
import Link from 'next/link'
import { Container, Stack } from "react-bootstrap";

export default function FivAndFelv(props:any) {
  return (
    <>
      <Head>
        <title>{"FIV and FeLV | " + props.siteTitle}</title>
        <meta name="description" content="Cozy cat cottage adoption center" />
      </Head>
      <main>
        <Stack gap={3} id="fiv-and-felv" className="top-padding">
          <Container fluid="lg" className="center">
            <h1>What are Feline Immunodeficiency Virus (FIV) and Feline Leukemia Virus (FeLV)?</h1>
          </Container>

          <Container fluid="lg">
            <h2>Feline Immunodeficiency Virus (FIV)</h2>
            <p>In infected cats, feline immunodeficiency virus (FIV) attacks the immune system, leaving the cat vulnerable to many other infections. Although cats infected with FIV may appear normal for years, they eventually suffer from this immune deficiency, which allows normally harmless bacteria, viruses, protozoa, and fungi found in the everyday environment to potentially cause severe illnesses.</p>

            <p>FIV-infected cats are found worldwide, but the prevalence of infection varies greatly. In the United States, approximately 1.5 to 3 percent of healthy cats are infected with FIV. Rates are significantly higher (15 percent or more) in cats that are sick or at high risk of infection. Because biting is the most efficient means of viral transmission, free-roaming, aggressive male cats are the most frequently infected, while cats housed exclusively indoors are much less likely to be infected.</p>

            <p>The primary mode of transmission for FIV is through bite wounds. Casual, non-aggressive contact does not appear to be an efficient route of spreading the virus. As a result, cats in households with stable social structures where housemates do not fight are at little risk of acquiring FIV infections. On rare occasions, infection is transmitted from an infected mother cat to her kittens, usually during passage through the birth canal or when the newborn kittens ingest infected milk. Sexual contact is not a major means of spreading FIV.</p>

            <p>There is currently no definitive cure for FIV. It is important to realize, however, that while it is impossible to predict the survival of a given cat infected with FIV, cats infected with FIV can live ostensibly normal lives for years if managed appropriately.</p>

            <p><Link href="/happy-tails">Read about Francis, Bosco, and Toby</Link> who are living long, happy, healthy lives with FIV.</p>

            <h2>Feline Leukemia Virus (FeLV)</h2>
            <p>Feline leukemia virus (FeLV) is one of the most common infectious diseases in cats, affecting between 2 and 3% of all cats in the United States. Infection rates are significantly higher (up to 30%) in cats that are ill or otherwise at high risk (see below). Fortunately, the prevalence of FeLV in cats has decreased significantly in the past 25 years since the development of an effective vaccine and accurate testing procedures.</p>

            <p>Cats persistently infected with FeLV serve as sources of infection for other cats. The virus is shed in saliva, nasal secretions, urine, feces, and milk of infected cats. Cat-to-cat transfer of the virus may occur from a bite wound, during mutual grooming, and (rarely) through the shared use of litter boxes and feeding dishes. Transmission can also take place from an infected mother cat to her kittens, either before they are born or while they are nursing. FeLV does not survive long outside a cat&apos;s body - probably less than a few hours under normal household conditions.</p>

            <p>Cats at greatest risk of FeLV infection are those that may be exposed to infected cats, either via prolonged close contact or through bite wounds. Such cats include cats living with infected cats or with cats of unknown infection status, cats allowed outdoors unsupervised where they may be bitten by an infected cat, and kittens born to infected mothers.</p>

            <p>Kittens are much more susceptible to FeLV infection than are adult cats, and therefore are at the greatest risk of infection if exposed. However, even healthy adult cats can become infected if sufficiently exposed.</p>

            <p>Although a diagnosis of FeLV can be emotionally devastating, it is important to realize that cats with FeLV can live normal lives for prolonged periods of time. The median survival time for cats after FeLV is diagnosed is 2.5 years. Once a cat has been diagnosed with FeLV, careful monitoring of weight, appetite, activity level, elimination habits, an appearance of the mouth and eyes, and behavior is an important part of managing this disease. Any signs of abnormality in any of these areas should prompt immediate consultation with a veterinarian.</p>

            <p><Link href="/happy-tails">Read about Giselle</Link>, an FeLV cat who has outlived her prognosis.</p>

            <p>Source: <a href="http://www2.vet.cornell.edu/" target="_blank" rel="noreferrer">www2.vet.cornell.edu/</a></p>
          </Container>
        </Stack>
      </main>
    </>
  )
}