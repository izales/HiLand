import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {Helmet} from "react-helmet";
import Layout from "../components/layout/Layout"
import Seo from "../components/seo/Seo"
import Clouds from "@components/clouds/Clouds"
import Landscape from "@components/landscape/Landscape"
import AddTree from "@components/addTree/AddTree"
import Footer from "@components/footer/Footer"

interface ISiteDataProps {
  frontmatter: IFrontmatterProps
  html: string
}

interface IFrontmatterProps {
  seoTitle: string
  seoDescription: string
}

interface IDataProps {
  siteData: ISiteDataProps
}

export interface IIndexProps {
  data: IDataProps
}

const IndexPage = ({
  data: {
    siteData: {
      frontmatter: { seoDescription, seoTitle },
      html,
    },
  },
}: IIndexProps): JSX.Element => {
  return (
    
    <><Helmet>
     <link rel="preconnect" href="https://app.snipcart.com" />
<link rel="preconnect" href="https://cdn.snipcart.com" />
<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
    </Helmet>
      <Layout>
        <Clouds></Clouds>
        <AddTree cartItems="" lastItem=""></AddTree>
        <Landscape></Landscape>
        <p>

        </p>

      </Layout></>
  )
}

export default IndexPage

export const query = graphql`
  query imprintPage {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_index" } }) {
      frontmatter {
        seoTitle
        seoDescription
      }
      html
    }
  }
`
