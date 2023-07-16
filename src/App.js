import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { useState, useEffect} from 'react';

const mainBody = document.querySelector("body")
mainBody.style.background = "#bea483 "

const all = document.querySelectorAll("*")
all.forEach((element) => {
  element.style.border = ".2rem solid black"
})

const HeadingDiv = styled.div`
background-color: #ecdecc;
border: .5rem solid  #a66122 ;
border-radius: 1rem;
margin: 1rem .5rem;
font-family: Oxygen;
color: #8f5f5f ;
text-align: center;
h1 {
  font-size: 3rem;
  border-bottom: thick double #733803;
};
p {
  font-size: 2rem;
};
img {
  max-width: 100%;
};
.headingInnerDiv {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
};
.headingInnerDivTextContent {
  width: 40%;
}
`

const BodyContentDiv = styled(HeadingDiv)`

`

function App() {
  return (
    <>
    <HeadingDiv>
    <h1>The Woofing Bean Application Page:</h1>
    <div className='headingInnerDiv'>
      <img src="https://perfectdailygrind.com/wp-content/uploads/2019/02/coffee-bar.jpg" />
      <div className='headingInnerDivTextContent'>
      <p>🐶 Join The Woofing Bean! 🐾</p>
      <p>Ready to ditch the old bone and fetch a new job? Come wag with us at The Woofing Bean, where coffee is our bark-tastic specialty and doggy charm is a must!</p>
      <p>We need paw-some applicants who can brew tail-wagging coffee, serve pup-solutely delicious treats, and have a nose for customer happiness. If you're a four-legged go-getter with a talent for treat hunting, we've got a spot just for you!</p>
      <p>Drop off your impressive resume (paw print required) at our doghouse front desk (Digitally speaking of course silly). Squirrel-chasing and mailman-alerting skills are a big plus! And remember, a shiny coat and wagging tail are essential for that all-important first impression.</p>
      <p>So, spruce up those paws, join our pack, and let's fetch success together at The Woofing Bean! It's a woof-tastic adventure waiting to happen!</p>
      <p>Tail wags,<br/>The Woofing Bean Team 🐾</p>
      </div>
    </div>
    </HeadingDiv>
    <BodyContentDiv>
      <h2>Hey</h2>
    </BodyContentDiv>
    </>
  );
}

export default App;
