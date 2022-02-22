import React, { ReactNode, useState } from "react"
import Footer from "@components/footer/Footer"
import Cloud from "@components/clouds/Clouds"
import "./Layout.scss"
import { animated, useSpring } from "react-spring"
import Image from "../helpers/Image"
interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {




  return (
    <div className="mb-cloud  w-screen h-screen ">
      <div>{children}</div>
      <Footer />




    </div>
  )
}

export default Layout
