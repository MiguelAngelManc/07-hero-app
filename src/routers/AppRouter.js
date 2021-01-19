import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { DcScreen } from "../Components/dc/DcScreen";
import { LoginScreen } from "../Components/login/LoginScreen";
import { MarvelScreen } from "../Components/marvel/MarvelScreen";
import { Navbar } from "../Components/ui/Navbar";
import { DashBoardRoutes } from "./DashBoardRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    
                    <Route path="/" component={ DashBoardRoutes } />
                    

                </Switch>
            </div>
        </Router>
    );
}
    
