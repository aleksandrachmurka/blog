import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Grant = () => {
  const data = useStaticQuery(graphql`
    query GrantInfoQuery {
      grantInfo: file(absolutePath: { regex: "/pfr.jpg/" }) {
        childImageSharp {
          fixed(width: 260, height: 200, quality: 85) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const grantInfo = data?.grantInfo?.childImageSharp?.fixed

  return (
    <div className="partners">
      <h3>Informacja o subwencji</h3>
      <div className="grant-info">
        <Image fixed={grantInfo} alt="PFR information  about financial grant" />
      </div>
    </div>
  )
}

export default Grant
