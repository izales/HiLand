import React, { useState, createContext, useContext, ReactNode, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import "./AddTree.scss"
import { useSpring, animated } from 'react-spring'

import Image from "../helpers/Image"
interface IState {
  cartSize?: any,





}

// Context.
//export const SnipcartContext = createContext();
// Create a custom hook to use the context.
//export const useSnipcartContext = () => useContext(SnipcartContext);
const AddTree = ({ cartSize }: IState) => {
  var state: any;
  const Snip = (window as any).Snipcart;
  //cartSize = Snipcart.store.getState().cart.items.items.length;


  const props = useSpring({ to: { y: 100 }, from: { y: 0 }, delay: 4000 })
  document.addEventListener('snipcart.ready', () => {
    const initialState = Snip.store.getState();
    setItemsCount(initialState.cart.items.count);


  });
  //const props = useSpring({ to: { y: 100 }, from: { y: 0 }, delay: 4005 })
  const [ArrayBaum, setArrayBaum] = useState([]);

  /** const addBaumfkt = (id: string) => {
    images.map((images) => (
    

  }*/

  useEffect(() => {


  }, [])

  const max = 3;
  const min = 1;
  const ziffer = Math.floor(Math.random() * (max - min + 1)) + min;

  const [randomNumber, setRandomNumber] = useState(0);


  // images bäume
  var [itemsCount, setItemsCount] = useState(0);
  let images = ["Baum_1.png", "Baum_2.png", "Baum_3.png", "Baum_4.png", "Baum_1.png", "Baum_2.png", "Baum_3.png", "Baum_4.png", "Baum_1.png", "Baum_2.png", "Baum_3.png", "Baum_4.png", "Baum_1.png"];

  // random nummer generator
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setRandomNumber(randomNumber)
  }

  var randomBaum = images[Math.floor(Math.random() * images.length)];




  const handleClick = () => {
    let i = itemsCount < images.length ? itemsCount += 1 : 0;
    setItemsCount(i);
  };
  const handleClickRemove = () => {
    let i = itemsCount < images.length ? itemsCount -= 1 : 0;
    setItemsCount(i);
  };






  return (

    <div className="addTree-main-div">
      <div className="flex justify-center mb-s text-4xl text-blue-dunkel "> {itemsCount} - Spende jetzt für
        deine Region!</div>
      <div className="flex justify-center mb-s">
        <button onClick={() => handleClickRemove()} className="snipcart-add-item "
          data-item-id="tree"
          data-item-price="49.99"
          data-item-url="/"
          data-item-description="new tree safe the world"
          data-item-image="../../images/Baum_1.png"
          data-item-quantity-step="-1"
          data-item-min-quantity="0"

          data-item-name="Baum">
          <StaticImage
            src="../../assets/minus.svg"
            width={50}
            quality={95}

            alt="plus"

            className=" mr-32"
          ></StaticImage></button>

        <span className="snipcart-items-count text-64 text-blue-dunkel"></span>
        <button onClick={() => handleClick()} className="snipcart-add-item "
          data-item-id="tree"
          data-item-price="49.99"
          data-item-url="/"
          data-item-description="new tree safe the world"
          data-item-image="../../images/Baum_1.png"
          data-item-quantity-step="1"
          data-item-min-quantity="1"
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

      <div className="w-full flex flex-row relative z-10 ">

        {images.slice(0, itemsCount).map(v => {
          return (
            <div className="w-24">
              <animated.div className="" style={props}><Image imageName={v} maxWidth={80} className="" />
              </animated.div>
            </div>

          );
        })}



      </div>

    </div>
  )
}

export default AddTree