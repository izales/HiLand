import React, { ReactNode } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import "./Clouds.scss"


const Clouds = (): JSX.Element => {
  return (
    <div>

      <StaticImage
        src="../../images/wolke.png"
        width={200}
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"

        className=" z-10 animation"
      />

      <StaticImage
        src="../../images/wolke.png"
        width={200}
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"

        className=" z-10 animation-slow"
      />

      <StaticImage
        src="../../images/wolke.png"
        width={200}
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"

        className=" z-10 animation"
      />
      <StaticImage
        src="../../images/wolke-klein.png"
        width={70}
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"

        className=" z-10 animation-slow m-m"
      />
      <StaticImage
        src="../../images/wolke-klein.png"
        width={70}
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"

        className=" z-10 animation-slow-2 m-s"
      />
      <StaticImage
        src="../../images/Bird1.png"
        width={0}
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"

        className=" z-10 animation"
      />
      <StaticImage
        src="../../images/Bird3.png"
        width={0}
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"

        className=" z-10 animation-slow-2 m-xl"
      />

      <StaticImage
        src="../../images/vogel.png"
        width={70}
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"

        className=" z-10 animation-slow m-l"
      />




    </div>
  )
}

export default Clouds