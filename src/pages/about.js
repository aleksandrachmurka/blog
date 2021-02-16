import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Oferta" />
      <div>
        <p>
          Jestem dietetykiem, medycznym trenerem personalnym, instruktorem
          tańca, choreografem, szkoleniowcem.
        </p>
        <p>
          W obecnej pracy ukierunkowanej na zdrowie, doskonale pomaga mi moje
          wykształcenie co wyróżnia mnie wśród konkurencji. Wielu z moich
          kolegów są albo dietetykami, albo trenerami personalnymi, gdzie w
          pierwszym przypadku nie mają zgłębionej wiedzy na temat anatomii i
          fizjologii ruchu człowieka , zaś w drugim przypadku wiedzę na temat
          odżywiania mają dużo mniejszą i często w jednostkach chorobowych
          takich jak: problemy z tarczycą, insuliooporność, cukrzyca , z
          problemami z jelitami itp., nie radzą sobie dobrze z ustaleniem planu
          żywienia dla swojego podopiecznego.
        </p>
        <p>
          Całe życie pasjonował mnie ruch jako profilaktyka zapobiegająca wielu
          schorzeniom cywilizacyjnym takim jak: otyłość, problemy z kręgosłupem,
          wady postawy, wydolność organizmu oraz inne choroby układu krążenia i
          nie tylko. Ruch ma również wpływ na nasz stan psychiczny. Okazuje się,
          że odpowiednia dawka ruchu ma również niewiarygodnie pozytywny wpływ
          na stany depresyjne i potrafi w dużej mierze je niwelować zaś
          wydzielające się endorfiny pozwolą spojrzeć na życie przychylnym
          okiem.
        </p>
        <p>
          Posiadam pełen kwalifikacje do prowadzenia zajęć ruchowych oraz
          poradni odżywiania.
        </p>
        <p>
          {" "}
          Swoje kwalifikacje stale podnoszę uczestnicząc w wielu konwencjach
          szkoleniowych.
        </p>
        <p>
          Posiadam akredytację REPs, co oznacza, że ukończone przeze mnie kursy
          oraz zdobyte uprawnienia spełniają światowe wymogi a uzyskane dyplomy
          są honorowane są na całym świecie.
        </p>
        <p>
          W swojej wieloletniej pracy z ludźmi wykorzystuję poza zdobytą wiedzą
          również własne doświadczenia oraz turbulencje życiowe, z którymi sobie
          poradziłam do zwizualizowania moim klientom, że dzięki uporowi,
          właściwej ścieżce działania, pozytywnemu nastawieniu, determinacji
          możemy poprawić swój stan fizyczny, psychiczny, emocjonalny, zdrowotny
          a czasem zmienić całkowicie swoje życie na pełne uśmiechu, miłości i
          szczęścia.
        </p>
        <p>
          Jestem kobietą z krwi i kości, dojrzałą z doświadczeniem stąd
          współpraca ze mną to nie tylko suche plany żywieniowe czy treningowe,
          to pełna współpraca również na polu psychologicznym.
        </p>
      </div>
    </Layout>
  )
}

export default About
