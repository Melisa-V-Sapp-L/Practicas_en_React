import React from 'react'
import ReactDOM from 'react-dom/client'

import { Button } from './Button'
import { Letter } from './Letter'
import { Selection } from './Selection'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <h2 style={{background:'#D5C6FE', width:'600px', padding:'10px'}}>Ejercicios de "Events".</h2>
  <Button params = 'Button'/>
  <Letter params = 'Cambiar color del mensaje.'/>
  <Selection />
  
</>)


