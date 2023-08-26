import * as Yup from 'yup'
import { useState, useEffect } from 'react'
import formSchema from './formSchema'

export function useForm(intialValue, errors, setErrors) {
    const [values, setValues] = useState(intialValue)

    const validate = (name, value) => {
        Yup.reach(formSchema, name)
        .validate(value)
        .then(() => {
            setErrors({...errors, [name] : ''})
        })
        .catch((err) => {
            setErrors({...errors, [name] : err.errors[0]})
        })
    }

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target

        const typeOf = type === 'checkbox' ? checked : value
        console.log(values)

        setValues(typeOf)
        validate(name, typeOf)
    }

    return [values, handleChange]
}

export default useForm



