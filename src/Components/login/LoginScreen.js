import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useForm } from '../../hooks/useForm'
import { types } from '../../types/types'

export const LoginScreen = ( {history} ) => {

    const {user, dispatch} = useContext(AuthContext)


    const lastName = localStorage.getItem('lastname') || ''

    const [{username}, handleInputChange] = useForm({username:lastName})

    const handleLogin = () =>{

        const lastpath = localStorage.getItem('lastpath') || '/'

        const action = {
            type:types.login,
            payload:{
                name:username
            }
        }

        console.log(username)

        console.log(action)

        dispatch(action)

        history.replace(lastpath)

    }


    console.log(user)


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <input 
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
                autoComplete="off"
                placeholder="Username"
            />
            <button 
                className="btn btn-primary btn-box"
                onClick={()=>{handleLogin()}}>
                    Login!
            </button>


        </div>
    )
}
