import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Image(props: { url: string; altText: string; title: string; }) {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Baum_2.png" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

    const { url, altText, title } = props;
    const styles = {
        width: '50px',
        height: '100px',

    }

    return (
        <Img
            style={styles}
            fixed={data.placeholderImage.childImageSharp.fixed}
            alt={altText}
            title={title} />
    )
}

export default Image