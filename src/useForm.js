import * as Yup from 'yup'
import formSchema from './formSchema'
import useLocalStorage from './useLocalStorage'

export function useForm(key, intialValue, errors, setErrors) {
    const [values, setValues] = useLocalStorage(key, intialValue)

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



