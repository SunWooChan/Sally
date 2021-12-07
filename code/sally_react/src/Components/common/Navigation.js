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

  @media screen and (max-width :800px){
    width : 100vw;
    height: 60px;    
    padding:0 0;
}

`
const NavigationMenus = styled.ul`
  display :flex;
  justify-content: space-evenly;
  align-items:center;
  
  @media screen and (max-width :800px){
    width: 100vw;
  }

`

const NavigationMenu = styled.li`
  list-style-type: none;
  width: 0px;
  padding-right: 10px;
  color : #4c4c4c;
  @media screen and (max-width :800px){
    width: 20px;
    /* padding :5px 0; */
    font-size : 80%;
  }
`

const NavLogo = styled.h1`

  img{
    height : 70px;

  @media screen and (max-width :800px){  
    height:50px;
    max-height:50px;
    z-index : 1;
  }
  }
`
export default function Navigation_bar() {
    return (
      <NavigationContainer>
        <NavLogo class="logo" >
          <Link to = "/" >
          <img src = {Logo} alt='logo' />
          </Link>
        </NavLogo>
        <NavigationMenus>
            <NavigationMenu><a href="/intro">Info</a></NavigationMenu>
            <NavigationMenu><Link to = "/survey">Service</Link></NavigationMenu>
            <NavigationMenu><a href="/about">About</a></NavigationMenu>
            <NavigationMenu><a href="/contact">Contact</a></NavigationMenu>
        </NavigationMenus>
      </NavigationContainer>
    )
}