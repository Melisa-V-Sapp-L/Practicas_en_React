import React from "react"

const Logout = ({ handleEvent }) => {
  return <>
  <h1>"Esta pagina solo puedo verla por que estoy logueado"✨</h1>
  <button onClick={e => handleEvent(false)}>Salir</button>
  <p><img src="https://i.ibb.co/tMqBG97/c77f8f6abc1e645326ec07db18d1109a.jpg" alt="c77f8f6abc1e645326ec07db18d1109a" border="0"></img></p>
  </>
}

export default Logout