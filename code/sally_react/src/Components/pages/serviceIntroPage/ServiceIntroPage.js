import React from "react";
import styled from "styled-components";
import IntroImg1 from "../../../Assets/images/Intro1.jpg";
import IntroImg2 from "../../../Assets/images/Intro2.png";
import Navigation_bar from "../../common/Navigation";

const ContentSection = styled.div`
  padding-top: 75px;
  width: 70%;
  margin: auto;
  text-align : center;
  letter-spacing : 1px;
  
  @media only screen and (max-width: 800px) {
    width: 100%;
    font-size:20px;
  }
  p {
      padding : 0px;
      @media only screen and (max-width: 800px) {
        padding : 0px;


      }}
`;

export default function ServiceIntroPage() {
  return (
    <>
      <Navigation_bar />
      <ContentSection style={{
        
      }}>
      <p style={{ fontFamily:"Bangers", fontSize:"40px", padding :"40px",textAlign:"center"}}>info</p>  

        <img src={IntroImg1} style={{width:"70%"}}/>
        <p style={{margin:"auto", padding:"20px 0", width:"70%", fontSize:"20px", lineHeight:"150%"}}>
          Sally는 식품의약품안전처 데이터와 국내 영양학 연구진, 의료진의 진단
          기반으로 만든 23가지 건강 설문과 324여 종의 영양소 데이터, 214여 종의
          야채 데이터를 토대로 분석, 추천해주는 영양성분 기반 샐러드 추천
          플랫폼입니다.
        </p>
        <img src={IntroImg2} style={{ padding : "20px",width: "70%"}}/>
        <p style={{margin:"auto", padding:"20px 0 100px 0", width:"90%", fontSize:"20px", lineHeight:"150%"}}>
          엄격한 영양소, 야채 선별 기준과 Sally만의 <br/>분석/추천 알고리즘을 통한 
          샐러드 추천을 받아보세요.
        </p>
      </ContentSection>
    </>
  );
}
