import { useState } from 'react'

export default function useLocalStorage(key, intialValue){
    const [value, setValue] = useState(() => {
        const keyItem = window.localStorage.getItem(key)
        return keyItem ? JSON.parse(keyItem) : intialValue
    })

    const handleChangeValue = (updatedValue) => {
        setValue(updatedValue)
        window.localStorage.setItem(key, JSON.stringify(updatedValue))
    }
    
    return [value, handleChangeValue]
}