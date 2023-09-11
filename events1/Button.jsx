
export function Button({ params }) {
  const box = { background: "#C6D3FE", width: "600px", padding: "10px" }

  const boton = {
    background: "#FF00F4",
    margin: "1px",
    fontFamily: "Comic Sans MS",
  }

  /*El bendito Json*/
  
  
  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      
  }
  
  /*-------*/

  return (
    <>
      <div style={box}>
      
        <p>
          1. Con el botón, llamaremos una pagina y pintaremos el JSON de otro
          color.
        </p>
        <button onClick={handleClick} style={boton}>
          {params}
        </button>
        
      </div>

    </>
  );
}
