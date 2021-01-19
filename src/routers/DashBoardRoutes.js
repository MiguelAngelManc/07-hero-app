import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { DcScreen } from '../Components/dc/DcScreen'
import { HeroScreen } from '../Components/heroes/HeroScreen'
import { MarvelScreen } from '../Components/marvel/MarvelScreen'
import { SearchScreen } from '../Components/search/SearchScreen'
import { Navbar } from '../Components/ui/Navbar'

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">

                <Switch>

                    <Route exact path="/marvel" component={ MarvelScreen }/>
                    <Route exact path="/hero/:heroeId" component={ HeroScreen }/>
                    <Route exact path="/dc" component={ DcScreen }/>
                    <Route path="/search" component={ SearchScreen }/>

                    <Redirect to="/marvel"/>
                    
                </Switch>

            </div>
        </>
    )
}
