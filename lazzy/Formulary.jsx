import React, { Fragment, useState } from "react"

const Formulary = () => {
  const box2 = { padding: "15% 0% 0% 0%" }

  const [data, setData] = useState({
    username: "",
    usermail: "",
    userpass: "",
  })

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const sendData = (event) => {
    event.preventDefault();
    console.log(
      "Enviando data..." +
        data.username +
        " " +
        data.usermail +
        " " +
        data.userpass
    );
  }

  return (
    <>
      <Fragment>
        <div>
          <form style={box2} onSubmit={sendData}>
            <h1>Cine Online</h1>
            <h3>Crea tu cuenta para formar parte de wow!</h3>
            <p>
              <input
                type="text"
                placeholder="Nombre de usuario..."
                name="username"
                onChange={handleInputChange}
              />
            </p>
            <p>
              <input
                type="email"
                placeholder="E-mail..."
                name="usermail"
                onChange={handleInputChange}
              />
            </p>
            <p>
              <input
                type="password"
                name="userpass"
                id="pass"
                placeholder="Password..."
                onChange={handleInputChange}
              />
            </p>
            <p>
              <button>Create</button>
            </p>
          </form>
        </div>
      </Fragment>
    </>
  )
}

export default Formulary
