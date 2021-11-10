import axios from 'axios'
import React from 'react'

import './Survey.css'
const handleSubmit = (formData) => {
  axios.post('api/users', formData)
}
// 응답이 Text 형태인 질문 => 
//questionInfo = { id, question, type } 가 있어야 한다.
const TextTypeQuestion = (props)=>{
  return(
  <>
    <div className = 'questionBody'>
      <h3>질문 {props.questionInfo.id}</h3>
      <h4>{props.questionInfo.question}</h4>
      <form>
       <input type = {props.questionInfo.type} name={props.questionInfo.id}  />
       <br/>
       <button type='submit'>다음</button>
       </form>
     </div>
   </>

   )

}

// 응답이 버튼 형태인 질문 =>
// questionInfo = { id, question, type, options } 가 있어야 한다.
const RadioTypeQuestion = (props) => {
  const options = props.questionInfo.options.map(e => {
    return (
      <>
        <input type="radio" name={props.questionInfo.id} value={e} /> {e} <br/>
      </>
    )
  }
  );
  return (
    <>
      <div className='questionBody'>
        <h3>질문 {props.questionInfo.id}</h3>
        <h4>{props.questionInfo.question}</h4>
        <form method='get'>
          {options}
        </form>
      </div>
    </>
  )
}


export default function Survey() {
  const questionInfos =[
    { id: '0', question: '성별을 선택해주세요.', type: 'radio', options :['남성', '여자']},
    { id: '1', question: 'string', type: 'text'},
    { id: '2', question: 'string', type: 'text'},
    { id: '3', question: '지금 피곤한가요?', type: 'radio', options: ['매우 그렇다', '그렇다', '보통이다', '아니다', '전혀 아니다'] },
  ]
  const questionList = questionInfos.map(element => {
    if ( element.type === 'radio' ) {
      return (<RadioTypeQuestion questionInfo={element} />)
    }
    else if (element.type === 'text'){ 
      return (<TextTypeQuestion questionInfo={element} />)
    }
  });
  return (
    <div style={{  height: '300px' }}>
      {questionList}
    </div>) 
}
