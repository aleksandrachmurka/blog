import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Main = ({ location }) => {
  const siteTitle = `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Strona główna" />
      <div className="main-content">
        <p>Witam Cię na mojej stronie internetowej!</p>
        <p>
          Moją misją jest wzbudzenie świadomości w ludziach na temat ich zdrowia
          i dobrego samopoczucia.
        </p>
        <p>
          Chciałabym, aby każdy czuł się dobrze w swoim ciele bez względu na
          wiek, wagę czy płeć.
        </p>
        <p>
          Mamy wpływ na jakość naszego życia i to przekazuję ludziom. Zaś moje
          motto życiowe to{" "}
          <span style={{ fontWeight: "bold", color: "orange" }}>
            żyj zdrowo, aby żyć kolorowo
          </span>
          .
        </p>
        <p>
          Więcej informacji o mnie znajdziesz
          <Link to="/about" className="main-content__link">
            {" "}
            tutaj
          </Link>
          .
        </p>
        <p>
          Jeśli chcesz się dowiedzieć jak mogę pomóc Ci w osiągnięciu Twoich
          celów, koniecznie zapoznaj się z
          <Link to="/offer" className="main-content__link">
            {" "}
            ofertą
          </Link>
          .
        </p>
        <p>
          Na
          <Link to="/blog" className="main-content__link">
            {" "}
            blogu{" "}
          </Link>
          znajdziesz moje wpisy. Zapraszam do kontaktu.
        </p>
      </div>
    </Layout>
  )
}

export default Main
