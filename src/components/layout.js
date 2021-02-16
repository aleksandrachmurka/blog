import React from "react"
import Nav from "../components/nav"
import Footer from "../components/footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <Nav />
      <div className="main-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
