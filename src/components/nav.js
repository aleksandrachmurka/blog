import React from "react"
import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import Image from "gatsby-image"

const Nav = ({ location }) => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      logo: file(absolutePath: { regex: "/logo2.png/" }) {
        childImageSharp {
          fixed(width: 260, height: 160, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const logo = data?.logo?.childImageSharp?.fixed

  console.log(location)

  const offerHandler = () => {
    navigate("/offer", { state: { prevPath: location.pathname } })
  }

  return (
    <nav className="nav">
      <ul className="nav__items">
        <Link to="/">
          <Image fixed={logo} alt="logo" className="logo" />
        </Link>
        <li>
          <a onClick={offerHandler}>Oferta</a>
        </li>
        <li>
          <Link to="/about">O mnie</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
