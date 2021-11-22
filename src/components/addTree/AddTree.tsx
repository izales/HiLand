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
  async function removeTree() {
    try {
      await Snipcart.api.cart.items.remove('tree');
  } catch (error) {
      console.log(error)
  }

  }


  

    
  



  return (
    
      <div className="addTree-main-div">
    
        <div className="flex justify-center ">
        <button className="snipcart-add-item "
          data-item-id="tree"
          data-item-price="49.99"
          data-item-url="/"
          data-item-description="new tree safe the world"
          data-item-image="../../images/Baum_1.png"
          data-item-quantity-step="-1"

          data-item-name="Baum">
            <StaticImage
          src="../../assets/minus.svg"
          width={50}  
          quality={95}
          
          alt="plus"
          
          className=" "
          ></StaticImage></button>

    <span className="snipcart-items-count"></span>
    <button className="snipcart-add-item "
          data-item-id="tree"
          data-item-price="49.99"
          data-item-url="/"
          data-item-description="new tree safe the world"
          data-item-image="../../images/Baum_1.png"
          data-item-quantity-step="1"
          data-item-name="Baum"> <StaticImage
          src="../../assets/plus.svg"
          width={50}  
          quality={95}
          
          alt="plus"
          
          className=" "
          ></StaticImage></button>


        </div>
      
     

        <section className=" flex justify-center ">
        
          <button className=" tree-button text-center snipcart-checkout "> Preis:
<span className="snipcart-total-price"></span></button>
         

        </section>

       
      </div>
  )
}

export default AddTree