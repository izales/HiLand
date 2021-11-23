import React, { ReactNode, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import "./AddTree.scss"
import axios from 'axios'


interface IState {






}



const AddTree = ({ }: IState) => {
  const Snipcart = (window as any).Snipcart;

  document.addEventListener('snipcart.ready', async () => {
    console.log('start');



  });









  return (

    <div className="addTree-main-div">
      <div className="flex justify-center mb-s text-4xl text-blue-dunkel "> Spende jetzt für
        deine Region!</div>
      <div className="flex justify-center mb-s">
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

            className=" mr-32"
          ></StaticImage></button>

        <span className="snipcart-items-count text-64 text-blue-dunkel"></span>
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

            className="ml-32 "
          ></StaticImage></button>


      </div>



      <section className=" flex justify-center ">

        <button className=" tree-button text-center snipcart-checkout text-lg ">
          Für  <span className="snipcart-total-price text-lg"></span> Bäume pflanzen</button>


      </section>


    </div>
  )
}

export default AddTree