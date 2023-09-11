import { Input } from "./Input";
import { Desmontado } from "./Desmontado";
import { Actualizado } from "./Actualizado";



import React, { useState } from "react";

const backgroundImageURL =
  "https://i.ibb.co/Wv8f3bW/4d45786720341dd3258d6e598016aff8.jpg";

const box = {
  margin: "4%",
  backgroundImage: `url(${backgroundImageURL})`,
  backgroundPosition: " center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundAttachment: "contain",
  width: "75%",
  height: "450px",
};

export default function App() {
  const button = { margin: "1%", border: "none" };
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <div style={box}>
        <button onClick={handleClick} style={button}>
          🖱️
        </button>

        <Input />
        <Actualizado num={count} />
        <Desmontado />
        
        
      </div>
    </>
  );
}
