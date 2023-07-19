import { useState, useEffect } from "react"
import styled from 'styled-components'
import * as Yup from 'yup'
import formSchema from "./formSchema"

const FormMemberStyled = styled.div`
background-color:  #c9c0b5;
border: .3rem solid #733803;
margin: 1rem 5%;
input, label {
    text-align: center;
    font-size: 2rem;
    margin: 2rem 0;
};
label {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 1rem 20%;
};
option, select {
    font-size: 1.5rem;
    max-width: 12rem;
    margin: 2rem 0;
};
button {
    font-size: 2rem;
}
`
let hasSubmit = false
let chewed = false

export default function Form(props) {

    const { members, setMembers, formValues, setFormValues, formErrors, setFormErrors, disabled, setDisabled } = props


    function validate(name, value) {
        Yup.reach(formSchema, name)
        .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ""}))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }

    useEffect(() => {
        formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])


    function change(e) {
        const {value, name, checked, type} = e.target
        const typeOf = type === "checkbox" ? checked : value
        validate(name, typeOf)
        setFormValues({...formValues, [name] : typeOf})
        if (type === "checkbox") {
           chewed = !chewed
        }
    }

    function submit(e) {
        e.preventDefault()
        setMembers([...members, {name: formValues.name, email: formValues.email, role: formValues.role, breed: formValues.breed, temperament: formValues.temperament}])
        setFormValues({name: "", email: "", role: "", breed: "", temperament: "", chew: ""})
        hasSubmit = true
    }

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
        <p>To allow a more personal and fun experience, on submission of your application - it will be appended to the main list above to make you feel like you're apart of the team!</p>
        <p><span>Please note: </span>We are currently looking for the role of 'Barista' only. Also ask your owner for help if you don't know how to use an electronic device.</p>

        <FormMemberStyled>
            {
            Object.keys(formErrors).map(error => {
               return <p>{formErrors[error]}</p>
            })
            }
        </FormMemberStyled>
        {
            !hasSubmit ? 
 
            <FormMemberStyled>
            <form onSubmit={(e) => submit(e)}>
            <label> Name:
                <input 
                    name="name"
                    type="text"
                    id="nameselect"
                    value={formValues.name}
                    placeholder="Name"
                    onChange={(e) => {
                        e.preventDefault()
                                if (/^[a-zA-Z\s]+$/.test(e.target.value) || e.target.value === '') {
                                    validate(e.target.name, e.target.value)
                                    setFormValues({ ...formValues, [e.target.name]: e.target.value });
                                } 
                    }}
                />
            </label>
            <label> Email:
                <input 
                    name="email"
                    type="email"
                    id="emailselect"
                    value={formValues.email}
                    placeholder="Email"
                    onChange={(e) => change(e)}
                />
            </label>
            <label> Role:
                <select id="roleselect" name="role" onChange={(e) => change(e)}>
                    <option value="">Choose:</option>
                    <option value="Barista">Barista</option>
                </select>
            </label>
            <label> Breed:
                <input 
                    name="breed"
                    type="text"
                    id="breedselect"
                    value={formValues.breed}
                    placeholder="Mutt?"
                    onChange={(e) => change(e)}
                />
            </label>
            <label> Temperament:
                <input 
                    name="temperament"
                    type="text"
                    id="breedselect"
                    value={formValues.temperament}
                    placeholder="Laidback"
                    onChange={(e) => change(e)}
                />
            </label>
            <label> Do you chew furniture?
                <input 
                    name="chew"
                    type="checkbox"
                    id="chewselect"
                    checked={formValues.chew}
                    onChange={(e) => change(e)}
                />
            </label>
            <button disabled={disabled}>Submit Your Info</button>
        </form>
        </FormMemberStyled>
            :
            <FormMemberStyled>
            <h2>Congratulations - You just successfully submitted your application!</h2>
            <p> We will be processing it shortly, and will email you back with your results. In the meantime - you can imagine already being on the team with your info now above. Thank you!</p>
            {
                chewed ? 
                <p>Please note, should any workplace equipment need to be replaced due to "oral-inflicted" damage - you will be responsible for it. Thank you.</p>
                :
                <p>Glad to hear you don't have any bad chewing habits. We lost an espresso machine that way. Not fun.</p>
            }
            </FormMemberStyled>
        }
        
        </>
    )
        
}