import React from 'react'
import styled from 'styled-components'

const Vertical_Card = styled.div`
  /* border : 1px solid black; */
  border-radius: 20px;
  padding : 10px;
  margin : 10px;
  display:flex;
  /* 시간 남으면 토글 기능 넣을 것. 아래 화살표 클릭하면, 펼쳐지는 것. 
  height 만 없애면 될듯
  */
  /* text-align:center; */
  img{
    height : 200px;
    width : 200px;
    margin-right : 10px;
  }
  ul{
    li{
      color:red;
      list-style: none;
    }
  }
`

// const data = {
//   name : "냠냠",
//   effect : "효능이가 좋다",
//   feature : "루꼴라는 생김새가 우리나라의 시금치와 함께 톡 쏘는 효과적이며, 루꼴라의 특유의 강한 향은 입맛을 돋궈주어 여름철 식욕 증진에 효과적입니다.​"
// }

// 엔터 친거는 붙이기. 

export default function VerticalCard({name, hyo, feature, src}) {
  // feature = String(feature)
  // console.log(feature);
  
  // data= 오이 :효능어쩌고
  // data["효능"]
  // var data = JSON.stringify(data)
  const Nsrc = String(src)
  console.log(Nsrc)
  // console.log(typeof(src))
  
  return (
    <Vertical_Card>
      <img src= {`/Assets/img/${Nsrc}`}/>
       <img src={Nsrc}/>
       <div>
       <h2>{name}</h2>
       <ul>
         <li>효능 : {hyo} </li> 
         <li>특성 : {feature}</li>
       </ul>
       </div>
    </Vertical_Card>
  )
}