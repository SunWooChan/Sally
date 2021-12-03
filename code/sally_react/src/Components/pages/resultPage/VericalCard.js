import React from 'react'
import styled from 'styled-components'
import a from "../../../Assets/images"
const Vertical_Card = styled.div`
  border : 1px solid black;
  border-radius: 20px;
  padding : 10px;
  margin : 10px;
  display:flex;
  /* 시간 남으면 토글 기능 넣을 것. 아래 화살표 클릭하면, 펼쳐지는 것. 
  height 만 없애면 될듯
  */
  /* text-align:center; */
  img{
    height : 150px;
    width : 150px;
    margin-right : 10px;
  }
  ul{
    li{
      color:red;
      list-style: none;
    }
  }
`

const data = {
  name : "냠냠",
  effect : "효능이가 좋다",
  feature : "루꼴라는 생김새가 우리나라의 시금치와 함께 톡 쏘는 효과적이며, 루꼴라의 특유의 강한 향은 입맛을 돋궈주어 여름철 식욕 증진에 효과적입니다.​"
}

// 엔터 친거는 붙이기. 

export default function VerticalCard() {
  return (
    <Vertical_Card>
       <img/>
       <div>
       <h2>{data.name}</h2>
       <ul>
         <li>효능 : {data.effect}</li> 
         <li>특성 : {data.feature}</li>
       </ul>
       </div>
    </Vertical_Card>
  )
}