import React from 'react'
import styled from 'styled-components'
import Navigation_bar from '../../common/Navigation'
// const 한개 container 밑에 사람마다 

const AboutContainer = styled.div`
  padding-top: 75px;
  /* border : 1px solid green; */
  width: 70vw;
  display:flex;
  margin: auto;
  h2 {
    margin: 0 0 15px 0;
    /* background-color: rgb(202,231,193); */
  }
` 
const PersonCard = styled.div`
  border-radius: 20px;
  box-shadow : 1px 1px 1px grey;
  padding : 10px;
  margin : 10px;
  width : 50%;
  display:flex;

div {
  padding-left  :10px;
}
h3 {
  margin-bottom:10px;
}

img{
  object-fit : cover;
  border-radius: 50%;
  height : 150px;
  width : 150px;
  margin-right : 10px;
  padding :5px;
}
ul{
  background-color : white;
  border-radius : 20px;
  padding :5px 0;
  li{
    list-style: none;
    font-size : 13px;
    padding-bottom:10px;
  }
}`

export default function AboutPage() {
  return (
    <div> 
      <Navigation_bar />
      <AboutContainer>
      <PersonCard>
        <img src=""/>
        <div>
            <h2>김창희</h2>
        </div>
      </PersonCard> 
      <PersonCard>
        <img src=""/>
        <div>
            <h2>김창희</h2>
        </div>
      </PersonCard> 

      </AboutContainer>
      
      <AboutContainer>
      <PersonCard>
        <img src=""/>
        <div>
          <ul>
            <li>김창희</li>
          </ul>
        </div>
      </PersonCard> 
      <PersonCard>
        <img src=""/>
        <div>
            <h2>김창희</h2>
          </div>
      </PersonCard> 

      </AboutContainer>
      
    </div>
  )
}

