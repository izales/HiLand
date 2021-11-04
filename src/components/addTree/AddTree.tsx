import React, { ReactNode } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import "./AddTree.scss"


interface IState {
  cartItems: any,
  lastItem: any
  


}
const AddTree = ({ cartItems, lastItem }: IState) => {

  cartItems = "";
  lastItem = "";



  return (
      
  <div className="addTree-main-div">  

  <button className="snipcart-remove-item">  remove tree</button>

<section className=" flex justify-center ">
  
<button className=" tree-button text-center snipcart-checkout ">cart</button>


</section>

<button className="snipcart-add-item "  
data-item-id="tree"
  data-item-price="49.99"
  data-item-url="/paintings/starry-night"
  data-item-description="new tree safe the world"
  data-item-image="../../images/Baum_1.png"
  data-item-name="Baum">add Tree</button>

  </div>
  )
}

export default AddTree