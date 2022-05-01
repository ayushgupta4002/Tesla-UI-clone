import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  
  const [swap,swapstate]=useState(false);
  return (

    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
      <p><a href="#" >Model S</a></p>
      <p><a href="#" >Model X</a></p>
      <p><a href="#" >Model Y</a></p>
      <p><a href="#" >Model 3</a></p>

      </Menu>
      <Rightmenu>
      <a href="#" >Shop</a>
      <a href="#" >tesla account</a>
      <Customenu onClick={()=> swapstate(true)}></Customenu>
      
      </Rightmenu>


      <Swapmenu show={swap}>
      <Closewrapper>
           
      <Close onClick={()=> swapstate(false)}></Close>

      </Closewrapper>
      
        <li><a href="#" >Model S</a></li>
        <li><a href="#" >Model X</a></li>
        <li><a href="#" >Model Y</a></li>
        <li><a href="#" >Model 3</a></li>
        <li><a href="#" >Existing inventory</a></li>
        <li><a href="#" >Custom inventory</a></li>
      </Swapmenu>

    </Container>
  )
}

export default Header;
const Container=styled.div`
     min-height:60px;
     position:fixed;
     display: flex;
     align-items:center;
     justify-content:space-between;
     padding: 0 20px;
     left:0;
     top:0;
     right:0;
     z-index:1;
`

const Menu=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex: 1;
     
    p{
      font-weight:600;
      text-transform:uppercase;
      padding: 0 10px;
      
    }
    @media (max-width:768px){
    display:none;
}

`
 const Rightmenu=styled.div`
      display:flex;
      align-items:center;
    
     a{

      font-weight:600;
      text-transform:uppercase;
      margin-right:10px;
 

      }

 
 
 `

 const Customenu=styled(MenuIcon)`

     cursor:pointer;
 

 `
 const Swapmenu=styled.div`

    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width:300px;
    list-style:none;
    z-index:16;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${ props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.2s;
    li{
      padding:15px 0;
      border-bottom: 1px solid rgba(0,0,0, .2);
      a{
        font-weight:600;
      }
    }

 `
 const Close=styled(CloseIcon)`
 cursor:pointer;
 margin-left:90%;
 `
 const Closewrapper=styled.div`
   display:flex;
   right:0;
 `