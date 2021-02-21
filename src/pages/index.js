import React from "react"
import Layout from "../components/layout"
import Partners from "../components/partners"
import SEO from "../components/seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Main = ({ location }) => {
  const siteTitle = `Title`
  const data = useStaticQuery(graphql`
    query MainImageQuery {
      image: file(absolutePath: { regex: "/pineapple.jpg/" }) {
        childImageSharp {
          fixed(width: 310, height: 560, quality: 85) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const image = data?.image?.childImageSharp?.fixed

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Strona główna" />
      <div className="main-container">
        <div className="main-image">
          <Image fixed={image} alt="placeholder" />
        </div>
        <div className="main-content">
          <p>Witam Cię na mojej stronie internetowej!</p>
          <p>
            Moją misją jest wzbudzenie świadomości w ludziach na temat ich
            zdrowia i dobrego samopoczucia.
          </p>
          <p>
            Chciałabym, aby{" "}
            <span style={{ fontWeight: "bold", color: "orange" }}>
              każdy czuł się dobrze w swoim ciele
            </span>{" "}
            bez względu na wiek, wagę czy płeć.
          </p>
          <p>
            Mamy wpływ na jakość naszego życia i to przekazuję ludziom. Zaś moje
            motto życiowe to{" "}
            <span style={{ fontWeight: "bold", color: "orange" }}>
              żyj zdrowo, aby żyć kolorowo.
            </span>
          </p>
          <p>
            Więcej informacji o mnie oraz moje uprawnienia znajdziesz
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
      </div>
      <Partners />
    </Layout>
  )
}

export default Main
