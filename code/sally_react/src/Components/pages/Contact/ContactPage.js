import React from "react";
import styled from "styled-components";
import Navigation_bar from "../../common/Navigation";
// const 한개 container 밑에 사람마다

const AboutContainer = styled.div`
  padding-top: 50px;
  /* border : 1px solid green; */
  align-text : center;
`;
const CardContainer = styled.div`
  /* display: flex; */
  width: 30vw;
  margin: auto;
  align-contents :center;
  
  h2 {
    margin: 0 0 15px 0;
  }
`;

const PersonCard = styled.div`
  border-radius: 20px;
  box-shadow: 1px 1px 1px grey;
  padding: 10px;
  margin: 20px 0;
  width: 100%;
  display: flex;

  div {
    padding-left: 10px;
  }
  h3 {
    margin-top: 30px 0;
    /* color:#2b77ab; */
  }
  p{
    padding:7px 0;
  }
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 130px;
    width: 130px;
    margin-right: 10px;
    padding: 5px;
  }
  ul {
    background-color: white;
    border-radius: 20px;
    padding: 5px 0;
    li {
      list-style: none;
      font-size: 13px;
      padding-bottom: 10px;
    }
  }
`;

export default function ContactPage() {
  return (
    <div>
      <Navigation_bar />
      <AboutContainer>
        <CardContainer>

        </CardContainer>
      </AboutContainer>
      <AboutContainer>
        <CardContainer>
          <p style={{ fontFamily:"Bangers", fontSize:"40px", padding :"20px",textAlign:"center"}}>Contact</p>  
        <PersonCard>
            <div>
            <h3>본사</h3>
              <p style={{ fontWeight :"bold", color :"#2b77ab"}}>경기도 수원시 팔달구 아주로27번길 10-9</p>
            <h3>온라인 본사</h3>
              <p style={{ fontWeight :"bold", color :"#2b77ab"}}>Gather town</p>
              <img src="../../../Assets/images/gatherTown.png"/>
              <h3>문의처</h3>
              <p style={{ fontWeight :"bold", color :"#2b77ab"}}>soon5770@ajou.ac.kr</p>


            </div>
          </PersonCard>
        </CardContainer>
      </AboutContainer>
    </div>
  );
}
