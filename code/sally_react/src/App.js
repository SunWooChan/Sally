import {
Switch,
BrowserRouter,
Route,
Link,
Redirect,
useLocation,
useHistory
} from 'react-router-dom';
import './App.css';
import MainPage from './assets/components/mainPage/MainPage';
import LoginPage from './assets/components/loginPage/LoginPage';
import RegisterPage from './assets/components/registerPage/RegisterPage';

// import REGI from 
// import MainPage from './assets/components/pages/MainPage';
// import UserLogin from './assets/components/Login/UserLogin';

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path = "/register">
          <RegisterPage />
        </Route>

        {/* <Route exact path="/detail">
          <UserDetailPage />
        </Route>

        */}
        
      </Switch>
    </BrowserRouter>
    </div>
  );
}
