import axios from "axios";
import React, { useRef } from "react";

export default function RegisterForm({ onSubmit }) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const formData = {
      username,
      password,
    };
  // 웹에서 데이터 주고받을 떄는 무조건 JSON 파일로 넘나듬.

    onSubmit(formData);
  };

  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input
            placeholder="Enter Username."
            required
            ref={usernameRef}
            id="username"
            type="username"
            name="username"
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
        <button onClick={submitForm}>Register</button>
      </form>
    </div>
  );
}
