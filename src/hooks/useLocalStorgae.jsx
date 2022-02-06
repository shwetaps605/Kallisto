import { useState, useEffect } from 'react'

const useLocalStorage = (key, defaultValue) => {

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) {
            return JSON.parse(jsonValue)
        }
        if (typeof defaultValue === 'function') return defaultValue()
        return defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [key, setValue]
}

export default useLocalStorage