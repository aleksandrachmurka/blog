import React, { useEffect, useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Offer = ({ location }) => {
  const storeDiv = useRef(null)
  const scriptRef = useRef(null)

  // https://www.reddit.com/r/reactjs/comments/fwaam2/running_scripts_in_jsx_and_functions_defined_by/

  window._xnext_initialization_scripts = [
    {
      widgetType: "ProductBrowser",
      id: "my-store-44361007",
      arg: ["id=productBrowser", "views=grid(20,3)"],
    },
  ]

  let script = document.createElement("script")
  script.charset = "utf-8"
  script.type = "text/javascript"
  script.src = "https://app.ecwid.com/script.js?44361007&data_platform=code"
  script.defer = true
  script.ref = scriptRef

  useEffect(() => {
    if (!scriptRef.current) {
      storeDiv.current.appendChild(script)
    }
  })

  return (
    <Layout location={location}>
      <SEO title="Oferta" />
      <div id="my-store-44361007"></div>
      <div ref={storeDiv}></div>
    </Layout>
  )
}

export default Offer
