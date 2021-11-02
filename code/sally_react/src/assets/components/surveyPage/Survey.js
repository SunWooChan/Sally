import React from 'react'
import {post} from 'axios'
import './Survey.css'
const TextTypeQuestion = (props)=>{
  // const options =props.questionInfo.options.map((option)=> {
  //   option
  //   // props.question = 
  // }
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


const RadioTypeQuestion = (props) => {
  const options = props.questionInfo.options.map(e => {
    return (
      <>
        <input type="radio" name={props.questionInfo.id} id={e} value="teenage" />
        <label for={e}>{e}</label><br />
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
    { id: '0', question: 'string', type: 'text'},
    { id: '1', question: '지금 피곤한가요?', type: 'radio', options: ['매우 그렇다', '그렇다', '보통이다', '아니다', '전혀 아니다'] },

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
    </div>
  )
}
