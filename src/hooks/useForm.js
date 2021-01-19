import React, {useState} from 'react'


export const useForm = (initialState = {}) =>{

    const [state, setstate] = useState(initialState)

    const handleInputChange = ({target}) =>{
        
        setstate({
            ...state,
            [target.name]:target.value
        })
    
    }

    const reset = () =>{
        setstate(initialState)
    }

    return [state,handleInputChange, reset];

}