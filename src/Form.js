import { useEffect } from "react"
import styled from 'styled-components'
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

let toChew = false
let hasSubmit = false

export default function Form(props) {

    const { 
        name, 
        changeName, 
        email, 
        changeEmail, 
        role, 
        changeRole, 
        temperament, 
        changeTemperament, 
        breed, 
        changeBreed, 
        chew, 
        changeChew, members, setMembers, formErrors, disabled, setDisabled } = props


    function submit(e) {
        e.preventDefault()
        setMembers([...members, {name: name, email: email, role: role, breed: breed, temperament: temperament}])
        hasSubmit = true
    }

        useEffect(() => {
            const formValues = {name, email, role, breed, temperament, chew}

            formSchema.isValid(formValues)
            .then((valid) => {
                setDisabled(!valid)
            })
        }, [name, email, role, breed, temperament, chew])

        useEffect(() => {
            if (chew === true) {
                toChew = false
            } else if (chew === false) {
                toChew = true
            }
        }, [chew])


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
            <form onSubmit={submit}>
            <label> Name:
                <input 
                    name="name"
                    type="text"
                    id="nameselect"
                    value={name}
                    placeholder="Name"
                    onChange={changeName}
                />
            </label>
            <label> Email:
                <input 
                    name="email"
                    type="email"
                    id="emailselect"
                    value={email}
                    placeholder="Email"
                    onChange={changeEmail}
                />
            </label>
            <label> Role:
                <select id="roleselect" name="role" onChange={changeRole}>
                    <option value="">Choose:</option>
                    <option value="Barista">Barista</option>
                </select>
            </label>
            <label> Breed:
                <input 
                    name="breed"
                    type="text"
                    id="breedselect"
                    value={breed}
                    placeholder="Mutt?"
                    onChange={changeBreed}
                />
            </label>
            <label> Temperament:
                <input 
                    name="temperament"
                    type="text"
                    id="breedselect"
                    value={temperament}
                    placeholder="Laidback"
                    onChange={changeTemperament}
                />
            </label>
            <label> Do you chew furniture?
                <input 
                    name="chew"
                    type="checkbox"
                    id="chewselect"
                    checked={chew}
                    onChange={changeChew}
                />
            </label>
            <button disabled={disabled}>Submit Your Info</button>
            <br></br>
            <br></br>
            <button onClick={(e) => {
                e.preventDefault()
                localStorage.clear()
                }}>Clear Login Storage</button>
        </form>
        </FormMemberStyled>
            :
            <FormMemberStyled>
            <h2>Congratulations - You just successfully submitted your application!</h2>
            <p> We will be processing it shortly, and will email you back with your results. In the meantime - you can imagine already being on the team with your info now above. Thank you!</p>
            {
                !toChew ? 
                <p>Please note, should any workplace equipment need to be replaced due to "oral-inflicted" damage - you will be responsible for it. Thank you.</p>
                :
                <p>Glad to hear you don't have any bad chewing habits. We lost an espresso machine that way. Not fun.</p>
            }
            </FormMemberStyled>
        }
        
        </>
    )
        
}