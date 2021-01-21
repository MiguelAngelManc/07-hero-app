import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {

    const {user} = useContext(AuthContext)

    console.log(user)

    return (
        <>
        <h1>
            Marvel screen
        </h1>
        <hr />

        <HeroList publisher='Marvel Comics' />
        </>
    )
}
