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
    margin-bottom: 10px;
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

export default function AboutPage() {
  return (
    <div>
      <Navigation_bar />
      <AboutContainer>
        <CardContainer>

        </CardContainer>
      </AboutContainer>
      <AboutContainer>
        <CardContainer>
          <p style={{ fontFamily:"Bangers", fontSize:"40px", padding :"20px",textAlign:"center"}}>About Us</p>  
        <PersonCard>
          <img src= {require("../../../Assets/personal_photo/선우찬.jpeg").default}/>
            <div>
              <h3>선우찬</h3>
              <p style={{ fontWeight :"bold", color :"#2b77ab"}}>CEO & Co-Founder<br/>AI Engineer<br/>BackEnd SW Engineer<br/> </p>
              <p>"The best motivation is just doing it"</p>
            </div>
          </PersonCard>
        <PersonCard>
          <img src= {require("../../../Assets/personal_photo/안성민.jpeg").default}/>
            <div>
              <h3>안성민</h3>
              <p style={{ fontWeight :"bold", color :"#2b77ab"}}>CTO & Co-Founder<br/>Data Scientist<br/>AI Engineer<br/> </p>
              <p>"Simple is the best"</p>
            </div>
          </PersonCard>
          <PersonCard>
          <img src= {require("../../../Assets/personal_photo/위지훈.jpeg").default}/>
            <div>
              <h3>위지훈</h3>
              <p style={{ fontWeight :"bold", color :"#2b77ab"}}>Co-Founder<br/>BackEnd SW Engineer</p>
              <p>"스스로 존경하면 다른 사람도 그대를 존경할 것이다." </p>
            </div>
          </PersonCard>
          <PersonCard>
          <img src= {require("../../../Assets/personal_photo/권민회.jpeg").default}/>
            <div>
            <h3>권민회</h3>
            <p style={{ fontWeight :"bold", color :"#2b77ab"}}>Co-Founder<br/>Data Scientist</p>
              <p>"Where there is a will, there is a way."</p>
            </div>
          </PersonCard>
          <PersonCard>
          <img src= {require("../../../Assets/personal_photo/김창희.jpeg").default}/>
            <div>
              <h3>김창희</h3>
              <p style={{ fontWeight :"bold", color :"#2b77ab"}}>Co-Founder<br/>FrontEnd SW Engineer</p>
              <p>"인생이 살맛나게 해주는 건 꿈이 현실이 되리라 믿는 것이다."</p>

            </div>
          </PersonCard>
        </CardContainer>
      </AboutContainer>
    </div>
  );
}
