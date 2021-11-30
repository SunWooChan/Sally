import React from 'react'
import styled from 'styled-components'
import bgImage from '../../../Assets/images/MainPageBg.png'
import MainContent from './MainContent'
import Navigation from '../../common/Navigation'

// import './MainPage.css'
// import MainContent from './MainContent'
// const url = '/Assets/images/MainPageBg.jpg'

const MainContainer = styled.div`
    display: flex;
    justify-content : space-between; 
    align-items : center;
    margin : auto;
    height: 90vh;
    width: 80vw;
`
    
const MainPageText = styled.div`
/* flex-basis: 500px; */
    height : 100%;
    width : 30%;
    background-size : cover;
`

const MainPageImg = styled.div`
    /* flex-basis: 500px; */
    margin-top:75px;
    height : 100%;
    width : 35%;

    background-image: url(${bgImage});
    background-size : cover;
`

export default function MainPage() {
    return (
        <div className = 'mainContainer'>
            <Navigation />
            <MainContainer>
                <MainPageText>
                    
                </MainPageText>    
                <MainPageImg />
            </MainContainer>
        </div>
    )
}
