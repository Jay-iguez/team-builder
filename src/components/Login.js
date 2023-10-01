import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HeadingDiv, BodyContentDiv } from "../styledComponents/styled";

const initialFormValues = {
    user: '',
    password: ''
}

export default function Login(props) {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [loginFail, setLoginFail] = useState('none')
    const [failCounter, setFailCounter] = useState(0)
    const navigate = useNavigate()

    const onChange = e => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const onSubmit = e => {
        e.preventDefault()

        if (formValues.user === 'BleuCool' && formValues.password === 'cheesecheese') {
            props.tokenState.setTokenName(true)
            navigate('/adminspace')
        } else {
            setFailCounter(failCounter + 1)
            setLoginFail('somethingelse')
        }

        if (formValues.user === 'Dog' && formValues.password === 'arg') {
            props.tokenState.setTokenName(true)
            navigate('/spooky')
        }
    }

    useEffect(() => {
        props.currentPageState.setPageType('Admin Login Page')
    }, [])


    return (
        <>
            <HeadingDiv>
                <h1>Administrative Login Form</h1>
                <form onSubmit={onSubmit}>
                    <label> Username:
                        <input
                            type='text'
                            name="user"
                            value={formValues.user}
                            onChange={onChange}
                        />
                    </label>
                    <label> Password:
                        <input
                            type='password'
                            name="password"
                            value={formValues.password}
                            onChange={onChange}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </HeadingDiv>
            <BodyContentDiv>
                <h2>Please Note:</h2>
                <p>Any un-authorized doggos who try to enter our Administrative server-side will be met with a timeout of no less than 20 dog years and no food for about an hour.
                </p>
                <br></br>
                <p style={{fontSize: '1rem'}}>And a visit from something else...</p>
                {
                    loginFail === 'none' ?
                        null
                        :
                        <>
                            {failCounter <= 3 ? <p>Wrong! Please try again</p> : <p>You're really bad at this aren't you?</p>}
                        </>
                }
            </BodyContentDiv>
        </>

    )
}