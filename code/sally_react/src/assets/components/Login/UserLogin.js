import React from "react";
// 필요한 모듈을 추가로 import하세요.
import {
  Switch,
  BrowserRouter,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from './LoginForm'
import MainPage from "../mainPage/MainPage";

const users = [];
export default function UserLogin() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/detail">
          <UserDetailPage />
        </Route>

        <Route exact path = "/register">
          <RegisterPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

// LoginPage 페이지 컴포넌트를 구현하세요.
function LoginPage() {
  const history = useHistory()
  
  const handleSubmit = (formData) =>{
    const foundUser = users.find(user => user.email ===formData.email && user.password ===formData.password)
    //users는 어디서 난겨? ㅋㅋ
    if(!foundUser) return
    history.pushState(`/detail?email=${formData.email}&password=${formData.password}`)
  }
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm />
      <div>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}

// DetailPage 페이지 컴포넌트를 구현하세요.
function UserDetailPage() {
  // email, password 정보를
  // query param 으로 받아와 저장하고, 정보를 보여주세요.
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search) 
  const email = searchParams.get('email')
  const password = searchParams.get('password')
  if(!email || !password){
    return <Redirect to ="/login" />}
  return (
    <div>
      <h2>User Detail Page</h2>
      <p>
        <h3>User details</h3>
        <em>{email}</em>
        <br />
        <strong>{password}</strong>
      </p>
      <Link to="/">Logout</Link>
    </div>
  );
}

function RegisterPage() {
  const history = useHistory();

  const handleSubmit = (formData) => {
      users.push(formData)
      history.push('/login')
      console.log('유저를 등록하세요.')
  };

  return (
    <div>
      <h2>Register Page</h2>
      <RegisterForm onSubmit={handleSubmit} />
      <div>
        <ul>
          <li>
            <Link to="/">Back to home</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}