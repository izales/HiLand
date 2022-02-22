import React, { ReactNode, useState } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import "./Landscape.d.ts"
//import Img from "gatsby-image"
import "./Landscape.scss"
import Land from "../../assets/wiese.svg"
import Baum1 from "../../images/Baum_1.png"
import Baum2 from "../../images/Baum_2.png"
import { useSpring, animated } from 'react-spring'
import { graphql } from "gatsby"
import Image from "../helpers/Image"

const Landscape = ({ data }: { data: any }): JSX.Element => {


  const props = useSpring({ to: { y: 100 }, from: { y: 0 }, delay: 400 })

  const max = 3;
  const min = 1;
  const ziffer = Math.floor(Math.random() * (max - min + 1)) + min;

  const [randomNumber, setRandomNumber] = useState(0);

  const images = ["Baum_1.png", "Baum_2.png", "Baum_3.png"];
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setRandomNumber(randomNumber)
  }

  var randomBaum = images[Math.floor(Math.random() * images.length)];

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

