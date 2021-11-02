import React from "react"
import { Link } from "react-router-dom"
import {useEffect} from "react"

import { useHistory, } from "react-router"
import LoginForm from "./LoginForm"
import axios from "axios"

export default  function LoginPage() {
  const history = useHistory()

  const users = []
  const handleSubmit = (formData) =>{
    const foundUser = users.find(user => user.email ===formData.email && user.password ===formData.password)
    //users는 어디서 난겨? ㅋㅋ
    if(!foundUser) return
    history.pushState(`/detail?email=${formData.email}&password=${formData.password}`)
  }
  useEffect(() => {
    axios.get('/user_inform/login')
    .then(res => console.log(res))
    .catch()
  },[])


  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm/>
      <div>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}
