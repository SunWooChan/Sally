import React from 'react'
import styled from 'styled-components'

const Horizontal_Card = styled.div`
  width : 30%;
  height : 350px;
  border : 1px solid black;
  border-radius: 20px;
  padding : 10px;
  margin : 10px;
  text-align:center;
  img{
    height : 150px;
    width : 150px;
  }
  ul{
    border:1px solid ;
    li{
      color:red;
      list-style: none;
    }
  }
`

export default function HorizontalCard() {
  
  
  return (
    <Horizontal_Card>
       <img/>
       <h2>호리존이름</h2>
       <ul>
         <li>효능 1번</li>
         <li>효능 2번</li>
         <li>효능 3번</li>
       </ul>
       <p>채소 특성</p>
    </Horizontal_Card>
  )
}
