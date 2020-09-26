import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "OhMySMTP Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
