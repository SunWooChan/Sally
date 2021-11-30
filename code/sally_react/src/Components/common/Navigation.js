import React from 'react'
import Logo from '../../Assets/images/logo.png'

import {
  Link,
} from "react-router-dom";

import styled from 'styled-components';

const NavigationContainer = styled.header`
  width : 80vw;
  margin : 0 10vw;
  background-color: white;
  position:fixed;

  display :flex;
  justify-content : space-between; 
  align-items:center;

  z-index: 1;
  height: 75px;
`
const NavigationMenus = styled.ul`
  display :flex;
  justify-content: space-between;
`
const NavigationMenu = styled.li`
  list-style-type: none;
  width: 90px;
`



export default function Navigation_bar() {
    const login = () => {
        return 
    }
    return (
      <NavigationContainer>
        <h1 class="logo">
          <img src = {Logo} alt='logo' style={{height : "60px"}}/>
        </h1>
        <NavigationMenus>
            <NavigationMenu><a href="#serviceFunctions">서비스 소개</a></NavigationMenu>
            <NavigationMenu><Link to = "/survey">건강 분석</Link></NavigationMenu>
            <NavigationMenu><a href="#products">추천 제품 보기</a></NavigationMenu>
            <NavigationMenu><a href="#">고객센터</a></NavigationMenu>
            <NavigationMenu><Link to = "/login">Login</Link></NavigationMenu>
        </NavigationMenus>
      </NavigationContainer>
        

    )
}