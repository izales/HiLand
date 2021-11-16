import React, { ReactNode } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import "./AddTree.scss"
import axios from 'axios'
import {ComponentDidMount} from "react"
interface IState {
  cartItems: any,
  lastItem: any,
  SECRET_API_KEY: any,
  response: any,
  error: any

}

const AddTree = ({ cartItems, lastItem,response, error, SECRET_API_KEY  }: IState) => {



  async function removeTree() {
  const secret = "ST_Y2IzNGI3NWMtMzk0Yy00NTVlLWE0MzctZGZkZjViODhjOTNlNjM3NzIwNTc0Mzk2NTgyMDQ2"

const request = await fetch('https://app.snipcart.com/api/products', {
    headers: {
        'Authorization': `Basic ${btoa(secret)}`,
        'Accept': 'application/json'
    }
})
document.addEventListener('snipcart.ready', function() {
  console.log('start');
});
const result = await request.json()
console.log(result);
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