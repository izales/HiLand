import React, { ReactNode } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"



const AddTree = (): JSX.Element => {
  return (
      
  <div className="addTree-main-div">  


<button className="snipcart-add-item"
  data-item-id={5}
  
  data-item-name={"kaufetree"}
  data-item-url="/"
  data-item-price={100}
>
  hey du
</button>


  </div>
  )
}

export default AddTree