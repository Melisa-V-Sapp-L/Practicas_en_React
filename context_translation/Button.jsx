import { useContext, useState } from "react";
import TextContext from "./TextContext";

function Button() {

    const button = {
        background: 'black',
        color: 'white',
        border: 'none',
        padding: '15px 15px'
      }

  const { p1 } = useContext(TextContext);
  const { p2 } = useContext(TextContext);

  const [t1, setT1] = useState ('')
  const [t2, setT2] = useState ('')

  const handleClick = () => {
    setT1(p1)
    setT2(p2)
  }

  return (
    <>
      <button style={button} onClick={handleClick}>Translation</button>
      <p>{t1}</p>
      <p>{t2}</p>
    </>
    
  );
}

export default Button;
