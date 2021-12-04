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
// import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/pages/mainPage/MainPage';
import AboutPage from './Components/pages/About/AboutPage';

import SurveyPage from './Components/pages/surveyPage/SurveyPage';
import ResultPage from './Components/pages/resultPage/ResultPage';
import ServiceIntroPage from './Components/pages/serviceIntroPage/ServiceIntroPage';
import ContactPage from './Components/pages/Contact/ContactPage';

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route exact path="/intro">
          <ServiceIntroPage />
        </Route>

        <Route exact path = "/about">
          <AboutPage />
        </Route>
      
        <Route exact path = "/survey">
          <SurveyPage />
        </Route>  

        <Route exact path = "/result">
          <ResultPage />
        </Route>


        <Route exact path="/contact">
          <ContactPage/>
        </Route>

       
        
      </Switch>
    </BrowserRouter>
    </div>
  );
}
