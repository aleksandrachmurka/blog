import React, { useEffect, useRef, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WeddingDance from "../components/wedding_dance"
import DanceShows from "../components/dance_shows"
import Trainings from "../components/trainings"

const loadEcwid = (div, guid) => {
  window.ecwid_script_defer = true
  window.ecwid_dynamic_widgets = true

  if (window.Ecwid !== undefined) {
    window.Ecwid.destroy()
  }

  window._xnext_initialization_scripts = [
    {
      widgetType: "ProductBrowser",
      id: "my-store",
      arg: ["id=productBrowser"],
    },
  ]

  if (!document.getElementById("ecwid-script")) {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://app.ecwid.com/script.js?49080464&data_platform=code"
    script.id = "ecwid-script"
    // script.onload = function () {
    //   window.Ecwid.init()
    // }

    div.current.appendChild(script)
  } else {
    window.ecwid_onBodyDone()
  }
}

// let getState = () => "_" + Math.random().toString(36).substr(2, 9)

const Offer = ({ location, path }) => {
  // const [guid, setGuid] = useState(getState())
  const storeDiv = useRef(null)

  if (location.state && location.state.prevPath !== "/offer") {
    window.location.reload()
  }
  useEffect(() => {
    loadEcwid(storeDiv)
  }, [location])

  return (
    <Layout location={location}>
      <SEO title="Oferta" />
      <div className="shop-section">
        <h2>Dietetyka i treningi - sklep</h2>
        <p>
          Poniżej przedstawiam szczegółową ofertę w zakresie dietetyki i
          treningów.
        </p>
        <p>Sklep umożliwia bezpośredni zakup wybranych usług.</p>
      </div>
      <div id="my-store" ref={storeDiv}></div>
      <div className="shop-section">
        <WeddingDance />
      </div>
      <div className="shop-section">
        <DanceShows />
      </div>
      <div className="shop-section">
        <Trainings />
      </div>
    </Layout>
  )
}

export default Offer
