import React, { ReactNode, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import "./AddTree.scss"
import axios from 'axios'


interface IState {
  

  
  
  
  
}



const AddTree = ({   }: IState) => {
 
  document.addEventListener('snipcart.ready', () => {
    console.log('start');
    
    
  });
  
  
  async function removeTree() {
    console.log('btn');
    const secret = "ST_Y2IzNGI3NWMtMzk0Yy00NTVlLWE0MzctZGZkZjViODhjOTNlNjM3NzIwNTc0Mzk2NTgyMDQ2"

    const Snipcart(type: any) = await fetch('https://app.snipcart.com/api/', {
        headers: {
            'Authorization': `Basic ${btoa(secret)}`,
            'Accept': 'application/json'
        }
        Snipcart.api.theme.cart.open()
    })
    
    const result = await request.json()
    console.log(result);
  }



  return (
    
      <div className="addTree-main-div">

        <button onClick={} className="snipcart-remove-item">  remove tree</button>

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