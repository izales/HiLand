import React, { ReactNode } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import "./AddTree.scss"
import axios from 'axios'

interface IState {
  cartItems: any,
  lastItem: any,
  SECRET_API_KEY: any,


}
const AddTree = ({ cartItems, lastItem,SECRET_API_KEY  }: IState) => {
  const snipcart = require('snipcart-api');
snipcart.configure('ST_Y2IzNGI3NWMtMzk0Yy00NTVlLWE0MzctZGZkZjViODhjOTNlNjM3NzIwNTc0Mzk2NTgyMDQ2', SECRET_API_KEY);


  function removeTree() {
    cartItems = snipcart.api.items;

   lastItem = snipcart.api.products.getAll
   console.log(lastItem);
   console.log(snipcart.api.orders.getAll);
    //snipcart.api.cart.items.remove(lastItem.uniqueId);





}

  

  return (
    
      <div className="addTree-main-div">

        <button onClick={removeTree} className="snipcart-remove-item">  remove tree</button>

        <section className=" flex justify-center ">

          <button className=" tree-button text-center snipcart-checkout ">cart</button>


        </section>

        <button className="snipcart-add-item "
          data-item-id="tree"
          data-item-price="49.99"
          data-item-url="/"
          data-item-description="new tree safe the world"
          data-item-image="../../images/Baum_1.png"
          data-item-name="Baum">add Tree</button>

      </div>
  )
}

export default AddTree