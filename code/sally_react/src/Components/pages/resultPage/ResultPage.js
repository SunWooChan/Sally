import React from "react";
import { useLocation } from "react-router-dom";

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

  const json_data = JSON.parse(location.state.result);
  // console.log(location.state.data)
  console.log(location.state.result)
  

      
  var dataArray = []

  for (var i in json_data)
    dataArray.push([i, json_data[i]]);
  console.log(dataArray);

  const path= "../img/시발.jpg"

  return (
    <>
      <Navigation_bar />
      <ContentSection>
        <Cards>
          <VerticalCardsContainer>
            <h1 style={{margin:"10px"}}>건강분석으로 추천된 채소</h1>
            <VerticalCard data={dataArray[0]} />
            {/* <VerticalCard vege={}/> */}
            <VerticalCard data={dataArray[1]}/>
            <VerticalCard data={dataArray[2]}/>
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

            {/* <VerticalCard vege={}/>
            <VerticalCard vege={}/>
            <VerticalCard vege={}/> */}
          </VerticalCardsContainer>
        </Cards>
      </ContentSection>

      {/* 결과입니다. */}
      {/* {data} */}
    </>
  );
}
