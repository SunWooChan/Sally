import React from 'react'

const TextTypeQuestion = (props)=>{
  return(
  <>
    <div className = 'questionBody'>
      <h3>질문 {props.questionInfo.id}</h3>
      <h4>{props.questionInfo.question}</h4>
      <form>
       <input type = {props.questionInfo.type} 
        id = {props.questionInfo.id}
        name={props.questionInfo.id}
        checked = 
        />
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

export default function QuestionTypes() {


  return (
    <div>
      
    </div>
  )
}
