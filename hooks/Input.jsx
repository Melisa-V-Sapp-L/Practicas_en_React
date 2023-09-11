import { useState } from "react";

export function Input() {

  const input = {margin:'8% 0 0 37%', width:'300'}

  const paragraph = {padding:'0 20% 0% 40%', fontFamily: 'Century Gothic, sans-serif',}


  const [changeA, setChangeA] = useState();

  const changer = (e) => {
    const string = e.target.value.replaceAll("a", "b");

    setChangeA(string);
  };

  return (
    <>
      <div>
        <form>
          <label></label>
          <p>
            <input
              type="text"
              onChange={changer}
              placeholder='Change "a" for "b"....'
              style={input}
            ></input>
          </p>
          <p style={paragraph}>⟴ {changeA}</p>
        </form>
      </div>
    </>
  );
}
