import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
    <Fade bottom>
        <Itemtext>
            <h1>{props.title}</h1>
            <p>
            {props.description} 
           </p>
        </Itemtext>
        </Fade>
        <Fade bottom>
        <Buttonsfinal>
        <Buttongroup>
            <Leftbutton>
                {props.leftbuttontxt}
            </Leftbutton>
            <Rightbutton>
            {props.rightbuttontxt}
            </Rightbutton>
        </Buttongroup>
        <Downarrow src="https://ayushgupta4002.github.io/images/down-arrow.svg"/>
        </Buttonsfinal>
        </Fade>
      
    </Wrap>
  )
}

export default Section

const Wrap= styled.div`
     width:100vw;
     height:100vh;
     background-size:cover;
     background-position:center;
     background-repeat: no-repeat;
     background-image:${props => `url("https://ayushgupta4002.github.io/images/${props.bgImage}")`};
     display:flex;
     flex-direction:column;
     justify-content:space-between;
     align-items:center;
`
const Itemtext= styled.div`
          padding-top:15vh;
`

const Buttongroup= styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:768px){
    flex-direction:column;
}
`
const Leftbutton= styled.div`
background-color: rgba(23,26,32,0.8);
color:white;
width:256px;
height:40px;
display:flex;
justify-content:center;
align-items:center;
opacity:0.75;
border-radius:100px;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`
const Rightbutton= styled(Leftbutton)`
background-color:white;
color:black;
opacity:0.65;

`
const Downarrow= styled.img`
color:white;
height:40px;
margin-top:20px;
margin-bottom:3px;

`
const Buttonsfinal =styled.div``
