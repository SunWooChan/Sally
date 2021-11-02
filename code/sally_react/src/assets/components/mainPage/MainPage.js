import React from 'react'
import Navigation from '../common/Navigation'
import Footer from '../common/Footer'
import ServiceIntro from './ServiceIntro'
import './MainPage.css'
import MainContent from './MainContent'
// import Survey from '../surveyPage/Survey'
// import Login from '../common/Login'

export default function MainPage() {
    return (
        <div className = 'container'>
            <Navigation />
            <MainContent />
            <ServiceIntro />
            {/* <Survey/> */}
            <Footer />
            {/* <Login></Login> */}
        </div>
    )
}
