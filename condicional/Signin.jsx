import React from "react"

const SignIn = ({ handleEvent }) => {
  return <>
  <h1>🚪"Inicia sesión para ver contenido privado"🔌</h1>
  <button onClick={e => handleEvent(true)}>Entrar</button>
  <p><img src="https://i.ibb.co/VtjBV45/e056deba16647182001215f3e0eb8a06.jpg" alt="e056deba16647182001215f3e0eb8a06" border="0"></img></p>
</>
}

export default SignIn