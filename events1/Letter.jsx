import { useState } from "react"

export function Letter({ params }) {
  const box = { background: "#A4FCB6", width: "600px", padding: "10px" }
  const styleMessage = {
    background: "#009772",
    width: "300px",
    fontSize: "30px",
    fontFamily: "Comic Sans MS",
  }
  const boton = {
    background: "#0083FF",
    margin: "1px",
    fontFamily: "Comic Sans MS",
  }

  const [message, setMessage] = useState("")

  return (
    <div style={box}>
      <form>
        <label>
          2. Crear un componente que pinte el texto que estamos escribiendo en
          input
          <input
            type="text"
            value={message}
            onChange={(text) => setMessage(text.target.value)}
          ></input>
        </label>
        <p>Aquí aparece aquello que se escribió en la caja:</p>
        <p style={styleMessage}>{message}</p>
        <button style={boton}>{params}</button>
      </form>
    </div>
  )
}
