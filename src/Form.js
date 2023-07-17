import { useState } from "react"
import styled from 'styled-components'

const TeamMemberStyled = styled.div`
background-color:  #c9c0b5;
border: .3rem solid #733803;
margin: 1rem 5%;
h3 {
    font-size: 2rem;
}
`


export default function Form(props) {

    const { members } = props

    return (
        <>
        <h2>Our Team Members: </h2>
        {
           members.map(member => {
            return (
                <TeamMemberStyled>
                    {
                       Object.keys(member).map(dog => {
                    return (
                        <>
                        <h3>{dog.charAt(0).toUpperCase()+dog.substring(1)}:</h3>
                        <p>{member[dog]}</p>
                        </>
                    )
                    }) 
                    }
                </TeamMemberStyled>
            )
        }) 
        }
        </>
    )
        
}