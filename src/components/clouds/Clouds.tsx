import React, { ReactNode } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import "./Clouds.scss"


const Clouds = (): JSX.Element => {
  return (
  <div className="  ">  
  
  <StaticImage
        src="../images/wolke.png"
        width={200}
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"
        
        className="m-s z-10 animation"
      />
 
     
  </div>
  )
}

export default Clouds