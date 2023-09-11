import { useState } from "react"

export function Selection() {
  const box = { background: "#FCE9A4", width: "600px", padding: "10px" }

  const [flavor, setFlavor] = useState("")

  return (
    <div style={box}>
      <form>
        <label>
          3. Crear un componente que muestre el value seleccionado de una
          etiqueta select...Entonces...Creamos unas opciones de sabores:
          <select
            value={flavor}
            onChange={(e) => {
              setFlavor(e.target.value)
            }}
          >
            <option>Grapefruit</option>
            <option>Lime</option>
            <option>Coconut</option>
            <option>Mango</option>
          </select>
        </label>
      </form>
      <p>El sabor selecionado es: {flavor}</p>
    </div>
  );
}
