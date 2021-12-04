import React from 'react'
import Logo from '../../Assets/images/logo.png'

import {
  Link,
} from "react-router-dom";

import styled from 'styled-components';

const NavigationContainer = styled.div`
  width : 70vw;
  padding : 0 15% 0 15%;
  /* margin : 0 10vw; // 중앙에 알아서 정렬을 못했음 */
  background-color: white;
  position:fixed;

  display :flex;
  justify-content : space-between; 
  align-items:center;


  z-index: 1;
  height: 75px;
  border-bottom: 4px solid pink;
`
const NavigationMenus = styled.ul`
  display :flex;
  justify-content: space-evenly;
  align-items:center;
`

const NavigationMenu = styled.li`
  list-style-type: none;
  width: 90px;
  padding-left: 15px;
  color : #4c4c4c;
`

export default function Navigation_bar() {
    return (
      
      <NavigationContainer>
        <h1 class="logo">
          <Link to = "/" >
          <img src = {Logo} alt='logo' style={{height : "70px"}}/>
          </Link>
        </h1>
        <NavigationMenus>
            <NavigationMenu><a href="/intro">Info</a></NavigationMenu>
            <NavigationMenu><Link to = "/survey">Service</Link></NavigationMenu>
            <NavigationMenu><a href="/about">About</a></NavigationMenu>
            <NavigationMenu><a href="/contact">Contact</a></NavigationMenu>
            {/* <NavigationMenu><Link to = "/login">Login</Link></NavigationMenu> */}
        </NavigationMenus>
      </NavigationContainer>
    )
}