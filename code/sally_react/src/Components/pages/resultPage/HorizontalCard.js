import React from 'react'
import styled from 'styled-components'

const Horizontal_Card = styled.div`
  width : 50%;
  height : 15%;
  background-color: salmon;
  box-shadow : 1px 1px 1px grey;
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
       <h2>토핑 1</h2>
    </Horizontal_Card>
  )
}
