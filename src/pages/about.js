import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Qualifications from "../components/qualifications"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ location }) => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      whitePic: file(absolutePath: { regex: "/white.jpg/" }) {
        childImageSharp {
          fluid(quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gymPic: file(absolutePath: { regex: "/gym.jpg/" }) {
        childImageSharp {
          fluid(quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gymPic2: file(absolutePath: { regex: "/gym2.jpg/" }) {
        childImageSharp {
          fluid(quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const whitePic = data?.whitePic?.childImageSharp?.fluid
  const gymPic = data?.gymPic?.childImageSharp?.fluid
  const gymPic2 = data?.gymPic2?.childImageSharp?.fluid

  return (
    <Layout location={location}>
      <SEO title="O mnie" />
      <div className="about_row">
        <Image
          fluid={whitePic}
          className="about-image"
          alt="Woman in white medical uniform sitting behing the desk"
        />
        <div className="about-text">
          <p style={{ fontFamily: "Caveat", fontSize: "1.5rem" }}>
            Jestem dietetykiem, medycznym trenerem personalnym, instruktorem
            tańca, choreografem, szkoleniowcem.
          </p>
          <p>
            W obecnej pracy ukierunkowanej na zdrowie, doskonale pomaga mi moje
            wykształcenie co wyróżnia mnie wśród konkurencji. Wielu z moich
            kolegów są albo dietetykami, albo trenerami personalnymi, gdzie w
            pierwszym przypadku nie mają zgłębionej wiedzy na temat anatomii i
            fizjologii ruchu człowieka, zaś w drugim przypadku wiedzę na temat
            odżywiania mają dużo mniejszą i często w jednostkach chorobowych
            takich jak: problemy z tarczycą, insulioopornością, cukrzycą, z
            problemami z jelitami itp., nie radzą sobie dobrze z ustaleniem
            planu żywienia dla swojego podopiecznego.
          </p>
        </div>
      </div>
      <div className="about_row">
        <div className="about-text">
          <p>
            Całe życie pasjonował mnie ruch jako profilaktyka zapobiegająca
            wielu schorzeniom cywilizacyjnym takim jak: otyłość, problemy z
            kręgosłupem, wady postawy, wydolność organizmu oraz inne choroby
            układu krążenia i nie tylko. Ruch ma również wpływ na nasz stan
            psychiczny. Okazuje się, że odpowiednia dawka ruchu ma również
            niewiarygodnie pozytywny wpływ na stany depresyjne i potrafi w dużej
            mierze je niwelować zaś wydzielające się endorfiny pozwolą spojrzeć
            na życie przychylnym okiem.
          </p>
          <p>
            Posiadam pełne kwalifikacje do prowadzenia zajęć ruchowych oraz
            poradni odżywiania. Swoje kwalifikacje stale podnoszę uczestnicząc w
            wielu konwencjach szkoleniowych.
          </p>
          <p>
            Posiadam akredytację REPs, co oznacza, że ukończone przeze mnie
            kursy oraz zdobyte uprawnienia spełniają światowe wymogi a uzyskane
            dyplomy są honorowane są na całym świecie.
          </p>
        </div>
        <Image
          fluid={gymPic2}
          className="about-image"
          alt="Woman in black and neon green training suit at the gym leaning against weights"
        />
      </div>
      <div className="about_row">
        <Image
          fluid={gymPic}
          className="about-image"
          alt="Woman in white top and purple leggings exercising on treadmill"
        />
        <div className="about-text">
          <p>
            W swojej wieloletniej pracy z ludźmi wykorzystuję poza zdobytą
            wiedzą również własne doświadczenia oraz turbulencje życiowe, z
            którymi sobie poradziłam do zwizualizowania moim klientom, że dzięki
            uporowi, właściwej ścieżce działania, pozytywnemu nastawieniu,
            determinacji możemy poprawić swój stan fizyczny, psychiczny,
            emocjonalny, zdrowotny a czasem zmienić całkowicie swoje życie na
            pełne uśmiechu, miłości i szczęścia.
          </p>
          <p>
            Jestem kobietą z krwi i kości, dojrzałą z doświadczeniem stąd
            współpraca ze mną to nie tylko suche plany żywieniowe czy
            treningowe, to pełna współpraca również na polu psychologicznym.
          </p>
        </div>
      </div>
      <Qualifications />
    </Layout>
  )
}

export default About
