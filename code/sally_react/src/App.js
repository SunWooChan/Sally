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
import React from 'react';

import MainPage from './Components/pages/mainPage/MainPage';
// import LoginPage from './Components/pages/loginPage/LoginPage';
import RegisterPage from './Components/pages/registerPage/RegisterPage';
import SurveyPage from './Components/pages/surveyPage/SurveyPage';
import Result from './Components/pages/resultPage/Result';

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        {/* <Route exact path="/login">
          <LoginPage />
        </Route> */}

        {/* <Route exact path = "/register">
          <RegisterPage />
        </Route> */}

        <Route exact path = "/survey">
          <SurveyPage />
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
