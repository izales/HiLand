import React, { ReactNode, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import "./AddTree.scss"
import axios from 'axios'


interface IState {
  

  
  
  
  
}



const AddTree = ({   }: IState) => {
  const Snipcart = (window as any).Snipcart;
  document.addEventListener('snipcart.ready', async () => {
    console.log('start');
    //new 
    console.log(Snipcart.api.cart);

  });
  Snipcart.events.on('item.added', () => {
    console.log('in der cart');
    console.log(Snipcart.api.cart.uniqueId);
  });
  function removeTree() {

    Snipcart.api.cart.get().items[0].quantity;

  }


  Snipcart.api.items.remove()

    
  



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