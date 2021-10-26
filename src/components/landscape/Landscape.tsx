import React, { ReactNode } from "react"
import { StaticImage } from "gatsby-plugin-image"
//import Img from "gatsby-image"
import "./Landscape.scss"
import Land from "../../assets/wiese.svg"

const Landscape = (): JSX.Element => {
  return (
       /**   
  <div className="absolute bottom-0 w-full ">  
      <StaticImage
        src="../../images/blumen.png"
        width={1800}  
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"
        
        className=" z-30  relative wiese "
      />
 

    <StaticImage
        src="../../images/wiese-hell.png"
        width={1800}  
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"
        
        className=" z-10  relative top-72 "
      />
  
      <StaticImage
        src="../../images/wiese-dunkel-ps.png"
        width={1800}  
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"
        
        className="z-10 "
      /> 

 

     
  </div>*/
  <div className="absolute bottom-0 w-full ">  
  
  <StaticImage
        src="../../images/landscape.png"
        width={2400}  
        quality={95}
        formats={["auto", "png"]}
        alt="wolke"
        
        className="z-10 "
      /> 
  </div>
  )
}

export default Landscape