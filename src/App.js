import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { useState, useEffect} from 'react';
import Form from './Form'

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
h2 {
  font-size: 2.5rem;
}
`

const teamMembers = [
  {
    name: "Bleu",
    email: "IChaseBirds@hotmail.com",
    role: "Owner",
    breed: "Queensland-Husky Mutt",
    temperament: "Bleu is a bundle of craziness and hyperactivity. Her enthusiasm is infectious, and she is always ready for a game of fetch or a wild adventure. Just try to keep up with this ball of energy!"
  },
  {
    name: "Coco",
    email: "CocoCuddles@gmail.com",
    role: "Barista",
    breed: "Poodle",
    temperament: "Coco is a sweet and gentle soul who spreads warmth and cuddles to everyone. She will whip up the most heartwarming drinks while showering customers with love and wagging tails. Prepare for a cozy and delightful coffee experience!"
  },
  {
    name: "Duke",
    email: "DukeTheBiscuit@yahoo.com",
    role: "Chief Treat Officer",
    breed: "Border Collie",
    temperament: "Duke is a dignified food connoisseur with a refined palate for treats. His sophisticated taste buds ensure that every doggy delicacy served at The Woofing Bean is top-notch. Expect a charming and sophisticated companion who will make your taste buds dance with joy!"
  },
  {
    name: "Luna",
    email: "LunaTheSnuggleBug@gmail.com",
    role: "Customer Happiness Specialist",
    breed: "Beagle",
    temperament: "Luna is an absolute snuggle bug who spreads joy and happiness wherever she goes. With her wagging tail and endless cuddles, Luna ensures that every customer leaves with a smile and a heart full of warmth. Prepare for an overdose of cuteness and happiness!"
  },
  {
    name: "Max",
    email: "MaxTheEnergizer@woofmail.com",
    role: "Paw-latte Artist",
    breed: "Husky",
    temperament: "Max is a creative genius who can turn a simple latte into a masterpiece. With a dash of imagination and a swirl of creativity, Max creates stunning paw-latte art that will leave you speechless. Be ready for a coffee experience that's as visually pleasing as it is delicious!"
  }
];


function App() {

  const [formValues, setFormValues] = useState({name: "", email: "", role: "", breed: "", temperament: ""})
  const [teamList, setTeamList] = useState(teamMembers)


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
      <Form members={teamList} />
    </BodyContentDiv>
    </>
  );
}

export default App;
