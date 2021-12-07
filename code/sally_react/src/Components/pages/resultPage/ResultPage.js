import React from "react";
import { useLocation } from "react-router-dom";
import vegeInfo from '../../../Assets/vegeInfo'
import Navigation_bar from "../../common/Navigation";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HorizontalCard from "./HorizontalCard";
import VerticalCard from "./VericalCard";
import Footer from "../../common/Footer";

const ContentSection = styled.div`
  padding-top: 75px;
  width: 740px;
  margin: auto;
  h2 {
    margin: 20px 0 15px 0;
    background-color: rgb(202,231,193);
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
const ProfileContainer = styled.div`
  width: 100%;
  /* border: 1px red solid; */
`;
const VerticalCardsContainer = styled.div`
  /* border: 1px solid green; */
  width : 100%;
  /* background-color:  */
`
const HorizontalCardsContainer = styled.div`
  /* border: 1px solid red; */
  width : 100%;
  display: flex;
`;

const RetryBtn = styled.button`
  /* float: right; */
  letter-spacing: normal;
  
  line-height: 50px;
  width: 80%;

  
  margin : 30px 10% 100px 10%;
  
  border-radius: 25px;
  border: white;
  
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 700;
  
`
export default function ResultPage() {
  const location = useLocation();
  const json_data = (location.state.result);
  
  const dataArr = json_data.split(/{|}|"|,|\s|:/).filter((e)=> e!="").filter((e,i)=>i%2 != 1)  
  // console.log(dataArr)
  

  return (
    <>
      <Navigation_bar />
      <ContentSection>
            <h2 style={{  borderRadius:"10px", padding:"10px" }}>건강분석으로 추천된 채소</h2>
            <VerticalCard data = {vegeInfo[dataArr[0]]} />
            <VerticalCard data = {vegeInfo[dataArr[1]]} />
            <VerticalCard data = {vegeInfo[dataArr[2]]} />
            
          <h2 style={{ backgroundColor:"lightgrey", borderRadius:"10px", padding:"10px"}}>샐러드용 토핑</h2>
        <HorizontalCardsContainer>
            <HorizontalCard data = {vegeInfo[dataArr[3]]}/>
            <HorizontalCard data = {vegeInfo[dataArr[4]]}/>
        </HorizontalCardsContainer>
            <h2 style={{ backgroundColor:"#FEF5B1", borderRadius:"10px", padding:"10px"}}>고객님과 비슷한 생활습관을 가진 고객님들에게 추천된 채소</h2>
            <VerticalCard data = {vegeInfo[dataArr[5]]}/>
            <VerticalCard data = {vegeInfo[dataArr[6]]}/>
            <VerticalCard data = {vegeInfo[dataArr[7]]}/>  
        <Link to='survey'><RetryBtn>다시 추천 받기</RetryBtn></Link>
        <Footer/>
      </ContentSection>
      {/* 결과입니다. */}
      {/* {data} */}
    </>
  );
}
