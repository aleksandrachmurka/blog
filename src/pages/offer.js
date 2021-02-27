import React, { useEffect, useRef, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WeddingDance from "../components/wedding_dance"
import DanceShows from "../components/dance_shows"
import Trainings from "../components/trainings"

function usePrev(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

let getState = () => "_" + Math.random().toString(36).substr(2, 9)

const Offer = ({ location, path }) => {
  const [guid, setGuid] = useState(getState())
  const storeDiv = useRef(null)
  const prevGuid = usePrev(guid)
  // const scriptRef = useRef(null)
  useEffect(() => {
    window.ecwid_script_defer = true
    window.ecwid_dynamic_widgets = true

    window._xnext_initialization_scripts = [
      {
        widgetType: "ProductBrowser",
        id: guid,
        arg: ["id=productBrowser"],
      },
    ]

    if (!document.getElementById("ecwid-script")) {
      var script = document.createElement("script")
      script.charset = "utf-8"
      script.type = "text/javascript"
      script.src = "https://app.ecwid.com/script.js?49080464&data_platform=code"
      script.id = "ecwid-script"
      script.onload = function () {
        window.Ecwid.init()
      }

      // document.body.appendChild(script)
      storeDiv.current.appendChild(script)
    } else {
      window.ecwid_onBodyDone()
    }

    if (document.getElementsByClassName("option-surcharge__value").length > 0) {
      console.log(document.getElementsByClassName("option-surcharge__value"))
      const element = document.getElementsByClassName("option-surcharge__value")
      const text = element.textContent
      const updatedText = text.substring(1)
      element.textContent = updatedText
    }
    // if (prevLocation !== location.pathname) {
    // console.log(location.pathname)
    // window.location.reload()
    // let script = document.createElement("script")
    // script.charset = "utf-8"
    // script.type = "text/javascript"
    // script.src = "https://app.ecwid.com/script.js?49080464&data_platform=code"
    // script.defer = true
    // // script.ref = scriptRef
    // // if (!scriptRef.current) {
    // window.ecwid_script_defer = true
    // window.ecwid_dynamic_widgets = true
    // window.ec = window.ec || Object()
    // window.ec.storefront = window.ec.storefront || Object()
    // window.ec.enable_catalog_on_one_page = true
    // window._xnext_initialization_scripts = [
    //   {
    //     widgetType: "ProductBrowser",
    //     id: "my-store-49080464",
    //     arg: ["id=productBrowser", "views=grid(20,3)"],
    //   },
    // ]
    // storeDiv.current.appendChild(script)
    // }
  }, [guid])

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
      <div id={guid} ref={storeDiv}></div>
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
