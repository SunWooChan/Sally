import React from 'react'
import styled from 'styled-components'

const Horizontal_Card = styled.div`
  width : 20%;
  height : 15%;

  /* box-shadow : 1px 1px 1px grey; */
  border-radius: 20px;
  padding : 10px;
  margin : 10px;
  text-align:center;
  @media screen and (max-width :800px){
      /* height : 150px; */
      width: 50%;
      padding : 0px;

  }
  img{

    height : 150px;
    width : 150px;
    margin-bottom:10px;
    @media screen and (max-width :800px){
      height : 150px;
      width : 100%; 
    }
  }
  ul{
    border:1px solid ;
    li{
      color:red;
      list-style: none;
    }
  }
`

export default function HorizontalCard(props) {
  const Data = {...props.data}
  const Name = String(Data.name);
  
  return (
    <Horizontal_Card>
      <img src={require(`../../../Assets/img_topping/${Name}.jpg`).default} style={{ objectFit:"cover", borderRadius:"50px"}}/>
       <h3>{Data.name}</h3>
    </Horizontal_Card>
  )
}
