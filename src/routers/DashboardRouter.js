import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Estudiantes } from "../components/Estudiantes";

export const DashboardRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/estudiante"  component={Estudiantes}/>
                <Redirect to="/estudiante" />
            </Switch>
        </div>  
    )
}
