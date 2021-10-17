import React, { useRef,useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function LoginForm() {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  // const [inputId,setInputId]  = useState('')
  // const [inputPw,setInputPw]  = useState('') 이게 Ref.current.value로 email에 담는것과 동일한듯

  const submitForm = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    // DetailPage로 이동하는 코드를 작성하세요.
    history.push(`/detail?email=${email}&password=${password}`)
  };

  useEffect(() => {
    axios.get('/user_inform/login')
    .then(res => console.log(res))
    .catch()
},[])// 이 부분 왜 필요한지 모르겠음 ㅇㅅㅇ

  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter email."
            required
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            required
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
            placeholder="Enter password."
          />
        </fieldset>
        <button type="submit" onClick={submitForm}>
          Login
        </button>
      </form>
    </div>
  );
}
