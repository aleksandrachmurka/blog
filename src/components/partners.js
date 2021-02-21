import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Partners = ({ location }) => {
  const data = useStaticQuery(graphql`
    query PartnerLogosQuery {
      astone: file(absolutePath: { regex: "partner-logo/astone.jpg/" }) {
        childImageSharp {
          fixed(width: 160, height: 140, quality: 85) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      medskin: file(absolutePath: { regex: "partner-logo/medskin.png/" }) {
        childImageSharp {
          fixed(width: 160, height: 140, quality: 85) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      myover40: file(absolutePath: { regex: "partner-logo/myover40.png/" }) {
        childImageSharp {
          fixed(width: 160, height: 160, quality: 85) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      reps: file(absolutePath: { regex: "partner-logo/reps.png/" }) {
        childImageSharp {
          fixed(width: 160, height: 140, quality: 85) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const astoneLogo = data?.astone?.childImageSharp?.fixed
  const medskinLogo = data?.medskin?.childImageSharp?.fixed
  const myoverLogo = data?.myover40?.childImageSharp?.fixed
  const repsLogo = data?.reps?.childImageSharp?.fixed

  return (
    <div className="partners">
      <h3>Partnerzy</h3>
      <div className="partner-logos">
        <a href="https://hotelastone.pl" target="_blank" rel="norefferer">
          <Image fixed={astoneLogo} alt="partner logo - Astone" />
        </a>
        <a href="https://myover40.pl" target="_blank" rel="norefferer">
          <Image fixed={myoverLogo} alt="partner logo - MyOver 40" />
        </a>
        <a href="https://repspolska.pl" target="_blank" rel="norefferer">
          <Image fixed={repsLogo} alt="partner logo - Reps" />
        </a>
        <a href="http://mediskin.com.pl" target="_blank" rel="norefferer">
          <Image fixed={medskinLogo} alt="partner logo - MedSkin" />
        </a>
      </div>
    </div>
  )
}

export default Partners
