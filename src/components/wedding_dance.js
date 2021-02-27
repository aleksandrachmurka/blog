import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WeddingDance = ({ location }) => {
  const data = useStaticQuery(graphql`
    query WeddingQuery {
      weddingPic: file(absolutePath: { regex: "/wedding.jpg/" }) {
        childImageSharp {
          fixed(width: 560, height: 380, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      weddingPic2: file(absolutePath: { regex: "/wedding2.jpg/" }) {
        childImageSharp {
          fixed(width: 560, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const weddingPic = data?.weddingPic?.childImageSharp?.fixed
  const weddingPic2 = data?.weddingPic2?.childImageSharp?.fixed

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
          dopasowując ją do umiejętności i poziomu zaawansowania pary (
          choreografie w stylu klasycznym jak np. walc lub też nowoczesne opcje
          a nawet miksy stylów).
        </li>
        <li>Nauka tej choreografii na 5 spotkaniach.</li>
        <li>
          Zadbanie o to, aby choreografia wyglądała naturalnie podczas tańca,
          para czuła się komfortowo zaś odbiorca został oczarowany.
        </li>
      </ul>
      <Image fixed={weddingPic} className="offer-image" />
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
      <Image fixed={weddingPic2} className="offer-image" />
    </>
  )
}

export default WeddingDance
