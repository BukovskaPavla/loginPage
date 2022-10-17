import React, { useState } from "react";
import './Form.css'

const Form = () => {

  const [password, setPassword] =useState ()
  const [user, setUser] = useState()
  const [name, setName] = useState()

  const handlePassword = (pass) => {
    const newPass = pass==="bnm" ? pass : null
     setPassword(newPass)
  }
  const handleUser = (user) => {
    const newUser = user==="pavla"? user : null
    setUser(newUser)
  }
  const handleSubmit= (e) => {
    e.preventDefault()
    if (user ==="pavla" && pass==="bnm"){
      setName(user)
    }
    else {
      console.log("špatné údaje")
    }
  }
   
    return(
      <form onSubmit={handleSubmit}>
        <label>Uživatelské jméno: 
          <input 
            type="text"
            autoFocus
            onChange={(e)=>handleUser(e.target.value)}></input>
        </label>
        <label>Heslo: 
          <input 
            type="password" 
            onChange={(e)=>handlePassword(e.target.value)}></input>
        </label>
        <button>Přihlásit se!</button>
      </form>
    )
}

export default Form