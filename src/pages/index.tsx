import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet";
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


    <Layout>
      <Clouds />
      <AddTree />
      <Landscape />
      <p>

      </p>

    </Layout>

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
