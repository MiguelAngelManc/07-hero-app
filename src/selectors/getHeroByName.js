import React from 'react'
import { heroes } from '../data/heroes'



export const getHeroByName = (name = '') => {

    if(name === ''){
        return []
    }

    return heroes.filter(hero=>hero.superhero.toLowerCase().includes(name.toLowerCase()))

}
