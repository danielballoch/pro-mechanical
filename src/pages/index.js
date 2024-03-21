import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"


const IndexPage = () => {
  return (
    <Layout>
    <main>
      <Hero/>
    </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
