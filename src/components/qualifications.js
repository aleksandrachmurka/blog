import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Qualifications = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "qualifications" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 260, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="qualifications">
        <h3>Moje uprawnienia</h3>
        <div className="qualifications-gallery">
          {data.allFile.edges.map(edge => (
            <div>
              <Image
                fixed={edge.node.childImageSharp.fixed}
                key={edge.node.name}
                alt="Diploma, certification"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Qualifications
