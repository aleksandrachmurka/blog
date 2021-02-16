// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

// const ecwidElement = document.getElementById("ecwid-store")

// const addScripts = url => {
//   const script1 = document.createElement("script")
//   script1.src =
//     "https://app.ecwid.com/script.js?44361007&data_platform=code&data_date=2021-02-15"
//   // script.charset="utf-8"
//   script1.type = "text/javascript"
//   script1["data-cfasync"] = "false"

//   const script2 = document.createElement("script")
//   const content = `{" "}
//   xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60)
//   table(60)","categoryView=grid","searchView=list","id=my-store-44361007");`
//   script2.append(content)

//   document.body.appendChild(script1)
//   document.body.appendChild(script2)
// }

// const addScript2 = () => {
//   const script = document.createElement("script")
//   const content = `{" "}
//   xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60)
//   table(60)","categoryView=grid","searchView=list","id=my-store-44361007");`
//   script.append(content)
//   document.body.appendChild(script)
// }

// export const onClientEntry = () => {
//   window.onload = () => {
//     addScripts()
//   }
// }
