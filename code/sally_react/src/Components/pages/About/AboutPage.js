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
  width: 40vw;
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
  margin: 10px;
  width: 100%;
  display: flex;

  div {
    padding-left: 10px;
  }
  h3 {
    margin-bottom: 10px;
    color:#2b77ab;
  }

  img {
    object-fit: cover;
    border-radius: 50%;
    height: 150px;
    width: 150px;
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
        <PersonCard>
          <img src= {require("../../../Assets/personal_photo/선우찬.jpeg").default}/>
            <div>
              <h2>선우찬</h2>
              <h3>CEO & Co-Founder<br/>AI Engineer<br/>BackEnd SW Engineer<br/> </h3>
              <p>"The best motivation is just doing it"</p>

            </div>
          </PersonCard>
        <PersonCard>
          <img src= {require("../../../Assets/personal_photo/안성민.jpeg").default}/>
            <div>
              <h2>안성민</h2>
              <h3>CTO & Co-Founder<br/>Data Scientist<br/>AI Engineer<br/> </h3>
              <p>"  "</p>

            </div>
          </PersonCard>
          <PersonCard>
          <img src= {require("../../../Assets/personal_photo/위지훈.jpeg").default}/>
            <div>
              <h2>위지훈</h2>
              <h3>Co-Founder<br/>BackEnd SW Engineer</h3>
              <p>"어디 여자가"</p>
            </div>
          </PersonCard>
          <PersonCard>
          <img src= {require("../../../Assets/personal_photo/권민회.jpeg").default}/>
            <div>
            <h2>권민회</h2>
              <h3>Co-Founder<br/>Data Scientist</h3>
              <p>"어디 여자가"</p>
            </div>
          </PersonCard>
          <PersonCard>
          <img src= {require("../../../Assets/personal_photo/선우찬.jpeg").default}/>
            <div>
              <h2>김창희</h2>
              <h3>Co-Founder<br/>FrontEnd SW Engineer</h3>
              <p>"어디 여자가"</p>

            </div>
          </PersonCard>
        </CardContainer>
      </AboutContainer>
    </div>
  );
}
