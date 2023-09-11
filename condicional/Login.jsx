
import React, { useState } from "react"
import Signin from "./Signin"
import Logout from "./Logout"

const Login = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) return <Signin handleEvent={setIsLoggedIn} />

  return <Logout handleEvent={setIsLoggedIn} />
}

export default Login