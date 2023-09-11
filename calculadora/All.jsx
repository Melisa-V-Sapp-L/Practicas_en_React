import { useState } from "react";

export function All() {
  const box = {
    background: "#EEEEEE",
    padding: "20px",
    width: "250px",
    height: "400px",
    borderRadius: "8px",
  };

  const box1 = {
    margin: "20px",
  };

  const box2 = {
    margin: "10px 0px 10px 0px",
    float: "right",
    fontFamily: "Tahoma, Geneva, sans-serif",
  };

  const button = {
    margin: "5px",
  };

  const button1 = {
    margin: "5px",
    width: "80px",
  };

  const [input, setInput] = useState("");
  const [symbol, setSymbol] = useState();
  const [count, setCount] = useState(0);
  const [equalto, setEqualTo] = useState(0);

  const operators = symbol;
  const results = equalto

  const restriction = (s) => {
    if (count === 0) {
      setSymbol(s.target.name);
      setCount(count + 1);
      setInput(input + s.target.name);
    }
  };

  const deteleOne = () => {
    setInput(input.substring(0, input.length - 1));
  };

  const deleteAll = () => {
    setInput(input.slice(input.length));
    setEqualTo(0)
    
  };

  const equal = () => {
    let num1 = 0;
    let num2 = 0;
    let result = 0;

    setInput((num1 = input.split(operators)[0]));
    setInput((num2 = input.split(operators)[1]));
    
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operators) {
      case "+":
        result = num1 + num2;
        
        break;

      case "-":
        result = num1 - num2;

        
        break;
      case "/":
        result = num1 / num2;

        
        break;
      case "*":
        result = num1 * num2;

        
        break;
    }
    setCount(count - 1);    
    setEqualTo(result);
    setInput('')
  };

  return (
    <>
      <center>
        <div style={box}>
          <div style={box1}>
            <p>{equalto}</p>
          </div>
          <div style={box1}>
            <form>
              <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder="0"
              />{" "}
            </form>
          </div>
          <div style={box1}>
            <button style={button} onClick={restriction} name="/">
              ➗
            </button>
            <button style={button} onClick={restriction} name="*">
              ✖
            </button>
            <button style={button} onClick={restriction} name="-">
              ➖
            </button>
            <button style={button} onClick={restriction} name="+">
              ➕
            </button>
          </div>
          <div style={box1}>
            <button
              style={button}
              onClick={() => {
                setInput(input + "1");
              }}
            >
              1️⃣
            </button>
            <button
              style={button}
              onClick={() => {
                setInput(input + "2");
              }}
            >
              2️⃣
            </button>
            <button
              style={button}
              onClick={() => {
                setInput(input + "3");
              }}
            >
              3️⃣
            </button>
            <button
              style={button}
              onClick={() => {
                setInput(input + "4");
              }}
            >
              4️⃣
            </button>
          </div>
          <div style={box1}>
            <button
              style={button}
              onClick={() => {
                setInput(input + "5");
              }}
            >
              5️⃣
            </button>
            <button
              style={button}
              onClick={() => {
                setInput(input + "6");
              }}
            >
              6️⃣
            </button>
            <button
              style={button}
              onClick={() => {
                setInput(input + "7");
              }}
            >
              7️⃣
            </button>
            <button
              style={button}
              onClick={() => {
                setInput(input + "8");
              }}
            >
              8️⃣
            </button>
          </div>
          <div style={box1}>
            <button
              style={button}
              onClick={() => {
                setInput(input + "9");
              }}
            >
              9️⃣
            </button>
            <button
              style={button}
              onClick={() => {
                setInput(input + "0");
              }}
            >
              0️⃣
            </button>
            <button
              style={button}
              onClick={() => {
                setInput(input + ".");
              }}
            >
              ⚫
            </button>

            <button style={button} onClick={deteleOne}>
              🔙
            </button>
          </div>
          <div style={box1}>
            <button style={button1} onClick={deleteAll}>
              🔄
            </button>
            <button style={button1} onClick={equal}>
              🆗
            </button>
          </div>
          <div style={box2}>MyLittleCalculator🧮</div>
        </div>
      </center>
    </>
  );
}
