// 지시사항을 참고하여 코드를 작성해보세요.
import React, { useState } from "react";

function App() {
  const [state, setState] = useState({
    name: "",
    age: 20,
    school: "",
  });

  return (
    <div className="App">
      <input
        value={state.name}
        onChange={(e) => {
          setState((cur) => {
            let newState = { ...cur };
            newState.name = e.target.value;
            return newState;
          });
        }}
      />

      <input
        value={state.age}
        onChange={(e) => {
          setState((cur) => {
            let newState = { ...cur };
            newState.age = e.target.value;
            return newState;
          });
        }}
      />
      <input
        value={state.school}
        onChange={(e) => {
          setState((cur) => {
            let newState = { ...cur };
            newState.school = e.target.value;
            return newState;
          });
        }}
      />
      <p>
        {state.name}님은 {state.school}에 재학 중이며 현재 {state.age}세입니다.
      </p>
    </div>
  );
}

export default App;
