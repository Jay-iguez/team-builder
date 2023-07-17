import { useState } from "react"
import styled from 'styled-components'

const FormMemberStyled = styled.div`
background-color:  #c9c0b5;
border: .3rem solid #733803;
margin: 1rem 5%;
`


export default function Form(props) {

    const { members } = props

    return (
        <>
        <h2>Our Team Members: </h2>
        {
           members.map(member => {
            return (
                <FormMemberStyled>
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
                </FormMemberStyled>
            )
        }) 
        }
        <h2>Application Submisson</h2>
        <h3>Please submit your info here: </h3>
        <p>To allow a more personal and fun experience, on sumbission of your application - it will be appended to the main list above to make you feel like you're apart of the team!</p>
        <p><span>Please note: </span>We are currently looking for the role of 'Barista' only. Also ask your owner for help if you don't know how to use a electronic device.</p>
        <FormMemberStyled>
            <form>
            <label> Name:
                <input 
                    name="name"
                    type="text"
                    id="nameselect"
                    value=""
                    placeholder="Name"
                />
            </label>
            <label> Email:
                <input 
                    name="email"
                    type="text"
                    id="emailselect"
                    value=""
                    placeholder="Email"
                />
            </label>
            <label> Role:
                <select>
                    <option>Choose:</option>
                    <option value="Barista">Barista</option>
                </select>
            </label>
            <label> Breed:
                <input 
                    name="breed"
                    type="text"
                    id="breedselect"
                    value=""
                    placeholder="Mutt?"
                />
            </label>
            <label> Temperament:
                <input 
                    name="temperament"
                    type="text"
                    id="breedselect"
                    value=""
                    placeholder="Laidback"
                />
            </label>
            <label> Do you chew furniture?
                <input 
                    name=""
                    type="checkbox"
                    id="chewselect"
                    value=""
                />
            </label>
        </form>
        </FormMemberStyled>
        </>
    )
        
}