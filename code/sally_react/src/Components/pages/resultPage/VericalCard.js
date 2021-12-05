import React from 'react'
import styled from 'styled-components'

const Vertical_Card = styled.div`
  border-radius: 20px;
  box-shadow : 1px 1px 1px grey;

  padding : 10px;
  margin : 10px;
  display:flex;
  div {
    padding-left  :10px;
  }
  h3 {
    margin-bottom:10px;
  }

  img{
    min-width:150px;

    object-fit : cover;
    border-radius: 50%;
    height : 150px;
    width : 150px;
    margin-right : 10px;
    padding :5px
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
  }
`

export default function VerticalCard(props) {
  const Data = {...props.data}
  const Name = String(Data.name);
  
  return (
    <Vertical_Card>
      <img src={require(`../../../Assets/img/${Name}.jpg`).default} />
       <div>
       <h3>{Data.name}</h3>
       <ul>
        <li style={{fontSize:"16px"}}>{Data.efficacy} </li>
        <li> {Data.feature}</li>
       </ul>
       </div>
    </Vertical_Card>
  )
}