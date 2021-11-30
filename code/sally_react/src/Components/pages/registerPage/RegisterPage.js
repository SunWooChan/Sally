import React  from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import axios from "axios";

export default function RegisterPage() {
  const handleSubmit = (formData) => {
    // formData < json파일임. {id}
    axios.post('http://localhost:3001/register',formData)
      .then((res) =>{console.log(res)})
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  );
}

const WrappedRegisterForm = styled(RegisterForm)`
  margin-bottom: 12px;
`;
