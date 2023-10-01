import styled from "styled-components"

export const HeadingDiv = styled.div`
max-width: 100%;
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
},
#navigation {
  margin: 1.5rem 0;
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
}
#navigation a {
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;
  color: #8f5f5f;
  border: .2rem solid #a66122;
  margin: .5rem 1rem;
  padding: .2rem;
}
`

export const BodyContentDiv = styled(HeadingDiv)`
h2 {
  font-size: 2.5rem;
};
h3 {
  font-size: 2rem;
}
span {
  font-weight: bold;
}
`