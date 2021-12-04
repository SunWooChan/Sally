import React from "react";
import { useLocation } from "react-router-dom";
import vegeInfo from '../../../Assets/vegeInfo'
import Navigation_bar from "../../common/Navigation";

import styled from "styled-components";
import HorizontalCard from "./HorizontalCard";
import VerticalCard from "./VericalCard";

const ContentSection = styled.div`
  padding-top: 75px;
  /* border: 1px solid blue; */
  width: 70%;
  margin: auto;
`;

const TopingSection = styled.div`

`

const ProfileContainer = styled.div`
  width: 100%;
  /* border: 1px red solid; */
`;
const VerticalCardsContainer = styled.div`
  /* border: 1px solid green; */
  width : 100%;
`
const HorizontalCardsContainer = styled.div`
  /* border: 1px solid red; */
  width : 100%;
  display: flex;
`;

const Cards = styled.div`
  width : 100%;
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
        <Cards>
          <VerticalCardsContainer>
            <h1 style={{margin:"10px"}}>건강분석으로 추천된 채소</h1>
            <VerticalCard data = {vegeInfo[dataArr[0]]} name={dataArr[0]} hyo={vegeInfo[dataArr[0]]["효능"]} pic={vegeInfo[dataArr[0]]["사진"]} feature={vegeInfo[dataArr[0]]["야채특성"]} />
            {/* <VerticalCard vege={}/> */}
            <VerticalCard data = {vegeInfo[dataArr[1]]} name={dataArr[1]} hyo={vegeInfo[dataArr[1]]["효능"]} pic={vegeInfo[dataArr[1]]["사진"]} feature={vegeInfo[dataArr[1]]["야채특성"]}/>
            <VerticalCard data = {vegeInfo[dataArr[2]]} name={dataArr[2]} hyo={vegeInfo[dataArr[2]]["효능"]} pic={vegeInfo[dataArr[2]]["사진"]} feature={vegeInfo[dataArr[2]]["야채특성"]}/>
          </VerticalCardsContainer>
        </Cards>
        <TopingSection>
          <h1 style={{margin:"10px"}}>샐러드용 토핑</h1>
        <HorizontalCardsContainer>
            <HorizontalCard />
            <HorizontalCard />
        </HorizontalCardsContainer>
        </TopingSection>

        <Cards>
          <VerticalCardsContainer>
            <h1 style={{margin:"10px"}}>비슷한 식습관, 생활습관을 가진 고객님들에게 추천된 채소</h1>
            <VerticalCard/>
            <VerticalCard/>
            <VerticalCard/>

  
          </VerticalCardsContainer>
        </Cards>
      </ContentSection>

      {/* 결과입니다. */}
      {/* {data} */}
    </>
  );
}
