import React, { ReactNode } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import "./Landscape.d.ts"
//import Img from "gatsby-image"
import "./Landscape.scss"
import Land from "../../assets/wiese.svg"
import Baum1 from "../../images/Baum_1.png"
import Baum2 from "../../images/Baum_2.png"
import { useSpring, animated } from 'react-spring'
const Landscape = (): JSX.Element => {


  const props = useSpring({ to: { y: 100 }, from: { y: 0 }, delay: 400 })

  const max = 3;
  const min = 1;
  const ziffer = Math.floor(Math.random() * (max - min + 1)) + min;


  const images = ["../../images/Baum_1.png", "../../images/Baum_2.png", "../../images/Baum_3.png"];
  const RandomImage = () => {

    const path2 = `../../images/Baum_${ziffer}.png`
    console.log(path2)
    return <StaticImage
      src={`../../images/Baum_${ziffer}.png`}
      width={50}
      quality={95}

      alt="plus"

      className="ml-32 "
    ></StaticImage>;
  }



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

      <animated.div className="z-20 relative" style={props}><RandomImage></RandomImage></animated.div>
      <animated.div className="z-20 relative" style={props}><StaticImage
        src="../../images/Baum_1.png"
        width={50}
        quality={95}

        alt="plus"

        className="ml-32 "
      ></StaticImage> </animated.div>
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