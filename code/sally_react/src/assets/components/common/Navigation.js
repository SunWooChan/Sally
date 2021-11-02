import React from 'react'
import Logo from './../../images/logo.png'
import './Navigation.css'

import {
  Link,
} from "react-router-dom";export default function Navigation_bar() {
    const login = () => {
        return 
    }
    return (
        <header id='navHeader'>
          <div className='container'>
        <h1 class="logo">
        <img src = {Logo} alt='logo'/>
        </h1>
        <nav>
          <ul>
            <li><a href="#serviceFunctions">서비스 소개</a></li>
            <li><a href="#survey">건강 분석</a></li>
            <li><a href="#products">추천 제품 보기</a></li>
            <li><a href="#feedback">고객 후기</a></li>
            <li><a href="#">고객센터</a></li>
            <li> <Link to = "/login">Login</Link></li>
          </ul>
        </nav>
        </div>
  
      </header>

    )
}