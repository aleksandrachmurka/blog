import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const WeddingDance = () => {
  const data = useStaticQuery(graphql`
    query WeddingQuery {
      weddingPic: file(absolutePath: { regex: "/wedding.jpg/" }) {
        childImageSharp {
          fluid(quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      weddingPic2: file(absolutePath: { regex: "/wedding2.jpg/" }) {
        childImageSharp {
          fluid(quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const weddingPic = data?.weddingPic?.childImageSharp?.fluid
  const weddingPic2 = data?.weddingPic2?.childImageSharp?.fluid

  return (
    <>
      <h2>Nauka tańca</h2>
      <p>
        To pakiet dla przyszłych par, które zdecydowały się swoją uroczystość
        weselną uświetnić swoim pierwszym tańcem. W skład ceny wchodzi:
      </p>
      <ul>
        <li>
          Przygotowanie choreografii do wybranej przez młodych piosenki
          dopasowując ją do umiejętności i poziomu zaawansowania pary
          (choreografie w stylu klasycznym jak np. walc lub też nowoczesne opcje
          a nawet miksy stylów).
        </li>
        <li>Nauka tej choreografii na 5 spotkaniach.</li>
        <li>
          Zadbanie o to, aby choreografia wyglądała naturalnie podczas tańca,
          para czuła się komfortowo zaś odbiorca został oczarowany.
        </li>
      </ul>
      <Image
        fluid={weddingPic}
        className="offer-image"
        alt="Newly married couple dancing on a wedding"
      />
      <p style={{ marginTop: "2%" }}>
        Ostatnie spotkanie odbywa się na sali, gdzie odbędzie się wesele, w celu
        oswojenia się przez parę z miejscem, z zastrzeżeniem że sala nie
        znajduje się dalej jak 40 km od Lubina. Przy większej ilości km
        dodatkowy zwrot na paliwo.
      </p>
      <p>
        Sala treningowa w Lubinie. Elastyczność w odbywaniu się zajęć (do
        południa, popołudniu, wieczór a nawet weekendy). Możliwość dojazdu do
        klienta jeśli posiada on miejsce do nauki o wymiarach ok 20 m kw.
      </p>
      <p>
        Gwarancja 15 letniego doświadczenia jako instruktora oraz tancerza
        nagrodzonego wieloma nagrodami w tym Mistrzostwa Świata w Dance Show.
      </p>
      <p>
        <b>Cena: 750 zł</b>
      </p>
      <Image
        fluid={weddingPic2}
        className="offer-image"
        alt="Newly married couple dancing on a wedding"
      />
    </>
  )
}

export default WeddingDance
