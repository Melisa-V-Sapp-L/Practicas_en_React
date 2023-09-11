import { useState } from 'react'
import { Screen } from './Screen'

export function Buttons() {
    let [letras, setCount] = useState('')


    return  <>
    <p> Vamos a sumar una letra.<button onClick={() => setCount(letras + 'A')}>
        +1 Letra</button></p>
    <p> Vamos a quitar una letra. <button onClick={() => setCount(letras.slice(0, letras.length-1))}>
        -1 Letra</button></p>
    <Screen see = {letras}/>
    </>
    
}



