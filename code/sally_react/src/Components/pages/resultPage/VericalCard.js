import React from 'react'
import styled from 'styled-components'

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
    border:1px solid ;
    li{
      color:red;
      list-style: none;
    }
  }
`

const data = {
  name : "냠냠",
  effect : "효능이가 좋다",
  feature : "채소특 : 맛잇음"
}


export default function VerticalCard() {
  return (
    <Vertical_Card>
       <img/>
       <div>
       <h2>채소이름 {data.name}</h2>
       <ul>
         <li>효능 1번 {data.effect}</li> 
         <li>특성 {data.feature}</li>
       </ul>
       </div>
    </Vertical_Card>
  )
}
