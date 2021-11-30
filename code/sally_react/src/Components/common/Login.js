import React from 'react'
import './Login.css'


export default function Login() {

    return (
        
<body className="align">
    <div className="grid">
        <form action="/" method="post" className="form login">

    <div className="login__header">
      <h3 className="login__title">Login</h3>
    </div>

    <div className="login__body">

      <div className="form__field">
        <input type="email" placeholder="Email" required/>
      </div>

      <div className="form__field">
        <input type="password" placeholder="Password" required/>
      </div>

    </div>

    <footer className="login__footer">
      <input type="submit" value="Login"/>

      <p><span className="icon icon--info">?</span><a href="#">Forgot Password</a></p>
    </footer>

  </form>

</div>

</body>)
}