import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ( {history} ) => {

    const {user, dispatch} = useContext(AuthContext)

    const handleLogin = () =>{

        const lastpath = localStorage.getItem('lastpath') || '/'

        console.log("Toy entrando a",lastpath)

        const action = {
            type:types.login,
            payload:{
                name:'Miguel'
            }
        }

        dispatch(action)

        history.replace(lastpath)

    }


    console.log(user)


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                classname="btn btn-primary"
                onClick={()=>{handleLogin()}}>
                    Login!
            </button>


        </div>
    )
}
