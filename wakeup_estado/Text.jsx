import { useState } from "react";


export default function Text() {
  const button = {
    margin: "2% 2%",
    padding: "2%",
  };

  const box1 = {
    margin: "10% 5%",
    fontFamily:'Courier New, Courier, monospace',
   
  }

  const [color,setColor]=useState("red");

  const handleClick = (e) => {

    const pickColor = e.target.name

    console.log(pickColor)

    switch (pickColor) {
      case "lilac":
        setColor('mediumpurple')
        break;
      case "yellow":
        setColor('yellow')
        break;
      case "orange":
        setColor('orange')
        break;
      case "green":
        setColor('green')
        break;
      case "blue":
        setColor('blue')
        break;
      case "red":
        setColor('red')
        break;  
    }
  };

  return (
    <>
      <div>
        <button style={button} name="lilac" onClick={handleClick}>
          💜
        </button>
        <button style={button} name="yellow" onClick={handleClick}>
          💛
        </button>
        <button style={button} name="orange" onClick={handleClick}>
          🧡
        </button>
        <button style={button} name="green" onClick={handleClick}>
          💚
        </button>
        <button style={button} name="blue" onClick={handleClick}>
          💙
        </button>
        <button style={button} name="red" onClick={handleClick}>
          💖
        </button>
      </div>
      <div style={box1}>
        <p style={{color:color}}>Change the text color with hearts....</p>
      </div>
    
    </>
  );
}
