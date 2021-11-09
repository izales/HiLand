import React, { ReactNode } from "react"

interface ILayoutProps {
  children: ReactNode
}

const Footer = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <footer>
      <h5>Footer Content</h5>
      {children}
      <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
<div hidden id="snipcart" data-api-key="ST_Y2IzNGI3NWMtMzk0Yy00NTVlLWE0MzctZGZkZjViODhjOTNlNjM3NzIwNTc0Mzk2NTgyMDQ2" />
    </footer>
  )
}

export default Footer


