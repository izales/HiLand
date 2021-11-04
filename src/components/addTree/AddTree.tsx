import React, { ReactNode } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"



const AddTree = (): JSX.Element => {
  return (
      
  <div className="addTree-main-div">  

<section>
  <h2>Silver Stacking Ring</h2>
  <p>$19.99</p>
  <p>Wear one or seventeen! These rings are fun to mix and match.</p>
  <button
    className="snipcart-add-item"
    data-item-id="silver-stacking-ring"
    data-item-price="19.99"
    data-item-url="/"
    data-item-name="Silver Stacking Ring"
  >
    Add to cart
  </button>
</section>


  </div>
  )
}

export default AddTree