
import React from "react";
import styled from "styled-components";
import bgImage from "../../../Assets/images/MainPageBg.jpg";
import "./MainPage.css";
import Navigation from "../../common/Navigation";
// import Footer from "../../common/Footer";


// import MainContent from './MainContent'
// const url = '/Assets/images/MainPageBg.jpg'


const MainContainer = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: left;
  margin: auto;

  height: 100%;
  width: 100vw;
  background-image: url(${bgImage});
  background-size: cover;
  &+div{
    margin : 5vw 15vw;
    height: 100%;
    width: 100%;
  }
`;

const MainPageText = styled.div`
  margin : 5vw 15vw;
  height: 100%;
  width: 100%;
`;

const StartBtn = styled.button`
  margin-top : 30px;
  width: 140px;
  height: 60px;
  border-radius: 40px;
  background-color: #63BA48;
  color : whitesmoke;
  font: 20px bold;
  border:none;

  &:hover {
    background-color: green;
  }
`

export default function MainPage() {
  return (
    <>
      <Navigation />
      <MainContainer>
        <MainPageText>
          <div id="Sally">
            <h3></h3>
            <p style={{fontSize:"100px"}}>Do Sally !</p><p>Salad Only for You</p>
            <h3>
              3000 가지 종류의 샐러드에서 찾은 <br />
              당신만을 위한 샐러드!{" "}
            </h3>
            <a href="/survey">
              <StartBtn>Start Now !</StartBtn>
            </a>
          </div>
        </MainPageText>
      </MainContainer>
      
    </>
  );
}
