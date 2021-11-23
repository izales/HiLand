const React = require('react')
exports.onRenderBody = ({ setHeadComponents, setPreBodyComponents, setPostBodyComponents }) => {
  setHeadComponents([<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />])
  setPostBodyComponents([
    <div id="snipcart"  data-api-key="MmI3MjMyNzItZWVhNi00NTJlLTg4ODMtZmZkNTJmZTczMmQ4NjM3NzEwMjQ1MTk3ODA3Mjgx" data-config-add-product-behavior="none" hidden>
      
    </div>,
     
   <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js"> 
 
   </script>, 
  ])
}
