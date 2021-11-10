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
import Survey from './assets/components/surveyPage/Survey'; 
import NewSurvey from './assets/components/surveyPage/NewSurvey';
import Result from './assets/components/surveyPage/Result';
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

        <Route exact path = "/survey">
          <NewSurvey />
        </Route>

        <Route exact path = "/result">
          <Result />
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
