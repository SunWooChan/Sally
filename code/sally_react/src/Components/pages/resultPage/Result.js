import React from 'react'
import { useLocation } from "react-router-dom";
 import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
export default function Result() {
  
  const location = useLocation();

  const data = location.state.survey;

  return (
    <div>
      결과입니다.
      {data}
    </div>
  )
}
