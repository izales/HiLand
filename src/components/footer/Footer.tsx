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
<div hidden id="snipcart" data-api-key="MmI3MjMyNzItZWVhNi00NTJlLTg4ODMtZmZkNTJmZTczMmQ4NjM3NzEwMjQ1MTk3ODA3Mjgx" />
    </footer>
  )
}

export default Footer


